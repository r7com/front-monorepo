import { ReactNode } from 'react'

export type SignatureContentProps = {
  children: ReactNode
}

export function SignatureContent({ children }: SignatureContentProps) {
  return <div>{children}</div>
}
