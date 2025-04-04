import { Facebook, Instagram, Linkedin, LinkedinIcon, Twitter} from "lucide-react"
import { Separator } from "~/components/ui/separator"

export function Footer() {
  return (
    <footer className="relative bg-slate-800 text-white">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-10 sm:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* ABOUT section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT</h3>
            <Separator className="w-12 h-0.5 bg-white mb-6" />

            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-blue-400">SG</span>
                <span className="text-slate-300 ps-1">TECH</span>
              </span>
              <span className="block text-xs tracking-widest text-gray-400">Technology</span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              SG Tech Technology is one of the premier offshore IT Business Consulting companies delivering cutting-edge
              solutions to clients across the globe.
            </p>
          </div>

          {/* RECENT BLOG section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">RECENT BLOG</h3>
            <Separator className="w-12 h-0.5 bg-white mb-6" />

            <div className="space-y-4">
              <div className="p-4 bg-slate-700/50 rounded-md hover:bg-slate-700 transition-colors">
                <a href="#" className="text-sm">
                  NVIDIA Unveils Blackwell Ultra and Vera Rubin: The Next Generation of AI Superchips
                </a>
              </div>

              <div className="p-4 bg-slate-700/50 rounded-md hover:bg-slate-700 transition-colors">
                <a href="#" className="text-sm">
                  Microsoft Teams vs. Google Workspace: A Comprehensive Comparison for Your Business Needs
                </a>
              </div>

              <div className="p-4 bg-slate-700/50 rounded-md hover:bg-slate-700 transition-colors">
                <a href="#" className="text-sm">
                  What Is Cloud Native? Benefits, Technologies, and Why It Matters
                </a>
              </div>

              <div className="p-4 bg-slate-700/50 rounded-md hover:bg-slate-700 transition-colors">
                <a href="#" className="text-sm">
                  Microsoft to Shut Down Skype Permanently – End of an Era!
                </a>
              </div>
            </div>
          </div>

          {/* PAGES section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PAGES</h3>
            <Separator className="w-12 h-0.5 bg-white mb-6" />

            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  E-commerce
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and social media section */}
        <div className="pt-6 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">© 2025, SG Tech Technology All rights reserved.</div>

          <div className="text-sm text-gray-400">sgtechtechnology@gmail.com | Kerakat Jaunpur Uttar Pradesh</div>

          <div className="flex space-x-2">
            <a href="#" className="bg-white p-2 rounded-md hover:bg-gray-200 transition-colors">
              <Facebook className="h-4 w-4 text-slate-800" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="bg-white p-2 rounded-md hover:bg-gray-200 transition-colors">
              <Instagram className="h-4 w-4 text-slate-800" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="bg-white p-2 rounded-md hover:bg-gray-200 transition-colors">
              <LinkedinIcon className="h-4 w-4 text-slate-800" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="bg-white p-2 rounded-md hover:bg-gray-200 transition-colors">
              <Twitter className="h-4 w-4 text-slate-800" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

