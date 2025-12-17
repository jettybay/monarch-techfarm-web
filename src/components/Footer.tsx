import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/monarchfarmtech", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/monarchfarmtech", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/monarchfarmtech", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/monarchfarmtech", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">The Monarch FarmTech</h3>
            <p className="text-primary-200">Empowering Nigerian farmers with technology for a prosperous future.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-primary-200 hover:text-accent transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-primary-200">hello@monarchfarmtech.com<br />+234 812 345 6789</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-800 p-3 rounded-full hover:bg-accent transition"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-800 my-8" />
        <div className="text-center text-primary-200">
          © {currentYear} The Monarch FarmTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
