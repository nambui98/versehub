import { google } from "googleapis";
import getConfig from "next/config";
import fs from "fs";
import PersistentFile from "formidable/PersistentFile";

const { serverRuntimeConfig } = getConfig();
const scopes = [
	"https://www.googleapis.com/auth/spreadsheets",
	"https://www.googleapis.com/auth/drive",
	"https://www.googleapis.com/auth/drive.file",
];
const jwt = new google.auth.JWT(
	serverRuntimeConfig.CLIENT_EMAIL,
	serverRuntimeConfig.CLIENT_ID,
	serverRuntimeConfig.PRIVATE_KEY.replace(/\\n/g, "\n"),
	scopes
);
const sheets = google.sheets({ version: "v4", auth: jwt });
const drive = google.drive({ version: "v3", auth: jwt });

const SHEET = {
	CONTACT_US: "Contact_us",
	JOBS: "ActiveJobs",
	APPLICATION: "Application",
};

export async function uploadFileToDrive(file: any) {
	try {
		const res = await drive.files.create({
			media: {
				mimeType: file.mimetype,
				body: fs.createReadStream(file.filepath),
			},
			requestBody: {
				name: file.originalFilename,
				parents: ["1_WsHxHgJqe_r3pbDIN1YmHwj5UnXqjo8"],
			},
			supportsAllDrives: true,
		});
		// console.log('drive.files.create', res.data);
		if (res.data && res.data.id)
			return `https://drive.google.com/file/d/${res.data.id}/view?usp=sharing`;
		return null;
	} catch (err) {
		console.log(err);
		return null;
	}
}

export async function getJobList() {
	try {
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: serverRuntimeConfig.SPREADSHEET_ID,
			range: `${SHEET.JOBS}!A2:C100`,
		});
		const rows = response.data.values || [];
		if (rows.length && rows.length > 0) {
			return rows.map((row, idx) => ({
				href: `/jobs/${idx + 2}`,
				name: row[0],
				department: row[1],
				location: row[2],
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
				name: row[0],
				department: row[1],
				location: row[2],
				description: row[3],
				offers: cleanTexts(row[4] || ""),
				responsibilities: cleanTexts(row[5] || ""),
				needRequirements: cleanTexts(row[6] || ""),
				loveRequirements: cleanTexts(row[7] || ""),
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
	attachment: string;
}

export async function appendApplication(body: applyBody) {
	const data = {
		createdAt: new Date().toLocaleString("en-GB"),
		...body,
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
