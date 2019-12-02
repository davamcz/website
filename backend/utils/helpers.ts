import { verify } from 'jsonwebtoken'
import { Context } from '../context'

interface Token {
  userId: string
  userRole: 'ADMIN' | 'USER'
}

export function getToken(context: Context) {
  const authorization = context.request.headers.authorization
  if (authorization) {  
    const token = authorization.replace('Bearer ', '')
    return verify(token, process.env.SECRET_KEY) as Token
  }
  return undefined
}

export function getUserId(context: Context) {
  const token = getToken(context)
  if (token) {
    return token && token.userId
  }
  return undefined
}

export function isAdmin(context: Context) {
  const token = getToken(context)
  if (token) {
    return token && token.userRole === 'ADMIN'
  }
  return undefined
}

export function capitalize(s: string): string {
  return s && s[0].toUpperCase() + s.slice(1);
}
