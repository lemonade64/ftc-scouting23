"use server";

export default async function submit(formData) {
  console.log(formData.teamNumber);

  try {
    const res = await fetch("http://localhost:3000/api/submit", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);

    if (res.ok) {
      console.log("Success :" + res.statusText);
      console.log("Form Submitted!");
    } else {
      console.log("Failure:" + res.statusText);
      throw new Error("HTTP " + res.status);
    }
  } catch (e) {
    console.log("Failure:", e);
  }
}
