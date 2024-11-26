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
      <p>Hola,</p>
      <p>Tu código de autorización (NIP) es:</p>
      <h2 style="text-align: center; color: #007BFF;">${code}</h2>
      <p>Por favor, utiliza este código para completar tu solicitud. El código expira en 10 minutos.</p>
      <p>Si no solicitaste este código, ignora este mensaje.</p>
      <p>Saludos,</p>
      <p>El equipo de [Tu Empresa]</p>
    `;
  
    return sendMail(email, subject, htmlContent);
  }
  
  module.exports = {
    sendMail,
    sendNipEmail,
  };

