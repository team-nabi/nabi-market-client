import router from 'next/router'
import Loading from '@/app/loading'
import NoData from '../no-data'

type ExceptionBoundaryProps = {
  isLoading: boolean
  isError: boolean
  isEmpty: boolean
  isFetchingNextPage?: boolean
  children: JSX.Element
}

const ExceptionBoundary: React.FC<ExceptionBoundaryProps> = ({
  isLoading,
  isFetchingNextPage,
  isError,
  isEmpty,
  children,
}: ExceptionBoundaryProps) => {
  if (isLoading) {
    return <div>데이터 없음</div>
  }

  if (isError) {
    return <div>에러 발생!</div>
  }

  if (isEmpty) {
    return <div>데이터가 존재하지 않습니다.</div>
  }
  return (
    <>
      {children}
      {isFetchingNextPage && <Loading />}
    </>
  )
}

export default ExceptionBoundary
