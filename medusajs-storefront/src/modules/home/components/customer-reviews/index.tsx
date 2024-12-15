import { Star } from "lucide-react"
import SectionHeader from "src/components/atoms/typography/section-header"

const reviews = [
  {
    text: "The experience is quite pleasant and energizing.",
    rating: 5,
  },
  {
    text: "Walahe, it was comfortable and sweet, may God make bless you Evercare.",
    rating: 5,
  },
  {
    text: "The experience was beautiful.",
    rating: 5,
  },
]

export default function CustomerReviews() {
  return (
    <div className="py-12">
      <SectionHeader title="Customer Reviews" />
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0 2c-4 0-12 2-12 6v2h24v-2c0-4-8-6-12-6z" />
                  </svg>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
