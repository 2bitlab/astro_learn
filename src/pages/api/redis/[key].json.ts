import type { APIRoute } from 'astro'
import { resJson, resMissProps, getBody } from '@utils/api'
import { getRedis } from '@service/database'

export const GET: APIRoute<any, { key: string }> = async ({ params, request }) => {
  const { key } = params

  const redis = await getRedis()
  const value = await redis.get(key)
  return resJson({
    data: {
      key,
      value,
    },
  })
}

export const POST: APIRoute<any, { key: string }> = async ({ params, request }) => {
  const { key } = params
  const { value } = await getBody<{ value: any }>(request)
  if (!value) {
    return resMissProps('Value is required')
  }

  const redis = await getRedis()
  await redis.set(key, value)
  return resJson()
}

export const DELETE: APIRoute<any, { key: string }> = async ({ params, request }) => {
  const { key } = params
  const redis = await getRedis()
  await redis.del(key)
  return resJson()
}
