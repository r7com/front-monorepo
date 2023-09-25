export function InstitutionalCopyright() {
  const currentYear = new Date().getFullYear()
  return (
    <p className="text-light-high-400 text-little text-center lg:text-left mt-xxxs lg:mt-auto">
      Todos os direitos reservados - 2009-{currentYear} - Rádio e Televisão Record S.A
    </p>
  )
}
