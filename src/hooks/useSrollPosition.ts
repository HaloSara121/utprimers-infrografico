'use client'

import { useEffect, useState } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  useEffect(() => {
    setScrollPosition(window.scrollY)

    function handleScroll() {
      setScrollPosition(window.scrollY)
      console.log(window.scrollY)
    }

    // Adiciona um listener de scroll quando o componente é montado
    window.addEventListener('scroll', handleScroll)

    // Remove o listener de scroll quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Apenas executa o efeito uma vez durante o montagem e desmontagem do componente

  return scrollPosition
}
