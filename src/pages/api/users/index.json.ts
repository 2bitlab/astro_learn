import type { APIRoute } from 'astro'
import { resJson } from '@utils/api'

export const GET: APIRoute = async ({ request }) => {
  return resJson({
    data: {
      message: 'This was GET list of users',
    },
  })
}

export const POST: APIRoute = async ({ request }) => {
  return resJson({
    data: {
      message: 'This was POST create a user',
    },
  })
}
