import type { APIRoute } from 'astro'
import { resJson } from '@utils/api'

export const GET: APIRoute<any, { id: string }> = async ({ params, request }) => {
  const { id } = params
  return resJson({
    data: {
      message: `This was a GET user by ID ${id}`,
    },
  })
}

export const POST: APIRoute<any, { id: string }> = async ({ params, request }) => {
  const { id } = params
  return resJson({
    data: {
      message: `This was a POST update a user by ${id}`,
    },
  })
}

export const PUT: APIRoute<any, { id: string }> = async ({ params, request }) => {
  const { id } = params
  return resJson({
    data: {
      message: `This was a PUT update a user by ${id}`,
    },
  })
}

export const DELETE: APIRoute<any, { id: string }> = async ({ params, request }) => {
  const { id } = params
  return resJson({
    data: {
      message: `This was a DELETE delete a user by ${id}`,
    },
  })
}
