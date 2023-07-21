import { useEffect, useRef, useState } from 'react'

export function useDynamicSvgImport(iconName: string) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGAElement>>>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setLoading(true)

    const importSvgIcon = async (): Promise<void> => {
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
