import { FunctionComponent } from 'react'
import LoginForm from '@/components/domain/login-form'

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = ({}) => {
  return (
    <div className="h-screen">
      <section className="flex items-center justify-center h-full ">
        <LoginForm />
      </section>
    </div>
  )
}

export default LoginPage
