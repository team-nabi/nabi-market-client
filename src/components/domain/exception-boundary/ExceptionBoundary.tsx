import Loading from '@/app/loading'

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
    return <Loading />
  }

  if (isError) {
    return <div>에러 발생!</div>
  }

  if (isEmpty) {
    return <div>데이터 없음!</div>
  }

  return (
    <>
      {children}
      {isFetchingNextPage && <div>다음 페이지 불러오는중...</div>}
    </>
  )
}

export default ExceptionBoundary
