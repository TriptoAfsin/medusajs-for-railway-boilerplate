type SectionHeaderProps = {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold text-center text-blue-600">
        {title}
      </h2>
      <div className="flex items-center justify-center mb-8">
        <div className="w-16 h-[2px] bg-blue-600"></div>
        <div className="w-3 h-3 mx-2 border-2 border-blue-600 rounded-full"></div>
        <div className="w-16 h-[2px] bg-blue-600"></div>
      </div>
    </>
  )
}
