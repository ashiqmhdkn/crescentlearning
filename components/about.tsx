import { Building2, Users } from "lucide-react"

export function About() {
  const stats = [
    {
      icon: Building2,
      label: "Years of Excellence",
      value: "38+",
      description: "Serving the community since 1987",
    },
    {
      icon: Users,
      label: "Students Trained",
      value: "100000+",
      description: "Across all academic divisions",
    },
  ]

  return (
    <section className="relative py-16 sm:py-24" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-xl text-orange-600 sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-blue-950">Crescent Learning</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Established in 1987, Crescent Learning has been a beacon of educational excellence, providing quality
            coaching and academic support to thousands of students across multiple divisions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="glass-border-subtle p-6 rounded-xl hover:glass-border transition-all">
                <Icon className="h-8 w-8 text-blue-950 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-orange-600 mb-2">{stat.label}</div>
                <p className="text-xs text-gray-400">{stat.description}</p>
              </div>
            )
          })}
        </div>

        {/* Mission Statement */}
        <div className="glass-border-enhanced p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            A legacy of success through generations defines our journey in education. Our mission is to inspire learning, nurture talent, and empower minds to achieve excellence. We continue to uphold values that make education meaningful and transformative. To explore our vision for lifelong learning.
          </p>
        </div>
      </div>
    </section>
  )
}
