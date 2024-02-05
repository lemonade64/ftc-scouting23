import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "POST ONLY" }, { status: 405 });
  }
  const data = await req.json();
  console.log(data);

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A1:N1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            data.teamNumber,
            data.teamName,
            data.qualificationNumber,
            data.allianceColour,
            data.autonomousCycles,
            data.autonomousPosition,
            data.yellowPixel,
            data.purplePixel,
            data.teamProp,
            data.drone,
            data.climbTime,
            data.teleopCycles,
            data.penalties,
            data.notes,
          ],
        ],
      },
    });

    return NextResponse.json({
      values: response.config.data.values,
      response: response,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
