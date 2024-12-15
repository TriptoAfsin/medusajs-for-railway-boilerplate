import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center small:p-32">
        <span>
          <Heading
            level="h1"
            className="text-3xl font-normal leading-10 text-ui-fg-base"
          >
            Evercare
          </Heading>
          <Heading
            level="h3"
            className="text-lg font-normal leading-10 text-ui-fg-subtle"
          >
            Evercare Health is a Saudi company founded by a Saudi consultant physician who graduated from Harvard Medical School. Evercare's services do not only provide treatment, but also prevent diseases, predict their occurrence, and delay the symptoms of aging as much as possible to achieve life sustainability.
          </Heading>
        </span>
    
      </div>
    </div>
  )
}

export default Hero
