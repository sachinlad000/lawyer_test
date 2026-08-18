export const onRequestPost = async ({ request, env }: any) => {
    try {
        let name, phone, email, age, gender, occupation, address, isPending, court, caseNo, stage, caseType, message;

        const contentType = request.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            const body = await request.json();
            name = body.name;
            phone = body.phone;
            email = body.email;
            age = body.age;
            gender = body.gender;
            occupation = body.occupation;
            address = body.address;
            isPending = body.is_pending;
            court = body.court;
            caseNo = body.case_no;
            stage = body.stage;
            caseType = body["case-type"] || body.caseType;
            message = body.message;
        } else {
            const formData = await request.formData();
            name = formData.get("name");
            phone = formData.get("phone");
            email = formData.get("email");
            age = formData.get("age");
            gender = formData.get("gender");
            occupation = formData.get("occupation");
            address = formData.get("address");
            isPending = formData.get("is_pending");
            court = formData.get("court");
            caseNo = formData.get("case_no");
            stage = formData.get("stage");
            caseType = formData.get("case-type");
            message = formData.get("message");
        }

        if (!name || !phone || !caseType || !message) {
            return new Response(JSON.stringify({ error: "Missing required fields (Name, Phone, Case Type, Message)" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        const apiKey = env.RESEND_API_KEY;
        if (!apiKey) {
            console.error("RESEND_API_KEY environment variable is missing on Cloudflare Workers.");
            return new Response(JSON.stringify({ error: "Server Configuration Error: RESEND_API_KEY is missing." }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "AP Legal Services Contact <onboarding@resend.dev>",
                to: ["sachinlad000@gmail.com"],
                subject: `New Case Enquiry: ${caseType} - ${name}`,
                html: `
            <h2>New Contact Form Submission - AP Legal Services</h2>
            <hr />
            <h3>Client Information:</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Email:</b> ${email || 'N/A'}</p>
            <p><b>Age / Gender:</b> ${age || 'N/A'} / ${gender || 'N/A'}</p>
            <p><b>Occupation:</b> ${occupation || 'N/A'}</p>
            <p><b>Address:</b> ${address || 'N/A'}</p>
            
            <hr />
            <h3>Legal Matter Details:</h3>
            <p><b>Case Type:</b> ${caseType}</p>
            <p><b>Matter Pending in Court:</b> ${isPending || 'N/A'}</p>
            <p><b>Court / Forum:</b> ${court || 'N/A'}</p>
            <p><b>Case No. / Year:</b> ${caseNo || 'N/A'}</p>
            <p><b>Stage / Next Date:</b> ${stage || 'N/A'}</p>
            
            <hr />
            <h3>Message / Description:</h3>
            <p>${message}</p>
          `,
            }),
        });

        if (!res.ok) {
            const errText = await res.text();
            console.error("Resend API Error:", res.status, errText);
            return new Response(JSON.stringify({ error: `Email delivery failed: ${errText}` }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        const acceptHeader = request.headers.get("accept") || "";
        if (acceptHeader.includes("application/json") || contentType.includes("application/json")) {
            return new Response(JSON.stringify({ success: true, redirect: "/thank-you" }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        }

        const url = new URL(request.url);
        return Response.redirect(`${url.origin}/thank-you`, 303);
    } catch (err: any) {
        console.error("Cloudflare Worker Error:", err);
        return new Response(JSON.stringify({ error: err.message || "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
