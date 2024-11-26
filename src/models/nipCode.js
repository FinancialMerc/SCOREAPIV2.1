const prisma = require('../prismaClient');

const NipCode = {
  create: (data) => prisma.nipCode.create({ data }),
  findFirst: (query) => prisma.nipCode.findFirst(query),
  update: (query) => prisma.nipCode.update(query),
};

module.exports = NipCode;
