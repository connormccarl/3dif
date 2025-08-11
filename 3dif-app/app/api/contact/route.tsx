import { NextResponse, NextRequest } from "next/server";
import sendEmail from "@/lib/office365";

export async function POST(request: NextRequest) {
    const to = process.env.EMAIL_TO;

    const data = await request.json();

    try {
        const email_3Dif = {
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
                  address: to, // 3DiF email stored in EMAIL_TO env variable
                },
              },
            ],
            replyTo: [
              {
                emailAddress: {
                  address: data.email, // client email filled out in contact form submission
                  name: data.firstName + " " + data.lastName, // client name filled out in contact form submission
                }
              }
            ],  
            body: {
              content:
                `
                    <p><b>Name:</b> ${data.firstName} ${data.lastName}</br>
                    <b>Work:</b> ${data.title} ${data.company !== '' ? '@' : ''} ${data.company}${data.companyUrl !== '' ? `(${data.companyUrl})` : ''}</p>

                    <p><b>Phone:</b> ${data.phone}</br>
                    <b>Email:</b> ${data.email}</br>
                    <b>Preferred Contact:</b> ${data.preferredContact.join(", ")}</p>

                    <p><b>Interest:</b> ${data.interest.join(", ")}</br>
                    <b>Message:</b><br/>${data.message}</p>
                `,
              contentType: 'html',
            },
          };

        const email_Client = {
          subject: `Thank You for Contacting 3DiF`,
          //This "from" is optional if you want to send from group email. For this you need to give permissions in that group to send emails from it.
          from: {
            emailAddress: {
              address: 'website@3dif.co',
            },
          },
          toRecipients: [
            {
              emailAddress: {
                address: data.email, // client email filled out in contact form submission
              },
            },
          ],
            replyTo: [
              {
                emailAddress: {
                  address: "inform@3dif.co", // 3DiF contact email
                  name: "3DiF Team", // 3DiF team name
                }
              }
            ],  
          body: {
            content:
              `
                  <p><b>Thank You for Contacting Us</b></p>
                  <p>Thank you for reaching out to 3DiF. Your inquiry has been forwarded to the appropriate team, and we will follow up with you shortly. For a quicker response, you may also email us directly at <a href='mailto:inform@3dif.co'>inform@3dif.co</a>.</p>
                  <p>Warm Regards,</br>
                  3DiF Team</p>
              `,
            contentType: 'html',
          },
        };

          await sendEmail(email_3Dif);
          await sendEmail(email_Client);

        return NextResponse.json({ message: "Success. Email was sent!"});
    } catch (error) {
        console.log(error);
        const message = "Error. Could not send message.\n\n" + error;
        return NextResponse.json({ message: message}, { status: 500 });
    }
}