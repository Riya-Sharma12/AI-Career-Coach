// import {PrismaClient} from "@prisma/client"

// export const db = globalThis.prisma || new PrismaClient(); 

// if(process.env.NODE_ENV !== "production"){
//     globalThis.prisma = db;
// }


import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

async function connectWithRetry(attempts = 5, delay = 5000) {
  for (let i = 0; i < attempts; i++) {
    try {
      await db.$connect();
      console.log("🔥 DB Connected Successfully!");
      break; // Exit the loop when connected
    } catch (error) {
      console.error(`⏳ Connection attempt ${i + 1} failed. Retrying...`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
}

connectWithRetry();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
