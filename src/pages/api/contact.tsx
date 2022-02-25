import { appendContactUs } from "@/utils/sheets.google";
import { sendMail } from "@/utils/gmail.google";

export default function handler(req: any, res: any) {
	if (req.method === "POST") {
		const { name, email, message } = req.body;
		if (name && email && message)
			appendContactUs({ name, email, message })
				// sendMail({ subject: name, email, message })
				.then(() => res.json({ message: "Success" }))
				.catch((err) => res.status(500).json({ message: err }));
		else res.status(400).json({ message: "Bad request" });
	}
}
