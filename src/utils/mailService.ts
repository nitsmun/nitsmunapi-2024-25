import nodemailer, { Transporter } from "nodemailer";
import htmlContent from "./html";
interface EmailOptions {
    to: string;
    subject: string;
    html?: string;
  }
  
  class EmailService {
    private primaryTransporter: Transporter;

    constructor() {
      this.primaryTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_EMAIL, // Primary Gmail address
          pass: process.env.SMTP_PASSWORD, // App Password for the primary account
        },
      });
  
    }
  
    /**
     * Sends an email with fallback to another Gmail account if the first one fails.
     * @param {EmailOptions} options - Email options
     */
    async sendEmail(options: EmailOptions): Promise<void> {
      try {
        await this.primaryTransporter.sendMail(options);
        console.log("Email sent to", options.to);
      } catch (primaryError) {
        console.error(
          "Failed to send email with Primary Gmail SMTP:",
          primaryError
        );
      }
    }
  }
  
  const emailService = new EmailService();
  
  export const sendCongratulationsEmail = async (
    email: string
  ) => {
    const options: EmailOptions = {
      to: email,
      subject: "Application Successfull!!",
      html: htmlContent,
    };
  
    await emailService.sendEmail(options);
  };
  export default emailService.sendEmail;