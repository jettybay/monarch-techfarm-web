
// src/components/Navbar.tsx
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "/about" },
    { label: "Support", href: "#Support" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/Logo.jpg"
            alt="The Monarch FarmTech Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-primary-700 hidden sm:block">
            The Monarch
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-primary-600 font-medium transition"
            >
              {item.label}
            </Link>
          ))}
          {/* <div className="flex items-center space-x-4 ml-8">
            <Link href="/auth/signup">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Join as Farmer
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                Join as Buyer
              </Button>
            </Link>
          </div> */}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64">
            <VisuallyHidden>
              <SheetTitle>Mobile Navigation Menu</SheetTitle>
            </VisuallyHidden>

            <div className="flex flex-col space-y-8 mt-20 px-4">
             
              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg text-gray-700 hover:text-primary-600 font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              {/* <div className="flex flex-col space-y-4">
                <Link href="/auth/signup">
                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    Join as Farmer
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="outline" className="w-full border-primary-600 text-primary-600">
                    Join as Buyer
                  </Button>
                </Link>
              </div> */}

              <div className="self-center">
                <Image
                  src="/images/Logo.jpg"
                  alt="The Monarch FarmTech Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                </div>

            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
