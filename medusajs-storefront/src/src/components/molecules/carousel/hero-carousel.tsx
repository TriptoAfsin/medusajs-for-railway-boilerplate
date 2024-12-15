"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useRef } from "react"

import { Box } from "src/components/atoms/layout"

import { Card, CardContent } from "src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "src/components/ui/carousel"

export function HeroCarousel() {
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }))

  const data = [
    {
      id: 1,
      item: (
        <Image
          src="/images/slideshow/1.webp"
          alt="Hero Carousel"
          width={1000}
          height={1000}
        />
      ),
    },
    {
      id: 2,
      item: (
        <Image
          src="/images/slideshow/2.webp"
          alt="Hero Carousel"
          width={1000}
          height={1000}
        />
      ),
    },
    {
      id: 3,
      item: (
        <Image
          src="/images/slideshow/3.webp"
          alt="Hero Carousel"
          width={1000}
          height={1000}
        />
      ),
    },
    {
      id: 4,
      item: (
        <Image
          src="/images/slideshow/4.webp"
          alt="Hero Carousel"
          width={1000}
          height={1000}
        />
      ),
    },
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full group"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent className="p-0">
        {data.map((item) => (
          <CarouselItem key={item?.id}>
            <Card className="w-full border-none">
              <CardContent className="w-full p-0">{item?.item}</CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {data.length > 1 && (
        <Box className="absolute left-0 right-0 items-center justify-between hidden mb-20 -translate-y-1/2 md:group-hover:block top-1/2">
          <CarouselPrevious className="left-0 ml-4" />
          <CarouselNext className="right-0 ml-auto mr-4" />
        </Box>
      )}
    </Carousel>
  )
}
