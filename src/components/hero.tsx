import Image from 'next/image'

import dna from '@/assets/dna.gif'
import sphere from '@/assets/sphere.svg'

export const Hero = () => {
  return (
    <section id="hero" className="container flex flex-col items-center pt-20">
      <div className="opacity-1 absolute inset-0 -z-10 hidden items-center justify-center pb-[10rem] pl-[50rem] md:flex">
        <Image
          className="absolute -z-10 w-[20rem] object-cover opacity-40 "
          src={sphere}
          alt="background sphere"
        />

        <Image
          className="absolute -z-20 ml-4 w-[14rem] object-cover"
          src={dna}
          alt="dna gif"
        />

        <div className="absolute -z-20 h-[22rem] w-[22rem] animate-pulse rounded-full bg-gradient-to-br from-lime-400/40 to-lime-600 blur-3xl" />
      </div>

      <div className="w-full max-w-5xl">
        <h1 className="max-w-3xl text-7xl font-black">Projeto BioNFix Prime</h1>
        <p className="mt-4 text-xl font-medium text-lime-500">
          Bactéria para fixação mais eficiênte de nitrogênio no solo
        </p>
        <small className="mt-4">Mini IGEM - UTPrimers</small>
      </div>

      <div className="mt-32 flex justify-center gap-8">
        <div className="relative flex h-fit w-full max-w-4xl flex-col items-center justify-center gap-4 rounded-md border border-gray-700 p-4 shadow-lg shadow-gray-900">
          <h2 className="text-3xl font-bold">Do que se trata o projeto?</h2>

          <p className="flex gap-4 text-lg">
            Este projeto propõe uma maneira inovadora de melhorar a produção de
            alimentos. O solo onde as plantas crescem pode ter diferentes níveis
            de acidez, o que pode dificultar a absorção de nutrientes essenciais
            pelas plantas. Para resolver isso, nós desenvolvemos a seguinte
            solução: modificar geneticamente uma bactéria chamada Acetobacter
            Diazotrophicus. Essas modificações fazer com que essa bactéria ajude
            as plantas a obterem mais nutrientes, mesmo em solos com diferentes
            acidezes. Isso ajudaria os agricultores a cultivar mais alimentos de
            forma mais eficiente, o que é importante para alimentar mais pessoas
            e cuidar do meio ambiente ao mesmo tempo.
          </p>
        </div>
      </div>
    </section>
  )
}
