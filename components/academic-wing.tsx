import { BookOpen, Laptop, Users, Award } from "lucide-react"
import TestimonialCarousel from "./staff-scroll"

export function AcademicWing() {
  const divisions = [
    {
      id: 1,
      name: "National Means-cum-Merit Scholarship (NMMS) Coaching",
      icon: Award,
      description: "NMMS Coaching",
      details:
        "Specialized coaching for NMMS (National Means-cum-Merit Scholarship) examination with expert guidance and comprehensive study materials.",
      features: ["Expert Mentors", "Mock Tests", "Doubt Clearing"],
      stats: [
        { label: "Qualified Students", value: "1500+" },
        { label: "Scholarship Eligible", value: "250+" },
      ],
      color: "from-blue-100 to-cyan-100",
      borderColor: "border-amber-600",
      accentColor: "text-amber-600",
      bgAccent: "bg-blue-50",
    },
    {
      id: 2,
      name: "PSC Coaching",
      icon: Laptop,
      description: "Competitive Exam Coaching",
      details:
        "Advanced online coaching programs meticulously designed to empower students to excel in competitive examinations through expert mentorship, structured study plans, and interactive learning sessions.",
      features: ["Psc coaching", "Online and Offline Coaching", "Expert Mentors"],
      stats: [
        { label: "PSC", value: "1000+" },
        { label: "Eligiblity Old", value: "15+" },
      ],
      color: "from-purple-100 to-pink-100",
      borderColor: "border-amber-600",
      accentColor: "text-amber-600",
      bgAccent: "bg-purple-50",
    },
    {
      id: 3,
      name: "CHTC",
      icon: Users,
      description: "Crescent Hybrid Tuition Centre",
      stats: [
        { label: "Tuition", value: "8,9,10" },
        { label: "Classes", value: "1 to 1" },
      ],
      details:
        "Blended learning approach combining online and offline classes for personalized attention and comprehensive academic support.",
      features: ["Hybrid Learning", "Personal Attention", "Flexible Options"],
      color: "from-green-100 to-emerald-100",
      borderColor: "border-amber-600",
      accentColor: "text-amber-600",
      bgAccent: "bg-green-50",
    },
    {
      id: 4,
      name: "CSW",
      icon: BookOpen,
      description: "Crescent Students Wing",
      stats: [
        { label: "Eligibility", value: "Class 9+" },
        { label: "Social Work", value: "Moral Devpt" },
      ],
      details:
        "Holistic programs aimed at nurturing students’ social responsibility, empathy, and community engagement through active involvement in palliative care, volunteering, and local development initiatives.",
      features: ["Crescent Students Wing", "Palliative Care", "Social Responsibility"],
      color: "from-orange-100 to-red-100",
      borderColor: "border-amber-600",
      accentColor: "text-amber-600",
      bgAccent: "bg-orange-50",
    },
  ]

  return (
    // <section className="relative py-16 sm:py-24 bg-neutral-900">
    <div className="container mx-auto px-4 max-w-6xl" id="divisions">
      <div className="mb-12 text-center">
        <h2 className="text-3xl text-blue-950 sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Academic <span className="text-orange-600">Divisions</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Comprehensive educational programs designed for every learning preference
        </p>
      </div>

      {/* Divisions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {divisions.map((division) => {
          const Icon = division.icon
          return (
            <div className="relative rounded-xl glass-border bg-neutral-900 p-2">
              <div className=" w-full overflow-hidden rounded-2xl">
                {/* <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        /> */}

                <div className="relative z-10 p-3">
                  <div className="mx-auto mb-3 h-1.5 w-16 rounded-full" />
                  <div className="space-y-1 px-1">
                    <div className="text-3xl font-bold leading-snug text-orange-600/90">{division.description}</div>
                    <p className="text-xl text-white/40">{division.name}</p>
                    <div className="mt-3 inline-flex items-center rounded-full px-2 py-0.5 text-xs uppercase tracking-wider text-white/70">
                      {division.details}
                    </div>
                    <div className="flex flex-wrap gap-2 my-4">
                      {division.features.map((feature, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center rounded-full ${division.bgAccent} px-3 py-1 text-xs font-medium ${division.accentColor} border ${division.borderColor}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    {division.stats && (
                      <div className="glass-card bg-transparent grid grid-cols-2 gap-4 mb-6 p-4 rounded-lg">
                        {division.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl font-bold text-orange-600">{stat.value}</div>
                            <div className="text-xs text-gray-700 font-medium">{stat.label}</div>
                          </div>

                        ))}
                      </div>
                    )}

                    {/* 
                  <Button
                    asChild
                    className={`w-full ${division.accentColor} bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all`}
                  >
                    <a href="#contact">Learn More</a>
                  </Button> */}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* <TestimonialCarousel/> */}

      {/* CTA Section */}

    </div>
    // </section>
  )
}
