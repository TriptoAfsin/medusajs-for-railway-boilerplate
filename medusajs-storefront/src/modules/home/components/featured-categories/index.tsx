import Image from "next/image"
import Link from "next/link"

type Props = {
  categories: any[]
}

export default function PopularProducts({ categories }: Props) {
  return (
    <div className="py-12">
      {/* <SectionHeader title="Our Most Popular Drips" /> */}
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories?.map((category, index) => (
            <Link
              href={`/categories/${category?.title
                ?.toLowerCase()
                ?.replace(/ /g, "-")}`}
              key={index}
            >
              <div className="p-4 transition-shadow border border-gray-200 rounded-lg hover:shadow-lg">
                <Image
                  src={category?.thumbnail}
                  alt={category?.title}
                  width={200}
                  height={200}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
