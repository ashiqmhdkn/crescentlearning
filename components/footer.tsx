import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Gallery", href: "#gallery" },
    { label: "Admission", href: "#admission" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/9745686235", label: "Whatsapp" },
    { icon: Instagram, href: "https://www.instagram.com/crescent_centre/", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://m.youtube.com/@crescentcentreinfo?fbclid=PAQ0xDSwNxZpBleHRuA2FlbQIxMAABp-CEaNfWFGmv_5Wm6NzbJJUNuenU11Tm1t8e03mH994PXpe_N1kVP4jrjeZl_aem_4h4gZzeDB5bL6lQILs3Avg", label: "YouTube" },
  ]

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 9745686235", href: "tel:+91 9544686235" },
    { icon: Mail, label: "Email", value: "crescentcentreinfo@gmail.com", href: "mailto:crescentcentreinfo@gmail.com" },
    {
      icon: MapPin,
      label: "Address",
      value: "Kadungathukundu, Kaplakanchery, Malappuram, Kerala-676551",
      href: "https://maps.app.goo.gl/oNH2WmB7FR3ZKWpo8?g_st=aw",
    },
  ]

  return (
    <footer className="relative border-t border-gray-800 bg-gradient-to-b from-black/50 to-black">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4 hover:text-orange-600">Crescent Learning</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 hover:text-orange-600">
              A LEGACY OF SUCCESS FOR GENERATIONS
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-900/50 text-gray-400 hover:bg-orange-600 hover:text-black transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 hover:text-orange-600">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-orange-600 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 hover:text-orange-600">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <li key={info.label}>
                    <a
                      href={info.href}
                      className="flex items-start gap-3 text-gray-400 hover:text-orange-600 transition-colors text-sm group"
                    >
                      <Icon className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:text-orange-600" />
                      <div>
                        <p className="font-medium text-gray-300 hover:text-orange-600">{info.label}</p>
                        <p className="text-xs text-gray-500 hover:text-orange-600">{info.value}</p>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get updates about admissions and events.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-300 text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-blue-950 text-black font-medium hover:bg-blue-700 transition-all text-sm"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 hover:text-orange-600">
          <p>&copy; {currentYear} Crescent Learning. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-orange-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-orange-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="#contact" className="hover:text-orange-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
