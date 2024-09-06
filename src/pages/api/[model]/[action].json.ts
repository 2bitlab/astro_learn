import { z } from 'astro:content'

import type { APIRoute } from 'astro'
import { resJson, getBody, resError } from '@/utils/api'
import { getPrisma } from '@/service/database'

const ActionBodySchema = z.object({
  where: z.unknown().optional(),
  data: z.unknown().optional(),
  select: z.unknown().optional(),
  orderBy: z.unknown().optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  by: z.array(z.string()).optional(),
  _count: z.unknown().optional(),
})
type ActionBody = z.infer<typeof ActionBodySchema>

export const POST: APIRoute<any, { model: string; action: string }> = async ({
  params,
  request,
}) => {
  const { model, action } = params
  const body = await getBody<ActionBody>(request)

  ActionBodySchema.parse(body)

  const prisma = await getPrisma()

  const prismaModel = (prisma as any)[model]
  if (!prismaModel) {
    return resError('Model not found')
  }
  const fun = prismaModel[action]
  if (!fun) {
    return resError('Action not found')
  }
  try {
    const data = await fun(body)

    return resJson({
      data,
    })
  } catch (error: any) {
    return resError(error?.message)
  }
}
