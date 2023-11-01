import ProfileSection from './components/ProfileSection'

type ItemPageProps = {
  params: {
    itemId: string
  }
}

const ItemPage = ({ params }: ItemPageProps) => {
  return (
    <main className="flex-col min-h-screen  bg-background-color">
      <div>이미지 슬라이더 영역</div>
      <ProfileSection userName="임시이름" />
      <div>아이템 상세정보 영역</div>
    </main>
  )
}

export default ItemPage
