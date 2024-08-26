export const resJson = (
  {
    data,
    message = 'success',
    code = 0,
  }: {
    data: any
    message?: string
    code?: number
  },
  init?: ResponseInit,
) => {
  return new Response(
    JSON.stringify({
      message,
      data,
      code,
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
