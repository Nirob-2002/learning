'use client'

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-blue-600 text-white flex justify-between items-center">
      <div className="text-2xl font-bold">SayNeed</div>
      <ul className="hidden md:flex gap-6 text-lg">
        <li><a href="#services">সেবা</a></li>
        <li><a href="#jobs">চাকরি</a></li>
        <li><a href="#products">পণ্য</a></li>
        <li><a href="#contact">যোগাযোগ</a></li>
      </ul>
    </nav>
  )
}
