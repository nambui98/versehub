import { appendApplication } from "@/utils/spreadsheets";

export default function handler(req: any, res: any) {
	if (req.method === "POST") {
		const { jobName, firstName, lastName, email, phone, location } = req.body;
		if (jobName && firstName && lastName && email && phone && location)
			appendApplication({jobName, firstName, lastName, email, phone, location})
				.then(() => res.json({ message: "Success" }))
				.catch((err) => res.status(500).json({ message: err }));
		else
			res.status(400).json({ message: 'Bad request' });
	}
}
