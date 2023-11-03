import Image from 'next/image'
import TradeStateCard from '@/components/domain/card/trade-state-card'
import Assets from '@/config/assets'
import { Item } from '@/types'
import SearchInput from '../search-input'

const list = [
  {
    _id: 1, // 내려줄 때 리스트 순서
    cardId: 1,
    cardTitle: '아이폰 16 팝니다',
    itemName: '아이폰 16',
    createdAt: '2023-11-01T08:08:00',
    modifiedAt: '2023-11-01T08:08:00',
    dibCount: 19,
    priceRange: '10000-50000',
    image:
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg',
    tradeState: 'impossible',
  },
  {
    _id: 2, // 내려줄 때 리스트 순서
    cardId: 1,
    cardTitle: '아이폰 16 팝니다',
    itemName: '아이폰 16',
    createdAt: '2023-11-01T08:08:00',
    modifiedAt: '2023-11-01T08:08:00',
    dibCount: 19,
    priceRange: '10000-50000',
    image:
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg',
    tradeState: 'impossible',
  },
  {
    _id: 3, // 내려줄 때 리스트 순서
    cardId: 1,
    cardTitle: '아이폰 16 팝니다',
    itemName: '아이폰 16',
    createdAt: '2023-11-01T08:08:00',
    modifiedAt: '2023-11-01T08:08:00',
    dibCount: 19,
    priceRange: '10000-50000',
    image:
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg',
    tradeState: 'impossible',
  },
]

const ItemList = () => {
  return (
    <div>
      <div className="h-9 flex justify-between items-center mb-6">
        <SearchInput placeholder="찾으시는 물품을 입력해주세요." />
        <div className="h-6 flex gap-2">
          <Image src={Assets.filterIcon} alt="필터 아이콘" />{' '}
          <div className="flex">필터</div>
        </div>
      </div>
      <div>
        {list.map((item: Item) => (
          <TradeStateCard key={item._id} item={item} className="mb-6" />
        ))}
      </div>
    </div>
  )
}
export default ItemList
