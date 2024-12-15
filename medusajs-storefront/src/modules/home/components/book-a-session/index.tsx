import Image from "next/image"
import SectionHeader from "src/components/atoms/typography/section-header"

export default function BookASession() {
  const steps = [
    {
      number: "1- Choose",
      description:
        "The vitamins that suit your health needs from more than 10 different options",
      image: "/images/booking/1.webp",
    },
    {
      number: "2- Book",
      description: "the time and place that works best for you",
      image: "/images/booking/2.webp",
    },
    {
      number: "3- Meet",
      description:
        "our professional medical team at your chosen location at the scheduled time",
      image: "/images/booking/3.webp",
    },
    {
      number: "4- Sit",
      description:
        "in a comfortable place in your home to start your IV therapy session",
      image: "/images/booking/4.webp",
    },
    {
      number: "5- The team",
      description:
        "will perform a health check to make sure the treatment is compatible with you",
      image: "/images/booking/5.webp",
    },
    {
      number: "6- Enjoy",
      description:
        "the benefits of the IV Drip therapy that keeps you energized throughout the day",
      image: "/images/booking/6.webp",
    },
  ]

  return (
    <div className="py-12">
      <SectionHeader title="How to book a session" />
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-full mb-4 overflow-hidden rounded-lg aspect-square">
                <Image
                  src={step.image}
                  alt={step.number}
                  className="object-cover w-full h-full"
                  width={1000}
                  height={1000}
                />
              </div>
              <h3 className="mb-2 font-medium text-blue-600">{step.number}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
