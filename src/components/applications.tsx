'use client'

import Image from 'next/image'

import gotejamento from '@/assets/gotejamento.jpg'
import irrigação from '@/assets/irrigação.jpg'
import sementes from '@/assets/sementes.jpg'
import terra from '@/assets/terra.webp'

export const Applications = () => {
  return (
    <section id="why" className="itens-center flex w-full justify-center py-20">
      <div className="container flex w-full flex-col items-center justify-center gap-12">
        <h1 className="text-3xl font-bold">
          Possiveis formas de aplicação do bioinsumos
        </h1>

        <div className="flex max-w-5xl flex-col gap-8">
          <div className="flex w-full items-center gap-8">
            <Image
              className="rounded-lg object-cover"
              src={terra}
              width={400}
              alt=""
            />

            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Aplicação no solo</h3>
              <p className="text-lg">
                O bioinsumo pode ser aplicado diretamente no solo, seja na forma
                líquida, suspensão ou granulado. Isso pode ser feito antes do
                plantio, durante o plantio ou após o plantio, dependendo das
                necessidades das culturas e das práticas agrícolas.
              </p>
            </div>
          </div>

          <div className="flex w-full items-center gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">
                Irrigação por gotejamento
              </h3>
              <p className="text-lg">
                Para culturas irrigadas, o bioinsumo pode ser aplicado através
                do sistema de irrigação por gotejamento. Isso permite uma
                distribuição uniforme do bioinsumo diretamente nas raízes das
                plantas, maximizando sua eficácia.
              </p>
            </div>

            <Image
              className="rounded-lg object-cover"
              src={gotejamento}
              width={400}
              alt=""
            />
          </div>

          <div className="flex w-full items-center gap-8">
            <Image
              className="rounded-lg object-cover"
              src={irrigação}
              width={400}
              alt=""
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Fertirrigação</h3>
              <p className="text-lg">
                Outra opção é a fertirrigação, que combina a irrigação com a
                aplicação de fertilizantes. Nesse método, o bioinsumo é
                misturado com a água de irrigação e aplicado diretamente no
                solo, garantindo uma distribuição eficiente dos nutrientes.
              </p>
            </div>
          </div>

          <div className="flex w-full items-center gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Tratamento de sementes</h3>
              <p className="text-lg">
                Outra abordagem é o tratamento de sementes com o bioinsumo antes
                do plantio. Isso permite que as plantas absorvam os nutrientes
                desde o início do seu desenvolvimento, promovendo um crescimento
                saudável desde o início.
              </p>
            </div>

            <Image
              className="rounded-lg object-cover"
              src={sementes}
              width={400}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
