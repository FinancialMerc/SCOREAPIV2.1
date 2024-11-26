
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const NipCode = prisma.nipCode;

module.exports = { NipCode };
