'use client'

import { FunctionComponent } from 'react'
import { useRouter } from 'next/navigation'
import LoginForm from '@/components/domain/LoginForm'
import { Dialog, DialogContent } from '@/components/ui/Dialog'

interface LoginModalPageProps {}

const LoginModalPage: FunctionComponent<LoginModalPageProps> = () => {
  const router = useRouter()
  return (
    <Dialog
      open={true}
      onOpenChange={(open) => {
        if (!open) {
          router.back()
        }
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <section className="py-4 my-20">
          <LoginForm />
        </section>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModalPage
