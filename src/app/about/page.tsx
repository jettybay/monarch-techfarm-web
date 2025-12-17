
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";


export default function AboutPage() {
  return (
    <>
      <Navbar />
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-900">About The Monarch FarmTech</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                To empower Nigerian smallholder farmers by providing a seamless, transparent marketplace that eliminates middlemen, reduces post-harvest losses, and boosts incomes through direct buyer connections and smart tools.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Our Vision</h3>
              <p className="text-lg text-gray-700 mb-6">
                A Nigeria where every farmer thrives with fair prices, modern technology, and sustainable growth—crowning agriculture as the true monarch of our economy.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Our Story</h3>
              <p className="text-lg text-gray-700">
                Founded by a team of agricultural experts and technology innovators, The Monarch FarmTech was born from the understanding that Nigerian farmers deserve better market access and fair compensation for their hard work. We bridge the gap between traditional farming practices and modern technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="/images/rice.jpg" 
                alt="Nigerian farmer in the field" 
                className="rounded-lg shadow-lg object-cover h-48 w-full"
              />
              <img 
                src="/images/Farmer1.jpg" 
                alt="Farmer harvesting crops" 
                className="rounded-lg shadow-lg object-cover h-48 w-full"
              />
              <img 
                src="/images/Farmer3.jpg" 
                alt="Modern farming techniques" 
                className="rounded-lg shadow-lg object-cover h-48 w-full"
              />
              <img 
                src="/images/Farmer5.jpg" 
                alt="Happy farmer with successful harvest" 
                className="rounded-lg shadow-lg object-cover h-48 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-900">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary-700">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary-600" />
                  <span className="text-lg">hello@monarchfarmtech.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary-600" />
                  <span className="text-lg">+234 812 345 6789</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                  <span className="text-lg">Lagos, Nigeria</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary-700">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-primary-600 hover:text-primary-700">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-700">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-700">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'd love to hear from you!</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary-600" />
                  </div>
                  <div>
                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary-600" />
                  </div>
                  <div>
                    <input type="text" placeholder="Subject" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary-600" />
                  </div>
                  <div>
                    <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary-600"></textarea>
                  </div>
                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
