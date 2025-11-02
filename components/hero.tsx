import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"
import { AcademicWing } from "./academic-wing"

export function Hero() {
  const buttonNew = (
    <Button asChild className="text-md rounded-full bg-orange-600 px-6 text-black hover:bg-orange-800">
      <a href="https://wa.me/9745686235" target="_blank" rel="noopener noreferrer">
        Chat With Us
      </a>
    </Button>
  )

  return (
    <section className="relative isolate h-full overflow-hidden">
      <div className="container mx-auto px-4 py-16 ">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/icons/crescent.png" alt="creasentlogo" width={64} height={64} className="h-16 w-16" />
            <p className="text-md uppercase tracking-[0.25em] text-zinc-50/80">Crescent Hybrid Tuition Centre</p>
          </div>
          <h1 className="mt-3 text-center my-16 text-4xl tracking-wide font-extrabold tracking-tight sm:text-5xl md:text-6xl ">
            <span className="block text-orange-600 drop-shadow-2xl">A LEGACY OF SUCCESS FOR </span>
             {/* <span className="block text-orange-600 drop-shadow-md">Success for</span> */}
            <span className="block text-blue-950">GENERATIONS</span> 
          </h1>
          <div className="mt-6">{buttonNew}</div>
        </div>
      </div>
    </section>
  )
}
