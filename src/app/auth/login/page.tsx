import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

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

export default function LoginPage() {
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
          <CardTitle className="text-3xl !mt-4">Welcome Back</CardTitle>
          <CardDescription>
            Sign in to your account to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type="password" 
                  required 
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                >
                  <EyeOff className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="rounded border-gray-300"
                />
                <Label htmlFor="remember" className="text-sm">Remember me</Label>
              </div>
              <Link href="/auth/forgot-password" className="text-sm text-primary-700 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full bg-primary-800 hover:bg-primary-900 text-white font-bold">
              Sign In
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="underline font-semibold text-primary-700">
              Create one here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
