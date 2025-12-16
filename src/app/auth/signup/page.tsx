import Link from "next/link";
import { Tractor, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-50 p-4">
      <Card className="w-full max-w-lg mx-auto shadow-2xl border-primary-200">
        <CardHeader className="text-center space-y-2">

          <Link href="/" className="inline-block">
            <img 
              src="/images/Logo.jpg" 
              alt="Monarch FarmTech Logo" 
              className="w-20 h-20 rounded-full shadow-lg border-2 border-primary-200 mx-auto mb-2"
            />
          </Link>
          <CardTitle className="text-3xl !mt-4">Create Your Account</CardTitle>
          <CardDescription>
            Choose your role to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>I am a...</Label>
              <RadioGroup defaultValue="farmer" name="role" className="grid grid-cols-2 gap-4">
                <Label
                  htmlFor="farmer"
                  className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary-600 [&:has([data-state=checked])]:bg-primary-50"
                >
                  <RadioGroupItem value="farmer" id="farmer" className="sr-only" />
                  <Tractor className="mb-3 h-7 w-7 text-primary-600" />
                  <span className="font-semibold">Farmer</span>
                </Label>
                <Label
                  htmlFor="buyer"
                  className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary-600 [&:has([data-state=checked])]:bg-primary-50"
                >
                  <RadioGroupItem value="buyer" id="buyer" className="sr-only" />
                  <ShoppingCart className="mb-3 h-7 w-7 text-primary-600" />
                  <span className="font-semibold">Buyer</span>
                </Label>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="e.g. Bello Usman" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="name@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full bg-primary-800 hover:bg-primary-900 text-white font-bold">
              Create Account
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="underline font-semibold text-primary-700">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
