"use server";

export default async function submit(formData) {
  console.log(formData);

  //   try {
  //     const response = await fetch("/api/submit", {
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (response.ok) {
  //       console.log("Form Submitted!");
  //     } else {
  //       throw new Error("network error");
  //     }
  //   } catch (e) {
  //     console.error("error: ", e);
  //   }

  //   const content = await response.json();

  //   alert(content.data.tableRange);
}
