import Badge from '@/components/ui/Badge'
import { TYPOGRAPHY } from '@/styles/sizes'
import { ItemDetail } from '@/types'
import { cn } from '@/utils'
import Dibs from './Dibs'
import MoreButton from './MoreButton'

type DescriptionSectionProps = {
  itemData: ItemDetail
}

type TradeStateMap = {
  [key: string]: {
    style: 'primary' | 'secondary' | 'gradation' | 'information'
    text: '거래가능' | '예약중' | '거래성사'
  }
}

const DescriptionSection = ({
  itemData: {
    status,
    cardTitle,
    category,
    createdAt,
    dibsCount,
    isMyDib,
    content,
    cardId,
    userId: authorId,
  },
}: DescriptionSectionProps) => {
  // FIX : 로그인 관련 완성되면 실제 데이터로 수정
  // const { isLoggedIn } = useAuth()
  // const {currentUser} = useAuth();

  const currentUser = {
    imageUrl: 'http://asdf~',
    nickname: '병원에 간 미어캣',
    userId: 3,
  }
  const isLoggedIn = true
  const isMyItem = currentUser.userId === authorId

  const tradeStateMap: TradeStateMap = {
    TRADE_AVAILABLE: {
      style: 'primary',
      text: '거래가능',
    },
    RESERVED: {
      style: 'secondary',
      text: '예약중',
    },
    TRADE_COMPLETE: {
      style: 'gradation',
      text: '거래성사',
    },
  }
  return (
    <article className="flex flex-col w-full pt-4 pb-8  border-b-[1px] gap-4">
      <div className="flex flex-row items-center">
        <Badge variant={tradeStateMap[status].style}>
          {tradeStateMap[status].text}
        </Badge>
        <h3 className={cn('ml-2', TYPOGRAPHY.title)}>{cardTitle}</h3>
        {isLoggedIn && isMyItem && <MoreButton itemId={cardId} />}
      </div>
      <div className="flex flex-row items-center">
        <p
          className={cn(
            'mr-2 text-text-secondary-color',
            TYPOGRAPHY.description,
          )}
        >
          <u>{category}</u>
        </p>
        <p className={cn('text-text-secondary-color', TYPOGRAPHY.description)}>
          {createdAt}
        </p>
        {isLoggedIn && (
          <Dibs itemId={cardId} dibsCount={dibsCount} isMyDib={isMyDib} />
        )}
      </div>
      <p>{content}</p>
    </article>
  )
}

export default DescriptionSection
