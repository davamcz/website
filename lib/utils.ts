export const stripProtocol = (url: string) =>
  url.replace(/(\w+:|^)\/\//, '').replace(/\/$/, '')

type ClassTypes = undefined | string | { [id: string]: boolean | undefined }

export const cn = (...classes: ClassTypes[]) => {
  return classes
    .reduce((acc, val) => {
      if (!val) {
        return acc
      }
      const valType = typeof val
      if (valType === 'string') {
        return [...acc, val]
      } else if (Array.isArray(val) && val.length) {
        return [...acc, ...val]
      } else if (valType === 'object') {
        let tmp: string[] = []
        for (const key in val as any) {
          if (val.hasOwnProperty(key) && val[key]) {
            tmp = [...tmp, key]
          }
        }
        return [...acc, ...tmp]
      }
      return acc
    }, [] as string[])
    .join(' ')
}
