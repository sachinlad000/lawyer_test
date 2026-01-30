export const onRequestPost = async ({ request, env }: any) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const caseType = formData.get("case-type");
    const message = formData.get("message");

    if (!name || !phone || !caseType || !message) {
        return new Response("Missing fields", { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: "Contact Form <onboarding@resend.dev>", // temp
            to: ["sachinlad000@gmail.com"],
            subject: `New Case: ${caseType}`,
            html: `
        <h3>New Contact</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Case:</b> ${caseType}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        }),
    });

    if (!res.ok) {
        return new Response("Email failed", { status: 500 });
    }

    // Cloudflare Workers requires absolute URL for redirects
    const url = new URL(request.url);
    return Response.redirect(`${url.origin}/thank-you`, 303);
};
