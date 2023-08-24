import { useEffect, useRef, useState } from 'react'
import { SvgIcons } from '../components/svg-icon/svg-icon.types'

export function useDynamicSvgImport(iconName: SvgIcons) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGAElement> & { title?: string }>>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setLoading(true)

    async function importSvgIcon() {
      try {
        importedIconRef.current = (await import(`../svg/${iconName}.svg`)).ReactComponent
      } catch (error) {
        console.error(error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    importSvgIcon()
  }, [iconName])

  return { error, loading, SvgIconEl: importedIconRef.current }
}
