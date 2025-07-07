"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Moon, Sun, Search, Menu, X, Bell, User, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

// Mock news data with online images
const newsData = [
  {
    id: 1,
    category: "BREAKING",
    title: "Global Climate Summit Reaches Historic Agreement",
    excerpt:
      "World leaders unite on unprecedented climate action plan that could reshape international environmental policy for decades to come.",
    author: "Sarah Johnson",
    date: new Date("2025-01-15"),
    image: "https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    id: 2,
    category: "TECHNOLOGY",
    title: "AI Revolution Transforms Healthcare Industry",
    excerpt: "Breakthrough artificial intelligence systems are revolutionizing patient care and medical diagnosis across major hospitals worldwide.",
    author: "Michael Chen",
    date: new Date("2025-01-14"),
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    category: "BUSINESS",
    title: "Stock Markets Hit Record Highs Amid Economic Recovery",
    excerpt:
      "Major indices surge as investors show renewed confidence in global economic stability and corporate earnings growth.",
    author: "Emma Rodriguez",
    date: new Date("2025-01-13"),
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    category: "SPORTS",
    title: "Championship Finals Draw Record Viewership",
    excerpt: "Historic sporting event captivates global audience with unprecedented television and streaming numbers.",
    author: "David Park",
    date: new Date("2025-01-12"),
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    category: "LIFESTYLE",
    title: "Sustainable Living Trends Reshape Consumer Habits",
    excerpt:
      "Growing environmental consciousness drives significant changes in purchasing decisions and lifestyle choices.",
    author: "Lisa Thompson",
    date: new Date("2025-01-11"),
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    category: "HEALTH",
    title: "Medical Breakthrough Offers Hope for Rare Diseases",
    excerpt: "Revolutionary treatment shows promising results in clinical trials for previously incurable conditions.",
    author: "Dr. Amanda White",
    date: new Date("2025-01-10"),
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
  },
]

const trendingTopics = [
  "Climate Change Summit",
  "AI in Healthcare",
  "Economic Recovery",
  "Championship Finals",
  "Sustainable Living",
  "Medical Breakthroughs",
]

const dontMissArticles = [
  { title: "The Future of Remote Work", category: "BUSINESS" },
  { title: "Space Exploration Milestones", category: "SCIENCE" },
  { title: "Fashion Week Highlights", category: "LIFESTYLE" },
  { title: "Tech Innovation Awards", category: "TECHNOLOGY" },
]

const categories = ["NEWS", "BUSINESS", "TECHNOLOGY", "SPORTS", "LIFESTYLE", "HEALTH", "OPINION"]

export default function NewsHub() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b-4 border-red-600 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-4xl font-bold font-serif text-gray-900 dark:text-white">NEWS PAPER</h1>
              <div className="hidden md:block text-sm text-gray-600 dark:text-gray-400">
                {format(new Date(), "EEEE, MMMM d, yyyy")}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Search className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <Input placeholder="Search news..." className="w-64 h-8 text-sm" />
              </div>

              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLoginModalOpen(true)}
                className="hidden md:flex items-center space-x-1"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="border-t border-gray-200 dark:border-gray-700">
            <div className="hidden md:flex items-center justify-between py-3">
              <div className="flex space-x-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Bell className="w-4 h-4" />
                <span>31 PM / 12.7K FOLLOWERS</span>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="text-left text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 py-2"
                    >
                      {category}
                    </button>
                  ))}
                  <Separator className="my-2" />
                  <Button variant="ghost" size="sm" onClick={() => setLoginModalOpen(true)} className="justify-start">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* News Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold mr-3">1</span>
                <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-white">BREAKING NOW</h2>
              </div>

              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="relative w-full h-64">
                    <Image
                      src={newsData[0].image}
                      alt={newsData[0].title}
                      fill
                      className="object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://via.placeholder.com/800x450?text=Image+Not+Available";
                      }}
                    />
                  </div>
                  <div className="space-y-4">
                    <Badge variant="destructive" className="text-xs">
                      {newsData[0].category}
                    </Badge>
                    <h3 className="text-3xl font-bold font-serif text-gray-900 dark:text-white leading-tight">
                      {newsData[0].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-justify leading-relaxed">
                      {newsData[0].excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">{newsData[0].author}</span>
                      <span className="mx-2">•</span>
                      <span>{format(newsData[0].date, "MMM d, yyyy")}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* News Grid */}
            <section>
              <div className="flex items-center mb-6">
                <span className="bg-gray-800 dark:bg-gray-600 text-white px-3 py-1 text-sm font-bold mr-3">2</span>
                <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-white">TODAY'S HEADLINES</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {newsData.slice(1).map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative w-full h-48">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = "https://via.placeholder.com/400x250?text=Image+Not+Available";
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <Badge variant="outline" className="text-xs font-bold">
                            {article.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-white mb-3 leading-tight">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-justify mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">{article.author}</span>
                          <span className="mx-2">•</span>
                          <span>{format(article.date, "MMM d")}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Subscribe Section */}
            <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold font-serif text-red-800 dark:text-red-200 mb-2">SUBSCRIBE</h3>
                <p className="text-sm text-red-600 dark:text-red-300 mb-4">Get daily news delivered to your inbox</p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Subscribe Now</Button>
                <p className="text-xs text-red-500 dark:text-red-400 mt-2">Join 12.7K followers</p>
              </CardContent>
            </Card>

            {/* Don't Miss Section */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold font-serif text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  DON'T MISS
                </h3>
                <div className="space-y-4">
                  {dontMissArticles.map((article, index) => (
                    <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 text-xs font-bold rounded">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <Badge variant="outline" className="text-xs mb-1">
                          {article.category}
                        </Badge>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {article.title}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold font-serif text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  TRENDING TOPICS
                </h3>
                <div className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <button
                      key={index}
                      className="block w-full text-left text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 py-1 transition-colors"
                    >
                      #{topic.replace(/\s+/g, "")}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stay Connected */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold font-serif text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  STAY CONNECTED
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Newsletter</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">12.7K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Social Media</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">45.2K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">RSS Feed</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">8.9K</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold font-serif mb-4">NEWS PAPER</h3>
              <p className="text-gray-400 text-sm">Your trusted source for breaking news and in-depth analysis.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <div className="space-y-2">
                {categories.slice(0, 4).map((category) => (
                  <button key={category} className="block text-sm text-gray-400 hover:text-white transition-colors">
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Magazine Partners</h4>
              <div className="space-y-2">
                <button className="block text-sm text-gray-400 hover:text-white transition-colors">Vogue</button>
                <button className="block text-sm text-gray-400 hover:text-white transition-colors">Health</button>
                <button className="block text-sm text-gray-400 hover:text-white transition-colors">Forbes</button>
                <button className="block text-sm text-gray-400 hover:text-white transition-colors">Time</button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <button className="block text-sm text-gray-400 hover:text-white transition-colors">Contact Us</button>
                <button className="block text-sm text-gray-400 hover:text-white transition-colors">Advertise</button>
                <button className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </button>
                <button className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 News Paper. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold font-serif">Login</h2>
                <Button variant="ghost" size="sm" onClick={() => setLoginModalOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
                <Button className="w-full bg-red-600 hover:bg-red-700">Sign In</Button>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account? <button className="text-red-600 hover:underline">Sign up</button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}