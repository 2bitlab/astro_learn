import { createClient } from 'redis'

let redis: ReturnType<typeof createClient>

export const getRedis = async () => {
  if (!redis) {
    redis = await createClient({
      url: import.meta.env.REDIS_URL,
    })
      .on('error', (err) => console.log('Redis Client Error', err))
      .connect()
  }

  return redis
}
