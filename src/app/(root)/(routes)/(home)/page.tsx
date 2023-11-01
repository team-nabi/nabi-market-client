import Link from 'next/link'
import Button from '@/components/ui/Button'
import { DarkModeButton } from '@/components/ui/DarkModeButton'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/Dialog'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 text-4xl font-bold text-text-color bg-background-color">
      hi
      <DarkModeButton />
      <Link href={'/login'}>로긴</Link>
      <Button variant={'gradation'}>버튼</Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="primary">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button type="submit" className="px-3">
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
