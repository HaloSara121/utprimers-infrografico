import Image from 'next/image'

import logo from '@/assets/logo.png'
import isa from '@/assets/team/isa.jpeg'
import jess from '@/assets/team/jess.jpeg'
import joão from '@/assets/team/joão.jpg'
import rafa from '@/assets/team/rafa.jpg'
import vini from '@/assets/team/vini.jpg'

const team = [
  {
    name: 'João',
    image: joão,
  },
  {
    name: 'Rafaela',
    image: rafa,
  },
  {
    name: 'Vinicius',
    image: vini,
  },
  {
    name: 'Jéssica',
    image: jess,
  },
  {
    name: 'Isabelle',
    image: isa,
  },
]

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-gray-900 py-6">
      <div className="container flex w-full items-center justify-between">
        <Image
          className="w-60"
          src={logo}
          width={300}
          height={300}
          alt="logo"
        />

        <div className="flex flex-col items-center gap-2 font-bold">
          <strong className="text-yellow-600">
            Equipe <span>Amarela</span>
          </strong>

          <div className="flex gap-2">
            {team.map((member) => (
              <Image
                key={member.name}
                className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-yellow-600"
                title={member.name}
                src={member.image}
                alt={`${member.name} image`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <strong>Mini-IGEM</strong>
          <small className="font-thin text-gray-50">
            Processo seletivo UTPrimers
          </small>
        </div>
      </div>
    </footer>
  )
}
