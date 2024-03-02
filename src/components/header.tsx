import Image from 'next/image'

import logo from '@/assets/logo.png'

export const Header = () => {
  return (
    <header className="flex items-center justify-center bg-transparent px-4 py-6">
      {/* <div className="container flex justify-center py-2"> */}
      <Image
        className="w-60"
        src={logo}
        width={300}
        height={300}
        alt="logo utprimers"
      />
      {/* </div> */}
    </header>
  )
}
