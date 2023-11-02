import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu'
import Assets from '@/config/assets'
import { TYPHOGRAPHY } from '@/styles/sizes'
import Dibs from './Dibs'

type DescriptionSectionProps = {}

const DescriptionSection = ({}: DescriptionSectionProps) => {
  return (
    <article className="flex flex-col w-full pt-4 pb-8  border-b-[1px] gap-4">
      <div className="flex flex-row items-center">
        <Badge variant={'gradation'} size={'sm'} className="mr-2">
          거래가능
        </Badge>
        <h3 className={`${TYPHOGRAPHY.title}`}>스위치 교환가능합니다</h3>
        <MoreButton />
      </div>
      <div className="flex flex-row items-center">
        <p
          className={`${TYPHOGRAPHY.description} mr-2 text-text-secondary-color`}
        >
          <u>전자기기</u>
        </p>
        <p className={`${TYPHOGRAPHY.description} text-text-secondary-color`}>
          25분 전
        </p>
        <Dibs />
      </div>
      <p className="">
        닌텐도 스위치 팝니다. 구매 후에 쭉 투명케이스 쓰고 사용해서 상태 정말
        좋아요~ 박스는 이사가면서 버려서 없지만 구성품은 다 있고 스위치 프로콘
        같이 드립니다.
      </p>
    </article>
  )
}

export default DescriptionSection

const MoreButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="ml-auto" size="icon_sm" variant={null}>
          <Image src={Assets.vMoreIcon} alt="more" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>수정하기</DropdownMenuItem>
          <DropdownMenuItem>삭제하기</DropdownMenuItem>
          <DropdownMenuItem>거래완료</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
