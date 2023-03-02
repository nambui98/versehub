import { google } from "googleapis";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

const jwt = new google.auth.JWT(
	serverRuntimeConfig.CLIENT_EMAIL,
	serverRuntimeConfig.CLIENT_ID,
	serverRuntimeConfig.PRIVATE_KEY.replace(/\\n/g, "\n"),
	["https://www.googleapis.com/auth/spreadsheets"]
);
const sheets = google.sheets({ version: "v4", auth: jwt });

const SHEET = {
	CONTACT_US: "Contact_us",
	JOBS: "ActiveJobs",
	APPLICATION: "Application",
};

export async function getJobList() {
	try {
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: serverRuntimeConfig.SPREADSHEET_ID,
			range: `${SHEET.JOBS}!A2:J100`,
		});
		const rows = response.data.values || [];
		if (rows.length && rows.length > 0) {
			return rows.map((row, idx) => ({
				href: `/jobs/${idx + 2}`,
				name: row[0] ?? null,
				department: row[1] ?? null,
				level: row[2] ?? null,
				location: row[3] ?? null,
				description: row[4] ?? null,
				offers: row[5] ?? null,
				responsibility: row[6] ?? null,
				requirement_definitely_need: row[7] ?? null,
				requirement_love_you_have: row[8] ?? null,
				personal_nature: row[9] ?? null,
				contact: [
					'Zalo/Telegram: 0967.913.863',
					'Mail: hr@versehub.io',
					'Skype: teasun1802',
					'Web: https://versehub.io/'
				]
			}));
		}
	} catch (err) {
		console.log(err);
	}
	return [];
}

export async function getJobIds() {
	try {
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: serverRuntimeConfig.SPREADSHEET_ID,
			range: `${SHEET.JOBS}!A2:A100`,
		});
		const rows = response.data.values || [];
		if (rows.length && rows.length > 0) {
			return rows.map((row, idx) => ({ id: idx + 2 }));
		}
	} catch (err) {
		console.log(err);
	}
	return [];
}

export async function getJobById(id: number) {
	try {
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: serverRuntimeConfig.SPREADSHEET_ID,
			range: `${SHEET.JOBS}!A${id}:H${id}`,
		});
		const rows = response.data.values || [];
		if (rows.length && rows.length > 0) {
			return rows.map((row, idx) => ({
				href: `/jobs/${idx + 2}`,
				name: row[0] ?? null,
				department: row[1] ?? null,
				level: row[2] ?? null,
				location: row[3] ?? null,
				description: row[4] ?? null,
				offers: row[5] ?? null,
				responsibility: row[6] ?? null,
				requirement_definitely_need: row[7] ?? null,
				requirement_love_you_have: row[8] ?? null,
				personal_nature: row[9] ?? null,
				contact: [
					'Zalo/Telegram: 0967.913.863',
					'Mail: hr@versehub.io',
					'Skype: teasun1802',
					'Web: https://versehub.io/'
				]
			}))[0];
		}
	} catch (err) {
		console.log(err);
	}
	return null;
}

function cleanTexts(texts: string) {
	return texts
		.split("\n")
		.map((el) => el.replace("-", "").trim())
		.filter((el) => !!el);
}

interface contactBody {
	name: string;
	email: string;
	message: string;
}

export async function appendContactUs(body: contactBody) {
	const data = {
		createdAt: new Date().toLocaleString("en-GB"),
		...body,
	};
	return sheets.spreadsheets.values.append({
		spreadsheetId: serverRuntimeConfig.SPREADSHEET_ID,
		range: SHEET.CONTACT_US,
		valueInputOption: "USER_ENTERED",
		requestBody: {
			values: [[...Object.values(data)]],
		},
	});
}

interface applyBody {
	jobName: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	location: string;
	attachments: string[];
}

export async function appendApplication(body: applyBody) {
	const data = {
		createdAt: new Date().toLocaleString("en-GB"),
		...body,
		attachments:
			body.attachments.length === 1
				? body.attachments[0]
				: body.attachments.join("\n"),
	};
	return sheets.spreadsheets.values.append({
		spreadsheetId: serverRuntimeConfig.SPREADSHEET_ID,
		range: SHEET.APPLICATION,
		valueInputOption: "USER_ENTERED",
		requestBody: {
			values: [[...Object.values(data)]],
		},
	});
}
