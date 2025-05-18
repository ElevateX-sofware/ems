

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LoginRegisterDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onLogin: () => void
}

export function LoginRegisterDialog({ open, onOpenChange, onLogin }: LoginRegisterDialogProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin()
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would register the user here
    // Then automatically log them in
    onLogin()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">Welcome to Elearn</DialogTitle>
        </DialogHeader>
        <Tabs
          defaultValue="login"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "login" | "register")}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs text-blue-500 hover:text-blue-600">
                    Forgot password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="registerEmail">Email</Label>
                <Input id="registerEmail" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registerPassword">Password</Label>
                <Input id="registerPassword" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Register
              </Button>
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
