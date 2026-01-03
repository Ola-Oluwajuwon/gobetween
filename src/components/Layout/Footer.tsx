import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "Backend Development", href: "/services/backend-development" },
  { name: "SD Consulting", href: "/services/sd-consulting" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Ola-Oluwajuwon", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/oluwajuwon-kayode/",
    icon: Linkedin,
  },
  { name: "Email", href: "mailto:kayodeoluwajuwon9@gmail.com", icon: Mail },
];

export default function Footer() {
  // const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-brand-secondary">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-brand-primary flex items-center justify-center">
                  <span className="text-lg font-bold text-white">G</span>
                </div>
                <span className="text-xl font-bold text-brand-primary">
                  Go Between
                </span>
              </Link>
              <p className="text-sm text-white max-w-xs">
                Go Between is a brand built to empower businesses, startups, and
                individuals with impactful software solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white hover:text-brand-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white hover:text-brand-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-brand-primary transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
              <p className="text-sm text-white">Responds within 2 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-white">
              © Since 2025 go_between. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white">
              <Link
                href="/privacy"
                className="hover:text-brand-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-brand-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
