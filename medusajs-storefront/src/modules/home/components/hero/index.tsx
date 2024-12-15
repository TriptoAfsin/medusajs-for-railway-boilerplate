import { HeroCarousel } from "src/components/molecules/carousel/hero-carousel"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="container mx-auto max-lg:px-4">
        <div className="flex items-center justify-center h-full max-w-[1024px] mx-auto">
          <HeroCarousel />
        </div>
      </div>
    </div>
  )
}

export default Hero
