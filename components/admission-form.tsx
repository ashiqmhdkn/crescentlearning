"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle } from "lucide-react"

export function AdmissionForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    studentGrade: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const grades = [
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Others"
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.parentName.trim()) newErrors.parentName = "Parent name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.studentGrade) newErrors.studentGrade = "Student grade is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("Form submitted:", formData)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          parentName: "",
          email: "",
          studentGrade: "",
          message: "",
        })
      }, 3000)
    }
  }

  return (
    <section id="admission" className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-blue-950">
            Admission & <span className="text-orange-600">Registration</span>
          </h2>
          <p className="text-gray-600 text-lg">Fill out the form below to apply for admission</p>
        </div>

        <div className=" liquid-glass  bg-white/77 p-8 rounded-2xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12">
              <CheckCircle className="h-16 w-16 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
              <p className="text-gray-600 text-center max-w-md">
                Thank you for your application. Our team will contact you shortly to confirm your admission.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <div>
                 <div>
                <label className="block text-sm font-medium text-gray-300 mb-2"> Name *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 border transition-colors
                             text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2
                             ${errors.parentName ? "border-red-500 focus:ring-red-500" : "border-orange-200 focus:ring-orange-500"}`}
                  placeholder="Enter Student's Name"
                />
                {errors.parentName && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> {errors.parentName}
                  </p>
                )}
              </div>
              </div>
              <div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">School *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 border transition-colors
                             text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2
                             ${errors.parentName ? "border-red-500 focus:ring-red-500" : "border-orange-200 focus:ring-orange-500"}`}
                  placeholder="Enter School Name"
                />
                {errors.parentName && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> {errors.parentName}
                  </p>
                )}
              </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Parent's Name *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 border transition-colors
                             text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2
                             ${errors.parentName ? "border-red-500 focus:ring-red-500" : "border-orange-200 focus:ring-orange-500"}`}
                  placeholder="Enter parent's name"
                />
                {errors.parentName && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> {errors.parentName}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Place *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 border transition-colors
                             text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2
                             ${errors.parentName ? "border-red-500 focus:ring-red-500" : "border-orange-200 focus:ring-orange-500"}`}
                  placeholder="Enter Place"
                />
                {errors.parentName && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> {errors.parentName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                <input
                  type="number"

                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 border transition-colors
                             text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2
                             ${errors.email ? "border-red-500 focus:ring-red-500" : "border-orange-200 focus:ring-orange-500"}`}
                  placeholder="Enter phone number"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Student's Grade *</label>
                <select
                  name="studentGrade"
                  value={formData.studentGrade}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 border transition-colors
                             text-gray-800 focus:outline-none focus:ring-2
                             ${errors.studentGrade ? "border-red-500 focus:ring-red-500" : "border-orange-200 focus:ring-orange-500"}`}
                >
                  <option   value="">Select student grade</option>
                  {grades.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
                {errors.studentGrade && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> {errors.studentGrade}
                  </p>
                )}
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 border transition-colors
                             text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2
                             ${errors.message ? "border-red-500 focus:ring-red-500" : "border-orange-200 focus:ring-orange-500"}`}
                  placeholder="Tell us about your interest in our programs..."
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> {errors.message}
                  </p>
                )}
              </div> */}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg px-6 py-3
                           hover:shadow-lg hover:scale-[1.02]
                           transition-all"
              >
                Submit Application
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
