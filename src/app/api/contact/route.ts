import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, service, message } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and Email are required fields." },
        { status: 400 }
      );
    }

    const recipientEmail = "dhirendra722290@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    console.log("📥 [SPRY API] Processing Campaign Strategy Request for:", recipientEmail, {
      name,
      email,
      company: company || "N/A",
      budget: budget || "Not specified",
      service: service || "AI Video Ads",
      message: message || "No message provided",
      timestamp: new Date().toISOString(),
    });

    // Send Email via Resend API if API Key is configured
    if (resendApiKey && resendApiKey !== "re_spry_production_demo_key") {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "SPRY Production <onboarding@resend.dev>",
          to: [recipientEmail],
          subject: `⚡ New SPRY Campaign Inquiry: ${name} (${company || "Brand"})`,
          html: `
            <div style="font-family: sans-serif; background-color: #040407; color: #ffffff; padding: 30px; border-radius: 16px;">
              <h2 style="color: #a855f7; margin-bottom: 20px;">🚀 New SPRY Production Strategy Request</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Client Email:</strong> ${email}</p>
              <p><strong>Company/Brand:</strong> ${company || "N/A"}</p>
              <p><strong>Monthly Budget:</strong> ${budget || "Not specified"}</p>
              <p><strong>Requested Service:</strong> ${service || "AI Video Ads"}</p>
              <div style="background-color: #0f0f18; padding: 15px; border-left: 4px solid #ec4899; margin-top: 20px;">
                <p style="margin: 0; color: #e2e8f0;"><strong>Campaign Vision / Details:</strong></p>
                <p style="color: #cbd5e1; white-space: pre-wrap;">${message || "No message provided"}</p>
              </div>
              <p style="font-size: 12px; color: #64748b; margin-top: 30px;">Sent from SPRY Production 2026 AI Studio Platform</p>
            </div>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json();
        console.warn("⚠️ Resend API Warning:", errorData);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thank you ${name}! Your campaign inquiry has been routed to ${recipientEmail}.`,
        bookingDetails: {
          name,
          email,
          targetRecipient: recipientEmail,
          referenceId: `SPRY-${Math.floor(100000 + Math.random() * 900000)}`,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ [SPRY API ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error processing campaign inquiry." },
      { status: 500 }
    );
  }
}
