export type BulletProps = {
  text: string
  variant: 'waiting' | 'closed' | 'paused' | 'published'
}

export function Bullet({ text, variant }: BulletProps) {
  const statusIconVariant = {
    waiting: 'bg-brand-primary-500',
    closed: 'bg-feedback-warning-500',
    paused: 'bg-feedback-helper-500',
    published: 'bg-feedback-success-500',
  }[variant]

  const compiledClasses = [statusIconVariant].join(' ').trim()

  return (
    <div className="flex items-center gap-quark p-xxxs ">
      <span className={`${compiledClasses} w-nano h-nano rounded-circular  `}></span>
      <p className="text-dark-high-500 font-open-sans text-xxxs">{text}</p>
    </div>
  )
}
