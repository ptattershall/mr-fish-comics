import * as React from "react"
import { Inter } from "next/font/google"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const inter = Inter({ subsets: ["latin"] })

export default function SignupForm() {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Card className="w-[350px]">
        <CardHeader className='flex justify-center'>
            <CardTitle>Login</CardTitle>
            <CardDescription>Mr. Fish&#39;s Online Login</CardDescription>
        </CardHeader>
            <CardContent>
                <form>

                </form>
            </CardContent>
        </Card>
    </div> 
  )
}
