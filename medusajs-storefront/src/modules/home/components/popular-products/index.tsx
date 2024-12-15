import { getProductPrice } from "@lib/util/get-product-price"
import Image from "next/image"
import Link from "next/link"
import SectionHeader from "src/components/atoms/typography/section-header"

type Props = {
  products: any[]
}

export default function PopularProducts({ products }: Props) {
  return (
    <div className="py-12">
      <SectionHeader title="Our Most Popular Drips" />
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products?.map((product, index) => (
            <Link
              href={`/products/${product.title
                .toLowerCase()
                .replace(/ /g, "-")}`}
              key={index}
              className="p-4 transition-shadow border border-gray-200 rounded-lg hover:shadow-lg"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="mb-4"
                />
                <h3 className="mb-2 text-lg font-medium text-center text-blue-600">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-red-500">
                    {
                      getProductPrice({ product: product }).cheapestPrice
                        ?.calculated_price
                    }{" "}
                    SAR
                  </span>
                  {getProductPrice({ product: product }).cheapestPrice
                    ?.percentage_diff !== "0" && (
                    <span className="text-gray-400 line-through">
                      {
                        getProductPrice({ product: product }).cheapestPrice
                          ?.original_price
                      }{" "}
                      SAR
                    </span>
                  )}
                </div>
                {getProductPrice({ product: product }).cheapestPrice
                  ?.percentage_diff !== "0" && (
                  <span className="text-red-500">
                    Discount{" "}
                    {
                      getProductPrice({ product: product }).cheapestPrice
                        ?.percentage_diff
                    }
                    %
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
