import { google } from "googleapis";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

const authClient = new google.auth.JWT(
	serverRuntimeConfig.CLIENT_EMAIL,
	serverRuntimeConfig.CLIENT_ID,
	serverRuntimeConfig.PRIVATE_KEY.replace(/\\n/g, "\n"),
	[
		"https://mail.google.com/",
		"https://www.googleapis.com/auth/gmail.addons.current.action.compose",
		"https://www.googleapis.com/auth/gmail.modify",
		"https://www.googleapis.com/auth/gmail.compose",
		"https://www.googleapis.com/auth/gmail.send",
	]
);

interface mailBody {
	subject: string;
	email: string;
	message: string;
}

export async function sendMail(body: mailBody) {
	try {
		// await authClient.authorize();
		const gmail = google.gmail({ version: "v1", auth: authClient });
		const res = await gmail.users.messages.list({
			auth: authClient,
			includeSpamTrash: false,
			maxResults: 5,
			q: "",
			userId: "me",
		});
		console.log("res", res);
	} catch (error) {
		console.log("error", error);
	}
	return true;
	// var raw = makeBody(
	// 	"ducngo@versehub.io",
	// 	"ducngo@versehub.io",
	// 	"test subject",
	// 	"test message"
	// );
	// const res = await gmail.users.messages.send({
	// 	// The user's email address. The special value `me` can be used to indicate the authenticated user.
	// 	// userId: "ducngo@versehub.io",
	// 	userId: "me",
	// 	// Request body metadata
	// 	requestBody: {
	// 		raw,
	// 		// request body parameters
	// 		// {
	// 		// "historyId": "my_historyId",
	// 		// "id": "my_id",
	// 		// "internalDate": "my_internalDate",
	// 		// "labelIds": [],
	// 		// "payload": {},
	// 		// "raw": "my_raw",
	// 		// "sizeEstimate": 0,
	// 		// "snippet": "my_snippet",
	// 		// "threadId": "my_threadId"
	// 		// }
	// 	},
	// 	// media: {
	// 	// 	mimeType: "placeholder-value",
	// 	// 	body: "placeholder-value",
	// 	// },
	// });
	// const res = await gmail.users.labels.list({ userId: "me" });

	// gmail.users.labels.list(
	// 	{
	// 		userId: "me",
	// 	},
	// 	(err, res) => {
	// 		if (err) return console.log("The API returned an error: " + err);
	// 		const labels = (res && res.data.labels) || [];
	// 		if (labels.length) {
	// 			console.log("Labels:");
	// 			labels.forEach((label) => {
	// 				console.log(`- ${label.name}`);
	// 			});
	// 		} else {
	// 			console.log("No labels found.");
	// 		}
	// 	}
	// );
}

function makeBody(to: string, from: string, subject: string, message: string) {
	var str = [
		'Content-Type: text/plain; charset="UTF-8"\n',
		"MIME-Version: 1.0\n",
		"Content-Transfer-Encoding: 7bit\n",
		"to: ",
		to,
		"\n",
		"from: ",
		from,
		"\n",
		"subject: ",
		subject,
		"\n\n",
		message,
	].join("");

	var encodedMail = new Buffer(str)
		.toString("base64")
		.replace(/\+/g, "-")
		.replace(/\//g, "_");
	return encodedMail;
}
