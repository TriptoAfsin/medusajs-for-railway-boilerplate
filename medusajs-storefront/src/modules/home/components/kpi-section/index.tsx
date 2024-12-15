import { Calendar, FlaskConical, Smile, Stethoscope } from "lucide-react"

const KpiSection = () => {
  const stats = [
    {
      icon: <Smile className="w-8 h-8 text-blue-500" />,
      value: "2100+",
      label: "Satisfied Customers",
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      value: "90%",
      label: "Same Day Bookings",
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-blue-500" />,
      value: "1500+",
      label: "Precise Lab Tests Done",
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
      value: "12+",
      label: "Specialized Doctors",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KpiSection
