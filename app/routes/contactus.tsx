import * as React from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import CommonHeader from "~/components/CommonHeader"

export default function ContactUs() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    })
    // Show success message
    alert("Thank you for your message. We'll get back to you soon!")
  }

  return (<>
  <CommonHeader title={'Contact'} description={'Stay Connected'}/>
  <section id="contact" className="py-12 md:py-18 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="text-slate-600">
            We'd love to hear about your project! Feel free to reach out to us via email at pankajkumar@yougotoweb.com, or
            simply fill out the contact form below. Our team will review your message and respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9374825854!2d80.94580491504444!3d26.87105998314688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd7e0a22ab8b%3A0xacc4c1573c9c97e8!2sUnicode%20Systems!5e0!3m2!1sen!2sin!4v1648123456789!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="YGTW  Technology Office Location"
              ></iframe>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">REACH US THROUGH(INDIA)</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-slate-800 mr-3">📍</div>
                    <p className="text-slate-600">Online Uttar Pradesh</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-slate-800 mr-3">📞</div>
                    <p className="text-slate-600">+91-0000000000, +91-0000000000</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-slate-800 mr-3">✉️</div>
                    <p className="text-slate-600">pankajkumar@yougotoweb.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">REACH US THROUGH (INDIA)</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-slate-800 mr-3">📍</div>
                    <p className="text-slate-600">
                      Saraimeer Azamgarh Uttar Pradesh 
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-slate-800 mr-3">📞</div>
                    <p className="text-slate-600">+91 0000000000</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-slate-800 mr-3">✉️</div>
                    <p className="text-slate-600">pankajkumar@yougotoweb.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4">SOCIAL NETWORKS</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-slate-800 p-2 rounded-md hover:bg-slate-700 transition-colors">
                  <Facebook className="h-5 w-5 text-white" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="bg-slate-800 p-2 rounded-md hover:bg-slate-700 transition-colors">
                  <Instagram className="h-5 w-5 text-white" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="bg-slate-800 p-2 rounded-md hover:bg-slate-700 transition-colors">
                  <Linkedin className="h-5 w-5 text-white" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="bg-slate-800 p-2 rounded-md hover:bg-slate-700 transition-colors">
                  <Twitter className="h-5 w-5 text-white" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg border p-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">Get In Touch!</h3>
              <div className="h-1 w-16 bg-slate-800 mb-4"></div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Your name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Your email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone
                    </label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Your message (optional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 h-auto"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>)
}

