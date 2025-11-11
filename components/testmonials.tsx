"use client"

import { useRef } from "react"
import TestimonialCard from "./staff-card"
import { Button } from "@/components/ui/button"
import { title } from "process"
import StaffCard from "./staff-card"

const staff = [
  {
    id: 1,
    name: "Sanu",
    title: "Co-Founder & CTO",
    qualification: "B.ed, Maths Specialist",
    avatar: "/sanu.jpg",
  },
  {
    id: 2,
    name: "Saflie",
    title: "Co-Founder & CTO",
    qualification: "Msc Maths",
    avatar: "/safle.jpg",
 
  },
  {
    id: 3,
    name: "Noufal",
    title: "Co-Founder & CTO",
    qualification: "Msc, Maths Specialist",
    avatar: "/noufal.jpg",
  },
  {
    id: 4,
    name: "Muflih",
    title: "English Teacher",
    qualification: "MA English",
    avatar: "/muflih.jpg",
  },
   {
    id: 5,
    name: "Safuvana",
    title: "Teacher",
    qualification: "BA English",
    avatar: "/crescent.png",
  },
   {
    id: 6,
    name: "Ayesha Hamnah",
    title: "Teacher",
    qualification: "Bsc botany",
    avatar: "/crescent.png",
  },
     {
    id: 7,
    name: "Anas",
    title: "Teacher",
    qualification: "BA multimedia",
    avatar: "/crescent.png",
  },
     {
    id: 8,
    name: "Mansoor",
    title: "Principal",
    qualification: " ",
    avatar: "/crescent.png",
  },
]

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Create a continuous array by duplicating testimonials
  const duplicatedstaff = [...staff, ...staff, ...staff]

  return (
    <div className="relative w-full overflow-hidden">
      <div className="mb-8 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-orange-600">
          Our <span className="text-blue-950">Team</span>
          </h2>
           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The People We Build With
          </p>
          </div>
      {/* Gradient overlays */}
      {/* <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/60 via-white/20 to-transparent pointer-events-none z-30" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none z-20" /> */}

      {/* Scrolling container */}
       
      <div 
        ref={scrollRef}
        className="flex gap-4 h-96"
        style={{
          animation: 'scroll 17s linear infinite',
          width: 'fit-content'
        }}
      >
        {duplicatedstaff.map((staff, index) => (
          <div key={`${staff.id}-${index}`} style={{ flexShrink: 0 }}>
            <StaffCard staff={staff} />
          </div>
        ))}
      </div>

      {/* Side gradients */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />

      <style jsx>{`
        @keyframes scroll {
          0% {
                    /* Move by exactly 1/3 of total width (4 cards × 380px + 4 gaps × 16px) */
            transform: translateX(calc(-380px * 4 - 16px * 4));
            
          }
          100% {
  transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
