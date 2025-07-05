import { Resend } from 'resend';

const resend = new Resend("re_YbbErqvo_FUZXE5zqixYS7wq45G361GEL");

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const data = await resend.emails.send({
      from: 'contacto@josbert.dev',
      to,
      subject,
      html,
    });

    return data;
  } catch (error) {
    console.error('Error enviando correo:', error);
    throw error;
  }
}