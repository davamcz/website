import cookie from 'cookie'

export const saveToken = (token: string, sessionOnly?: boolean) =>
  (document.cookie = cookie.serialize('token', token, {
    sameSite: true,
    path: '/',
    maxAge: sessionOnly ? undefined : 30 * 24 * 60 * 60, // 30 days
  }))

export const logout = () => {
  document.cookie = cookie.serialize('token', '', {
    maxAge: -1, // Expire the cookie immediately
  })

  window.location.pathname = '/'
}
