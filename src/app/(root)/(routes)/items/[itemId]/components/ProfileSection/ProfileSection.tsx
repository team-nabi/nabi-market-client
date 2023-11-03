import { Avatar, AvatarImage } from '@/components/ui/Avatar'
import { TYPHOGRAPHY } from '@/styles/sizes'

type ProfileSectionProps = {
  profileImg: string | null
  userName: string
}

const ProfileSection = ({ profileImg, userName }: ProfileSectionProps) => {
  return (
    <section className="flex w-full py-2 border-b-[1px] items-center">
      <Avatar size="md">
        <AvatarImage imgUrl={profileImg} />
      </Avatar>
      <div className={`ml-9 ${TYPHOGRAPHY.profile}`}>{userName}</div>
    </section>
  )
}

export default ProfileSection
