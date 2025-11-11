interface StaffCardProps {
  staff: {
    id: number
    name: string
    title: string
    qualification: string
    avatar: string
  }
}
export default function StaffCard({ staff }: StaffCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden flex-shrink-0
        w-72 h-80 /* Smaller, more typical profile card size */
        bg-neutral-950 text-white
        border border-white/10
        rounded-lg
        shadow-lg
        p-1
        flex flex-col items-center justify-center
        transition-all duration-300
        group cursor-pointer
        hover:border-white/20
        hover:shadow-xl
      `}
      style={{
        background: `
          radial-gradient(100% 100% at 50% 0%,
            rgba(255,255,255,.03) 0%,
            rgba(255, 253, 253, 0.02) 30%,
            transparent 60%)
        `,
        boxShadow: `
          inset 0 0 0 1px rgba(255,255,255,.04),
          0 10px 30px rgba(0,0,0,.4)
        `,
      }}
    >
      {/* Subtle hover gradient, inspired by your original */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-teal-500/0 to-transparent group-hover:from-emerald-400/5 group-hover:via-teal-500/3 group-hover:to-transparent transition-all duration-500 z-0" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
         <div className="mb-2 text-center">
          <p className="text-sm text-gray-600 font-medium">
          {staff.title}
        </p>
         </div>
        {/* Avatar Image */}
        <img
          src={staff.avatar || "/placeholder.svg"}
          alt={staff.name}
          className="w-30 h-30 rounded-full object-cover border-4 border-gray-700 mb-5"
        />

        {/* Staff Name */}
        <h3 className="text-xl font-semibold text-orange-600 mb-1">
          {staff.name}
        </h3>

        {/* Staff Qualification/Title */}
        <p className="text-sm text-blue-950 font-medium">
          {staff.qualification}
        </p>
      </div>
    </div>
  );
}