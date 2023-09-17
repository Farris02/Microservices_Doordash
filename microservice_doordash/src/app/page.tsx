import Image from 'next/image'
import Slider from '@/components/slider'
import Featured from '@/components/featured'

export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
    </main>
  )
}
