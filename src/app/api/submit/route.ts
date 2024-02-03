import { NextApiResponse, NextApiRequest } from "next";
import { google } from "googleapis";

type formData = {
  teamNumber: string;
  teamName: string;
  qualificationNumber: string;
  allianceColour: string;
  autonomousCycles: string;
  autonomousPosition: string;
  yellowPixel: string;
  purplePixel: string;
  teamProp: string;
  drone: string;
  climbTime: string;
  teleopCycles: string;
  penalties: string;
  notes: string;
};

export async function handler(res: NextApiResponse, req: NextApiRequest) {
  if (req.method !== "POST") {
    return res.status(405).send({
      message: "POST only",
    });
  }
  const body = req.body as formData;

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
            body.teamNumber,
            body.teamName,
            body.qualificationNumber,
            body.allianceColour,
            body.autonomousCycles,
            body.autonomousPosition,
            body.yellowPixel,
            body.purplePixel,
            body.teamProp,
            body.drone,
            body.climbTime,
            body.teleopCycles,
            body.penalties,
            body.notes,
          ],
        ],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "error",
    });
  }
}

// import { NextResponse } from "next/server";
// import { google } from "googleapis";

// type formData = {
//   teamNumber: string;
//   teamName: string;
//   qualificationNumber: string;
//   allianceColour: string;
//   autonomousCycles: string;
//   autonomousPosition: string;
//   yellowPixel: string;
//   purplePixel: string;
//   teamProp: string;
//   drone: string;
//   climbTime: string;
//   teleopCycles: string;
//   penalties: string;
//   notes: string;
// };

// export async function POST(request: Request) {
//   if (req.method !== "POST") {
//     return res.status(405).send({
//       message: "POST only",
//     });
//   }
//   const body = req.body as formData;

//   try {
//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_CLIENT_EMAIL,
//         client_id: process.env.GOOGLE_CLIENT_ID,
//         private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//       },
//       scopes: [
//         "https://www.googleapis.com/auth/drive",
//         "https://www.googleapis.com/auth/drive.file",
//         "https://www.googleapis.com/auth/spreadsheets",
//       ],
//     });

//     const sheets = google.sheets({
//       auth,
//       version: "v4",
//     });

//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,
//       range: "Sheet1!A1:N1",
//       valueInputOption: "USER_ENTERED",
//       requestBody: {
//         values: [
//           [
//             body.teamNumber,
//             body.teamName,
//             body.qualificationNumber,
//             body.allianceColour,
//             body.autonomousCycles,
//             body.autonomousPosition,
//             body.yellowPixel,
//             body.purplePixel,
//             body.teamProp,
//             body.drone,
//             body.climbTime,
//             body.teleopCycles,
//             body.penalties,
//             body.notes,
//           ],
//         ],
//       },
//     });

//     return res.status(200).json({
//       data: response.data,
//     });
//   } catch (e) {
//     console.log(e);
//     return res.status(500).send({
//       message: "error",
//     });
//   }
// }
