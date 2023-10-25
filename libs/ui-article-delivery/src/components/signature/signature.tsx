import { ReactNode } from 'react'
import { SignatureAgency } from './signature-agency/signature-agency'
import { SignatureContent } from './signature-content/signature-content'
import { SignatureInfo } from './signature-info/signature-info'
import { SignatureDate } from './signature-date/signature-date'

export type SignatureProps = {
  children: ReactNode
}

export function Signature({ children }: SignatureProps): JSX.Element {
  return <div className="flex items-center">{children}</div>
}

Signature.Agency = SignatureAgency
Signature.Content = SignatureContent
Signature.Info = SignatureInfo
Signature.Date = SignatureDate
