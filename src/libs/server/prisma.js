import {PrismaClient} from "@prisma/client";

global.prisma;

const prisma = global.prisma || new PrismaClient();

global.prisma = prisma;

export {prisma};