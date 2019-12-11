import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: React.ReactNode
}

const Portal = ({ children }: Props) => {
  const [el, setEl] = useState<null | HTMLDivElement>(null)

  useEffect(() => {
    const e = document.createElement('div')
    document.body.appendChild(e)
    setEl(e)

    return () => document.body.removeChild(e) as any
  }, [])

  if (!el) {
    return null
  }

  return createPortal(children, el)
}

export default Portal
