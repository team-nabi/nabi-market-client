import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import MyItemCard from './components/my-item-card'

interface ItemListPageProps {}

const myItems = [
  {
    cardId: '1',
    cardTitle: '아이폰 16 팝니다',
    itemName: '아이폰 16',
    createdAt: '2023-11-01T08:08:00',
    modifiedAt: '2023-11-01T08:08:00',
    priceRange: '10000-50000',
    thumbNail:
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg',
    status: 'EXCHANGEABLE',
  },
  {
    cardId: '2',
    cardTitle: '아이폰 17 팝니다',
    itemName: '아이폰 17',
    createdAt: '2023-11-01T08:08:00',
    modifiedAt: '2023-11-01T08:08:00',
    priceRange: '10000-50000',
    thumbNail:
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg',
    status: 'EXCHANGEABLE',
  },
  {
    cardId: '3',
    cardTitle: '아이폰 18 팝니다',
    itemName: '아이폰 18',
    createdAt: '2023-11-01T08:08:00',
    modifiedAt: '2023-11-01T08:08:00',
    priceRange: '10000-50000',
    thumbNail:
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg',
    status: 'EXCHANGEABLE',
  },
]

const MyItemListPage: FunctionComponent<ItemListPageProps> = ({}) => {
  return (
    <div>
      <PageTitle title="내 물건 페이지" />
      <MyItemCard myItems={myItems[0]} />
    </div>
  )
}

export default MyItemListPage
