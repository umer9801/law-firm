const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function sendContactEmail(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  const adminMailOptions = {
    from: `"Prudential Legal Services" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    replyTo: data.email,
    subject: `New Contact Form Submission: ${data.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
          .info-row { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #3b82f6; }
          .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; }
          .value { color: #4b5563; }
          .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="info-row">
              <div class="label">Name</div>
              <div class="value">${data.firstName} ${data.lastName}</div>
            </div>
            <div class="info-row">
              <div class="label">Email</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="info-row">
              <div class="label">Phone</div>
              <div class="value">${data.phone || 'Not provided'}</div>
            </div>
            <div class="info-row">
              <div class="label">Subject</div>
              <div class="value">${data.subject}</div>
            </div>
            <div class="info-row">
              <div class="label">Message</div>
              <div class="value">${data.message}</div>
            </div>
          </div>
          <div class="footer">
            <p>Prudential Legal Services</p>
            <p>120 Traders Blvd East, Unit 202, Mississauga, ON L4Z 2H7</p>
            <p>Phone: (416) 723-7387</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  const clientMailOptions = {
    from: `"Prudential Legal Services" <${process.env.EMAIL_FROM}>`,
    to: data.email,
    replyTo: process.env.EMAIL_TO,
    subject: 'Thank you for contacting Prudential Legal Services',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
          .message-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981; }
          .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
          .button { display: inline-block; padding: 12px 30px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Contacting Us</h1>
          </div>
          <div class="content">
            <p>Dear ${data.firstName} ${data.lastName},</p>
            <p>Thank you for reaching out to Prudential Legal Services. We have received your message and will get back to you within 24 hours.</p>
            
            <div class="message-box">
              <strong>Your Message:</strong>
              <p style="margin-top: 10px;">${data.message}</p>
            </div>

            <p>If you need immediate assistance, please feel free to call us at <strong>(416) 723-7387</strong>.</p>
            
            <p style="margin-top: 30px;">Best regards,<br><strong>Prudential Legal Services</strong></p>
          </div>
          <div class="footer">
            <p><strong>Prudential Legal Services</strong></p>
            <p>120 Traders Blvd East, Unit 202, Mississauga, ON L4Z 2H7</p>
            <p>Phone: (416) 723-7387 | Email: prudentiallegalservices2019@gmail.com</p>
            <p style="margin-top: 15px; font-size: 11px;">Member of the Law Society of Ontario | Licensed Paralegal</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  await Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(clientMailOptions)
  ])
}

export async function sendConsultationEmail(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  description: string
  date: string
  time: string
  additional?: string
}) {
  const adminMailOptions = {
    from: `"Prudential Legal Services" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    replyTo: data.email,
    subject: `New Consultation Request: ${data.service}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
          .info-row { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #3b82f6; }
          .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; }
          .value { color: #4b5563; }
          .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0; }
          .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">New Consultation Request</h1>
          </div>
          <div class="content">
            <div class="info-row">
              <div class="label">Name</div>
              <div class="value">${data.firstName} ${data.lastName}</div>
            </div>
            <div class="info-row">
              <div class="label">Email</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="info-row">
              <div class="label">Phone</div>
              <div class="value">${data.phone}</div>
            </div>
            <div class="info-row">
              <div class="label">Service Type</div>
              <div class="value">${data.service}</div>
            </div>
            <div class="highlight">
              <div class="label">Preferred Appointment</div>
              <div class="value"><strong>Date:</strong> ${data.date} | <strong>Time:</strong> ${data.time}</div>
            </div>
            <div class="info-row">
              <div class="label">Case Description</div>
              <div class="value">${data.description}</div>
            </div>
            ${data.additional ? `
            <div class="info-row">
              <div class="label">Additional Information</div>
              <div class="value">${data.additional}</div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>Prudential Legal Services</p>
            <p>120 Traders Blvd East, Unit 202, Mississauga, ON L4Z 2H7</p>
            <p>Phone: (416) 723-7387</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  const clientMailOptions = {
    from: `"Prudential Legal Services" <${process.env.EMAIL_FROM}>`,
    to: data.email,
    replyTo: process.env.EMAIL_TO,
    subject: 'Consultation Request Received - Prudential Legal Services',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
          .appointment-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981; text-align: center; }
          .service-badge { display: inline-block; background: #3b82f6; color: white; padding: 8px 16px; border-radius: 20px; margin: 10px 0; }
          .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">Consultation Request Received</h1>
          </div>
          <div class="content">
            <p>Dear ${data.firstName} ${data.lastName},</p>
            <p>Thank you for requesting a consultation with Prudential Legal Services.</p>
            
            <div class="service-badge">${data.service}</div>

            <div class="appointment-box">
              <h3 style="margin: 0 0 15px 0; color: #1e3a8a;">Your Preferred Appointment</h3>
              <p style="font-size: 18px; margin: 5px 0;"><strong>Date:</strong> ${data.date}</p>
              <p style="font-size: 18px; margin: 5px 0;"><strong>Time:</strong> ${data.time}</p>
            </div>

            <p>We will contact you within 24 hours to confirm your appointment and discuss your legal matter in detail.</p>
            
            <p>If you have any urgent questions, please don't hesitate to call us at <strong>(416) 723-7387</strong>.</p>
            
            <p style="margin-top: 30px;">Best regards,<br><strong>Prudential Legal Services</strong></p>
          </div>
          <div class="footer">
            <p><strong>Prudential Legal Services</strong></p>
            <p>120 Traders Blvd East, Unit 202, Mississauga, ON L4Z 2H7</p>
            <p>Phone: (416) 723-7387 | Email: prudentiallegalservices2019@gmail.com</p>
            <p style="margin-top: 15px; font-size: 11px;">Member of the Law Society of Ontario | Licensed Paralegal</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  await Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(clientMailOptions)
  ])
}
