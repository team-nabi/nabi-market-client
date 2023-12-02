import { ReactNode } from 'react'

type EmptyDataWrapperProps = {
  isEmpty: boolean
  fallback: ReactNode
  children: ReactNode | ReactNode[]
}

const EmptyDataWrapper: React.FC<EmptyDataWrapperProps> = ({
  isEmpty,
  fallback,
  children,
}: EmptyDataWrapperProps) => {
  if (isEmpty) {
    return <>{fallback}</>
  }
  return <>{children}</>
}

export default EmptyDataWrapper
