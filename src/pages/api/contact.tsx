import { appendContactUs } from "@/utils/spreadsheets";

export default function handler(req: any, res: any) {
	if (req.method === "POST") {
		const { name, email, message } = req.body;
		if (name && email && message)
			appendContactUs({ name, email, message })
				.then(() => res.json({ message: "Success" }))
				.catch((err) => res.status(500).json({ message: err }));
		else
			res.status(400).json({ message: 'Bad request' });
	}
}
