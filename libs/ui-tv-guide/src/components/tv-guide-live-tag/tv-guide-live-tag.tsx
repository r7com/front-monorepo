import { variants, TvGuideLiveTagVariants } from './variants'

type TvGuideLiveTagProps = TvGuideLiveTagVariants

export function TvGuideLiveTag({ position = 'top' }: TvGuideLiveTagProps) {
  return <span className={variants({ position })}>no ar</span>
}
