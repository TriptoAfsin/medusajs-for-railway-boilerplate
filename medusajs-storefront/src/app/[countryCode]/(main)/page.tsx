import { Metadata } from "next"

import { listCollections } from "@lib/data/collections"
import { listProductsWithSort } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import BlogsSection from "@modules/home/components/blogs-section"
import BookASession from "@modules/home/components/book-a-session"
import CustomerReviews from "@modules/home/components/customer-reviews"
import FaqSection from "@modules/home/components/faq-section"
import FeaturedCategories from "@modules/home/components/featured-categories"
import Hero from "@modules/home/components/hero"
import KpiSection from "@modules/home/components/kpi-section"
import PopularProducts from "@modules/home/components/popular-products"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Evercare",
  description:
    "Evercare Health is a Saudi company founded by a Saudi consultant physician who graduated from Harvard Medical School. Evercare's services do not only provide treatment, but also prevent diseases, predict their occurrence, and delay the symptoms of aging as much as possible to achieve life sustainability..",
}

const FOOTER_BANNER_IMAGE = "/images/footer.webp"

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const { collections } = await listCollections({
    fields: "*products",
  })
  const region = await getRegion(countryCode)

  const {
    response: { products },
  } = await listProductsWithSort({
    countryCode,
    page: 1,
    sortBy: "created_at",
    queryParams: {
      limit: 4,
    },
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12" id="popular-products">
        <ul className="flex flex-col gap-x-6">
          <PopularProducts products={products} />
        </ul>
      </div>
      <div id="featured-categories">
        <FeaturedCategories categories={[]} />
      </div>
      <div id="book-a-session">
        <BookASession />
      </div>
      <div id="kpi-section">
        <KpiSection />
      </div>
      <div id="faq-section">
        <FaqSection />
      </div>
      <div id="customer-reviews">
        <CustomerReviews />
      </div>
      <div id="blogs-section">
        <BlogsSection />
      </div>
      <div className="flex justify-center w-full mx-auto max-w-7xl">
        <Image
          src={FOOTER_BANNER_IMAGE}
          alt="banner"
          width={1920}
          height={1080}
          className="h-auto w-3xl"
        />
      </div>
    </>
  )
}
