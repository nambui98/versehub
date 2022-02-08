import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { appendApplication, uploadFileToDrive } from "@/utils/spreadsheets";

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		try {
			const form = formidable();
			const body = await new Promise<any>((resolve) => {
				form.parse(req, (err:any, fields:any, files:any) => {
					if (err) {
						console.error(err);
						resolve({ fields: {}, files: {} });
					} else {
						resolve({ fields, files });
					}
				})
			});
			const { jobName, firstName, lastName, email, phone, location } = body.fields;
			const { resume } = body.files;
			if (!resume || !jobName || !firstName || !lastName || !email || !phone || !location)
				return res.status(400).json({ message: 'Bad request' });
			const attachment = await uploadFileToDrive(resume);
			if (!attachment)
				return res.status(500).json({ message: 'Upload attachment failed' });
			await appendApplication({jobName, firstName, lastName, email, phone, location, attachment});
			res.json({ message: "Success" });
		} catch (err) {
			res.status(500).json({ message: err });
		}
	}
}
