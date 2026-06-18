const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">

          AI & Robotics Workshop

        </h1>

        <div className="hidden md:flex gap-8 text-gray-700">

          <a href="#details">Details</a>

          <a href="#timeline">Timeline</a>

          <a href="#faq">FAQ</a>

          <a href="#register">Register</a>

        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">

          Enroll Now

        </button>

      </div>

    </nav>
  )
}

export default Navbar