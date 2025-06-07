export default function Categories() {
  const categories = [
    { name: 'চাকরি', description: 'খুঁজুন এবং আবেদন করুন', id: 'jobs' },
    { name: 'সেবা', description: 'বাসায় বসেই সেবা নিন', id: 'services' },
    { name: 'পণ্য', description: 'সুলভ মূল্যে পণ্য কিনুন', id: 'products' },
  ]

  return (
    <section className="py-10 px-6 bg-gray-100" id="categories">
      <h2 className="text-3xl font-bold text-center mb-6">আমাদের ক্যাটাগরি</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
            <p className="text-gray-600">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
