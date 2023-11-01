import { FunctionComponent } from 'react'
import Image from 'next/image'
import PageTitle from '@/components/domain/PageTitle'
import Input from '@/components/ui/Input'
import Assets from '@/config/assets'
import SearchInput from './components/SearchInput'

interface ItemListPageProps {}

const list = []

const ItemListPage: FunctionComponent<ItemListPageProps> = ({}) => {
  return (
    <div>
      <PageTitle title="물건 목록" />

      <div className="h-9 flex justify-between items-center">
        <SearchInput placeholder="찾으시는 물품을 입력해주세요." />
        {/* <Input placeholder="찾으시는 물품을 입력해주세요." className="w-4/5" /> */}
        <div className="h-6 flex gap-2">
          <Image src={Assets.filterIcon} alt="필터 아이콘" />{' '}
          <div className="flex">필터</div>
        </div>
      </div>
    </div>
  )
}

export default ItemListPage
