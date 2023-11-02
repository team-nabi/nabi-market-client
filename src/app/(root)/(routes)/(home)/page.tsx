import { DarkModeButton } from '@/components/ui/DarkModeButton'
import TestBlock from './components/TestBlock'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 text-4xl font-bold text-text-color bg-background-color">
      hi
      <TestBlock />
      <DarkModeButton />
    </main>
  )
}
