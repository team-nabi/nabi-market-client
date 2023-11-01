import Image from 'next/image'
import Assets from '@/config/assets'
import LoginButtons from './section/LoginButtons'

const LoginForm = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-4">
      <Image className="mb-20" src={Assets.logo} alt="nabi-logo" />
      <LoginButtons />
    </section>
  )
}

export default LoginForm
