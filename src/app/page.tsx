'use client';

import { Leaf, Tractor, Users, TrendingUp, Smartphone, Shield, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// UI Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative text-white overflow-hidden"
        style={{
          backgroundColor: '#1a5d1a',
          backgroundImage: 'url("/images/Farmer4.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '780px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/60 to-primary-700/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24 md:py-32 text-center">
          <Badge className="mb-6 bg-accent text-green-900 italic">
          Empowering Nigerian Farmers</Badge>

          <div className="mb-6 flex flex-col items-center">
            <img 
              src="/images/Logo.jpg" 
              alt="Monarch FarmTech Logo" 
              className="w-22 h-22 md:w-22 md:h-22s rounded-full shadow-lg border-4 border-white/30 mb-4"
            />
            <h1 className="text-5xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              <span className="text-white">The Monarch</span>
            </h1>

            <h1 className="text-5xl md:text-4xl font-bold leading-tight drop-shadow-lg">
              <span className="text-green-600">FarmTech</span>
            </h1>
            
          </div>

          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 drop-shadow-md">
            Connect directly with buyers, reduce middlemen, and grow your income with Nigeria's leading agritech marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link href="/auth/signup">
              <Button size="lg" className="bg-accent border-1 border-black text-black hover:bg-transparent hover:text-white-900 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Join as Farmer
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="lg" className="bg-black border-1 border-white text-white hover:bg-transparent hover:text-white-900 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Join as Buyer
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary-900">Powerful Features for Real Impact</h2>
          <p className="text-xl text-center text-gray-700 mb-12">Built for Nigerian farmers and buyers</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary-200 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <Tractor className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Direct Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>List your produce and connect instantly with buyers across Nigeria.</CardDescription>
              </CardContent>
            </Card>
            <Card className="border-primary-200 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Real-Time Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get live market prices and weather alerts to make smart decisions.</CardDescription>
              </CardContent>
            </Card>
            <Card className="border-primary-200 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Escrow protection and instant payouts via Paystack.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-900">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Sign Up Free</h3>
              <p className="text-gray-600">Create your farmer or buyer profile in minutes.</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">2. List or Browse</h3>
              <p className="text-gray-600">Post produce or search for fresh crops.</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Connect & Chat</h3>
              <p className="text-gray-600">Negotiate directly with secure in-app messaging.</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">4. Sell & Grow</h3>
              <p className="text-gray-600">Complete sales and boost your income.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-900">What Farmers Say</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent className="pt-10 text-center">
                    <p className="text-lg italic mb-6">"Monarch FarmTech doubled my income by connecting me directly to Lagos buyers!"</p>
                    <Avatar className="mx-auto mb-4">
                      <AvatarImage src="/farmer1.jpg" />
                      <AvatarFallback>AF</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">Aminu Farah, Rice Farmer - Kaduna</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="pt-10 text-center">
                    <p className="text-lg italic mb-6">"The real-time price alerts helped me sell my maize at the best possible time. My profits have increased by 40%."</p>
                    <Avatar className="mx-auto mb-4">
                      <AvatarImage src="/farmer2.jpg" />
                      <AvatarFallback>CO</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">Chidinma Okoro, Maize Farmer - Oyo</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="pt-10 text-center">
                    <p className="text-lg italic mb-6">"Finding reliable buyers used to be my biggest challenge. Now, I have a steady stream of orders through the app."</p>
                    <Avatar className="mx-auto mb-4">
                      <AvatarImage src="/farmer3.jpg" />
                      <AvatarFallback>BU</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">Bello Usman, Cassava Farmer - Benue</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-primary-900 text-green-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 ">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8">Join thousands of Nigerian farmers today.</p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-semibold">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>


      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-primary-600 text-green-900 p-4 rounded-full shadow-lg hover:bg-primary-700 transition z-40"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <Footer />
    </>
  );
}
