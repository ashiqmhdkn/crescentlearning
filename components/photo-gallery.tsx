"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      title: "Campus Overview",
      category: "Campus",
      src: "/modern-educational-campus-building.jpg",
    },
    {
      id: 2,
      title: "Classroom Learning",
      category: "Academics",
      src: "/students-in-interactive-classroom.jpg",
    },
    {
      id: 3,
      title: "Science Lab",
      category: "Facilities",
      src: "/modern-science-laboratory.jpg",
    },
    {
      id: 4,
      title: "Sports Activity",
      category: "Sports",
      src: "/students-playing-sports-outdoor.jpg",
    },
    {
      id: 5,
      title: "Library",
      category: "Facilities",
      src: "/modern-library.png",
    },
    {
      id: 6,
      title: "Annual Event",
      category: "Events",
      src: "/school-annual-event-celebration.jpg",
    },
    {
      id: 7,
      title: "Computer Lab",
      category: "Facilities",
      src: "/computer-lab-with-workstations.jpg",
    },
    {
      id: 8,
      title: "Student Achievement",
      category: "Achievements",
      src: "/students-receiving-awards.jpg",
    },
  ]

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]

  return (
    <section className="relative py-16 sm:py-24 "id="gallery">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-blue-950">
            Campus <span className="text-orange-600">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our state-of-the-art facilities and vibrant campus life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all
                         glass-card text-gray-700 hover:bg-orange-100 hover:text-orange-700
                         hover:border-orange-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={`glass-card relative overflow-hidden rounded-xl cursor-pointer group
                         transition-all hover:shadow-lg
                         ${index % 4 === 1 || index % 4 === 2 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <div className="relative w-full h-64 sm:h-80">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <p className="text-orange-300 text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="glass-card-enhanced relative max-w-4xl w-full rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              <div className="relative w-full h-96 sm:h-[600px] rounded-xl overflow-hidden">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4 text-center p-4">
                <h3 className="text-gray-800 text-xl font-bold">{galleryImages[selectedImage].title}</h3>
                <p className="text-orange-600">{galleryImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
