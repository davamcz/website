export const stripProtocol = (url: string) =>
  url.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '')
