import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  children,
}: {
  children: ReactNode[] | ReactNode
}) => {
  return <div className="w-4/5 mx-auto">{children}</div>
}

export default MaxWidthWrapper
