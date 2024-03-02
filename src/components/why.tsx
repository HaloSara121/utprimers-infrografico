import Image from 'next/image'

import biologiaBg from '@/assets/biologia-sintetica.jpg'

export const Why = () => {
  return (
    <section id="why" className="itens-center flex w-full justify-center pt-20">
      <div className="container flex w-full items-center justify-center gap-12">
        <div className="flex max-w-5xl flex-col gap-4">
          <h1 className="text-center text-3xl font-bold">
            Por que esse projeto é importante?
          </h1>

          <p className="text-xl">
            A agricultura moderna enfrenta desafios significativos, como a
            necessidade de aumentar a produção de alimentos para atender à
            crescente demanda da população mundial, enquanto busca reduzir os
            impactos negativos sobre o meio ambiente. Nesse contexto, os
            bioinsumos emergem como uma alternativa promissora aos fertilizantes
            e pesticidas convencionais.
          </p>

          <div className="mt-8 flex justify-center gap-4 text-lg">
            <div className="w-full">
              <strong className="text-lg">Benefícios dos Bioinsumos</strong>

              <div className="mt-4 flex flex-col gap-6">
                <p>- Aumento da produtividade agrícola.</p>
                <p>- Redução do impacto ambiental.</p>
                <p>- Contribuição para a sustentabilidade.</p>
              </div>
            </div>

            <div className="w-full">
              <strong className="text-lg">Economia e Estimativas</strong>

              <div className="mt-4 flex flex-col gap-2">
                <p>
                  - Estimativas da Embrapa(Empresa Brasileira de Pesquisa
                  Agropecuária) sugerem que os bioinsumos geram uma economia
                  anual de cerca de 15 bilhões de dólares.
                </p>
                <p>
                  - O potencial econômico dos bioinsumos está em ascensão,
                  impulsionando a agricultura moderna de maneira sustentável.
                </p>
              </div>
            </div>
          </div>

          <div className="my-8 flex w-full items-center justify-center gap-8">
            <Image
              src={biologiaBg}
              className="rounded-md"
              alt=""
              width={400}
              height={400}
            />

            <p className="text-xl">
              Os bioinsumos representam uma solução promissora para os desafios
              da agricultura moderna, oferecendo benefícios tanto para a
              produtividade agrícola quanto para a sustentabilidade ambiental.
              Com seu potencial econômico em ascensão, eles estão se tornando
              uma escolha cada vez mais atrativa para agricultores em todo o
              mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
