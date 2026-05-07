import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative text-white">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">
            Weather App 🌦️
          </h1>

          <Link
            href="/login"
            className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Login
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-20">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Real-Time Weather <br /> Dashboard
          </h1>

          <p className="max-w-2xl text-lg md:text-2xl text-gray-100 mb-8">
            Stay updated with live weather conditions of your favorite cities.
            Add multiple cities, mark favorites, and manage your personalized
            weather dashboard with ease.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/signup"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="border border-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-20">

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold mb-3">
              🌍 Multiple Cities
            </h2>

            <p className="text-gray-100">
              Add and manage weather information for multiple cities in one place.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold mb-3">
              ⭐ Favorites
            </h2>

            <p className="text-gray-100">
              Mark your favorite cities and access them quickly anytime.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold mb-3">
              ☁️ Real-Time Weather
            </h2>

            <p className="text-gray-100">
              Get accurate live weather updates using weather API integration.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
