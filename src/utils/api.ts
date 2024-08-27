import { parse } from 'qs'

export const resJson = (
  props?: {
    data?: any
    message?: string
    code?: number
  },
  init?: ResponseInit,
) => {
  return new Response(
    JSON.stringify({
      message: 'success',
      code: 0,
      ...(props || {}),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      ...(init || {}),
    },
  )
}

export const resMissProps = (message: string) => {
  return resJson(
    {
      message,
    },
    {
      status: 400,
    },
  )
}

export const resError = (message: string) => {
  return resJson(
    {
      message,
    },
    {
      status: 500,
    },
  )
}

export const getQuery = <T>(request: Request): T => {
  const [, query] = request.url.split('?')
  return parse(query || '') as T
}

export const getBody = async <T>(request: Request): Promise<T> => {
  return (await request.json()) as T
}
