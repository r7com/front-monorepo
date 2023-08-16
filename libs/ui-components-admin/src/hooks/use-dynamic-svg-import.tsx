import { useEffect, useRef, useState } from 'react'

export function useDynamicSvgImport(iconName: string) {
  console.log('trocar "iconName" por tipagem dinamica quando disponivel')
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGAElement> & { title?: string }>>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setLoading(true)

    async function importSvgIcon() {
      try {
        importedIconRef.current = (await import(`../svg/${iconName}.svg`)).ReactComponent
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    importSvgIcon()
  }, [iconName])

  return { error, loading, SvgIconEl: importedIconRef.current }
}
