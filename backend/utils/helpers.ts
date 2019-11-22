import { verify } from 'jsonwebtoken'

interface Token {
  userId: string
  userRole: 'ADMIN' | 'USER'
}

export function getToken(context: any) {
  const authorization = context.request.get('Authorization')
  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    return verify(token, process.env.SECRET_KEY) as Token
  }
  return undefined
}

export function getUserId(context: any) {
  const token = getToken(context)
  if (token) {
    return token && token.userId
  }
  return undefined
}

export function isAdmin(context: any) {
  const token = getToken(context)
  if (token) {
    return token && token.userRole === 'ADMIN'
  }
  return undefined
}
