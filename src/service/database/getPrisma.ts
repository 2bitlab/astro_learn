import { PrismaClient } from '@prisma/client'

const globalForPrisma = {} as unknown as {
  prisma: PrismaClient | undefined
}

export const getPrisma = () => {
  const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
      log: import.meta.env.DEV ? ['query', 'error', 'warn'] : ['error'],
    })
  if (import.meta.env.PROD) globalForPrisma.prisma = prisma

  return prisma
}
