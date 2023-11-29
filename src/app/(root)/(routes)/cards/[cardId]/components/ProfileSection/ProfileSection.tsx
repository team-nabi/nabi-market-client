import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { TYPOGRAPHY } from '@/styles/sizes'

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
      <div className={`ml-4 ${TYPOGRAPHY.profile}`}>{userName}</div>
    </section>
  )
}

export default ProfileSection
