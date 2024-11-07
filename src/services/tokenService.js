// src/services/tokenService.js
const axios = require('axios');
const prisma = require('../prismaClient'); 

class TokenService {
  async obtenerTokenConsulta(userId) {
    //console.log("userId recibido en obtenerTokenConsulta:", userId);

    if (!userId) {
        throw new Error("El userId es undefined o null en obtenerTokenConsulta");
    }

    const userCredentials = await prisma.user.findUnique({
      where: { id: userId },
      select: { buroClave: true, buroPassword: true },
    });

    if (!userCredentials || !userCredentials.buroClave || !userCredentials.buroPassword) {
      throw new Error("No se encontraron credenciales para el usuario.");
    }

    const data = new URLSearchParams({
      client_id: "5caad9a0-06dd-4419-b0fe-05a2cf6b9d64",
      client_secret: "af896bc8-55ed-406a-bbff-382c2e33fcf8",
      username: userCredentials.buroClave,
      password: userCredentials.buroPassword,
      scope: "PFscope",
      grant_type: "password"
    });

    try {
      const response = await axios.post(`${process.env.CREDIT_OFFICE_URL}/auth/oauth/v2/token`, data);
      if (response.status === 200) {
        const token = response.data.access_token;
        console.log("Token obtenido:", token);
        return token;
      } else {
        throw new Error("Error en la autenticación");
      }
    } catch (error) {
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }
}

module.exports = new TokenService();
