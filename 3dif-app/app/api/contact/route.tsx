import { NextResponse, NextRequest } from "next/server";
import sendEmail from "@/lib/office365";

export async function POST(request: NextRequest) {
    const to = process.env.EMAIL_TO;

    const data = await request.json();

    try {
        const options = {
            subject: `Website Contact from ${data.email}`,
            //This "from" is optional if you want to send from group email. For this you need to give permissions in that group to send emails from it.
            from: {
              emailAddress: {
                address: 'website@3dif.co',
              },
            },
            toRecipients: [
              {
                emailAddress: {
                  address: to,
                },
              },
            ],
            body: {
              content:
                `
                    <p><b>Name:</b> ${data.firstName} ${data.lastName}</p>
                    <p><b>Work:</b> ${data.title} ${data.company !== '' ? '@' : ''} ${data.company}${data.companyUrl !== '' ? `(${data.companyUrl})` : ''} </p>
                    <br/>
                    <p><b>Phone:</b> ${data.phone}</p>
                    <p><b>Email:</b> ${data.email}</p>
                    <p><b>Preferred Contact:</b> ${data.preferredContact.join(", ")}</p>

                    <br/>
                    <p><b>Interest:</b> ${data.interest.join(", ")}</p>
                    <p><b>Message:</b><br/>${data.message}</p>
                `,
              contentType: 'html',
            },
          };

          await sendEmail(options);

        return NextResponse.json({ message: "Successs. Email was sent!"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error. Could not send message."}, { status: 500 });
    }
}