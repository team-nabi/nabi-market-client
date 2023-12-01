import { format } from 'date-fns'
import Link from 'next/link'
import { Card, CardFlex, CardImage, CardText } from '@/components/ui/card'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { PRICE_RANGE_OBJS } from '@/constants/card'
import { GetChatRoomListData } from '@/services/chat-room/chatRoom'
import { getValueByKey } from '@/utils/getValueByKey'

type ChatRoomCardProps = {
  chatRoom: GetChatRoomListData
}

const ChatRoomCard = ({
  chatRoom: { chatRoomId, createdAt, fromCardInfo, toCardInfo },
}: ChatRoomCardProps) => {
  return (
    <Link href={AppPath.chatRoom(String(chatRoomId))}>
      <Card type={'line'} size={'xs'} className="p-2">
        <CardFlex justify={'between'} gap={'space'} className="h-full">
          <CardFlex align={'center'} gap={'space'} className="w-full">
            <CardFlex>
              <div className="relative flex-shrink-0 h-11 w-11">
                <CardImage
                  alt={'내 물건 이미지'}
                  src={fromCardInfo.cardInfo.thumbnail}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              <div className="relative flex-shrink-0 h-11 w-11 right-4 ">
                <CardImage
                  alt={'상대 물건 아이디'}
                  src={toCardInfo.cardInfo.thumbnail}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
            </CardFlex>
            <CardFlex align={'center'} gap={'space'} className="w-full">
              <CardFlex direction={'col'} className="min-w-[50px]">
                <CardText
                  type={'description'}
                  className="font-bold break-keep line-clamp-2"
                >
                  {fromCardInfo.cardInfo.itemName}
                </CardText>

                <CardText type={'icon'} className="break-keep">
                  {getValueByKey(
                    PRICE_RANGE_OBJS,
                    fromCardInfo.cardInfo.priceRange,
                  )}
                </CardText>
              </CardFlex>
              <div className="relative flex-shrink-0 w-5 h-5">
                <CardImage
                  alt={'교환 아이콘'}
                  src={Assets.switchHorizontal}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardFlex direction={'col'}>
                <CardText
                  type={'description'}
                  className="font-bold break-words line-clamp-2"
                >
                  {toCardInfo.cardInfo.itemName}
                </CardText>
                <CardText type={'icon'} className="break-keep">
                  {getValueByKey(
                    PRICE_RANGE_OBJS,
                    toCardInfo.cardInfo.priceRange,
                  )}
                </CardText>
              </CardFlex>
            </CardFlex>
          </CardFlex>

          <CardFlex align={'end'}>
            <CardText type={'icon'} className="text-background-secondary-color">
              {format(new Date(createdAt), 'yyyy.MM.dd')}
            </CardText>
          </CardFlex>
        </CardFlex>
      </Card>
    </Link>
  )
}

export default ChatRoomCard
