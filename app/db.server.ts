import 'dotenv/config'

import { PrismaClient } from '@prisma/client'

import { singleton } from './utils/server/utility.server'

const prisma = singleton('prisma', () => new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
}))
prisma.$connect()

export { prisma }
