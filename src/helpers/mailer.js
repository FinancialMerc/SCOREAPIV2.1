const nodemailer = require ('nodemailer');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASS, 
    },
  });
// Función para enviar correos electrónicos
async function sendMail(to, subject, htmlContent) {
    try {
      const mailOptions = {
        from: process.env.MAIL_FROM || '"No Reply" <noreply@scorecapital.com>', // Remitente
        to, // Dirección de destino
        subject, // Asunto
        html: htmlContent,
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo enviado:', info.messageId);
      return info;
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      throw new Error('No se pudo enviar el correo');
    }
  }
  
  // Función para enviar el NIP
  async function sendNipEmail(email, code) {
    const subject = 'Tu Código de Autorización (NIP)';
    const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 8px; color: #333;">
      <p style="font-size: 18px; color: #343a40;">Hola,</p>
      <p style="font-size: 16px; color: #343a40;">Tu código de autorización (NIP) es:</p>
      <h2 style="text-align: center; color: #007BFF; font-size: 30px; font-weight: bold; margin: 20px 0;">${code}</h2>
      <p style="font-size: 16px; color: #495057;">Por favor, utiliza este código para completar tu solicitud. El código expira en 10 minutos.</p>
      <p style="font-size: 16px; color: #495057;">Si no solicitaste este código, ignora este mensaje.</p>
      <p style="font-size: 16px; font-weight: bold; color: #6c757d;">Saludos,</p>
      <div style="margin-top: 30px; background-color: #007BFF; padding: 10px; border-radius: 5px; text-align: center;">
        <p style="color: white; font-size: 16px; margin: 0;">Si tienes preguntas, no dudes en ponerte en contacto con nosotros.</p>
      </div>
    </div>
  `;
  
  
    return sendMail(email, subject, htmlContent);
  }
  
  module.exports = {
    sendMail,
    sendNipEmail,
  };

