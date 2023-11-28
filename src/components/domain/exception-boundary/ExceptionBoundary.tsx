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
    return <Loading />
  }

  if (isError) {
    return <div>에러 발생!</div>
  }

  if (isEmpty) {
    return (
      <NoData
        title="해당 물건이 존재 하지 않습니다."
        onClickButton={() => router.push('/cards/new')}
        buttonContent="물건 등록하러 가기"
      />
    )
  }

  return (
    <>
      {children}
      {isFetchingNextPage && <div>다음 페이지 불러오는중...</div>}
    </>
  )
}

export default ExceptionBoundary
