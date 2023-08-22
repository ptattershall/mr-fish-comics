"use client"

import React from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
 } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils"
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
type Input = z.infer<typeof registerSchema>;

export default function SignupForm() {
    const {toast} = useToast()
    const [formStep, setFormStep] = React.useState(0)
    const router = useRouter()
    const form = useForm<Input>({ resolver: zodResolver(registerSchema),
        defaultValues: {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            source: '',
            firstName: '',
            lastName: '',
            bio: '', 
        }
    })


    async function onSubmit(data: Input, e: React.SyntheticEvent) {
        if (data.password !== data.confirmPassword) {
            toast({
                title: 'Passwords do not match!',
                variant: 'destructive',
            })
            return;
        }
        console.log(data);
        e.preventDefault();
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })
        const userInfo = await response.json();
        router.push('/login');
        toast({
            title: 'Account created successfully!',
            variant: 'success',
        });
    }


  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Card className="w-[350px]">
        <CardHeader className='w-[350px]'>
            <CardTitle>Sign-up</CardTitle>
            <CardDescription>Mr. Fish&#39;s Online Sign-up</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-2 overflow-x-hidden"
            >
                <motion.div
                    className={cn("space-y-2", {
                    // hidden: formStep == 1,
                    })}
                    // formStep == 0 -> translateX == 0
                    // formStep == 1 -> translateX == '-100%'
                    animate={{
                    translateX: `-${formStep * 100}%`,
                    }}
                    transition={{
                    ease: "easeInOut",
                    }}
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Choose Username" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )
                        }
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email Address" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" {...field} type='password'/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Confirm Password" {...field} type='password'/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    </motion.div>
                    <motion.div
                className={cn("space-y-2 absolute top-0 left-0 right-0", {
                  // hidden: formStep == 0,
                })}
                // formStep == 0 -> translateX == 100%
                // formStep == 1 -> translateX == 0
                animate={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                style={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                        <FormField
                            control={form.control}
                            name="source"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Where did you hear about us?</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a Source" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectItem value="Facebook">Facebook</SelectItem>
                                    <SelectItem value="Twitter">Twitter</SelectItem>
                                    <SelectItem value="Instagram">Instagram</SelectItem>
                                    <SelectItem value="Twitch">Twitch</SelectItem>
                                    <SelectItem value="TikTok">TikTok</SelectItem>
                                    <SelectItem value="Youtube">Youtube</SelectItem>
                                    <SelectItem value="InPerson">In Person\Event</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="First Name" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Last Name" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                    <Textarea
                                    placeholder="Tell us a little bit about yourself"
                                    className="resize-none"
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </motion.div>
                    <div className='flex gap-2'>
                        <Button type="submit" className={cn("mt-4",{hidden: formStep == 0})}>Submit</Button>
                        <Button 
                            type='button' 
                            variant={'outline'}
                            className={cn("mt-4",{hidden: formStep == 1})} 
                            onClick={() => {form.trigger(['username', 'email', 'password', 'confirmPassword'])
                            const emailState = form.getFieldState('email')
                            const usernameState = form.getFieldState('username')
                            const passwordState = form.getFieldState('password')
                            const confirmPasswordState = form.getFieldState('confirmPassword')
                            if (!emailState.isDirty || emailState.invalid) return;
                            if (!usernameState.isDirty || usernameState.invalid) return;
                            if (!passwordState.isDirty || passwordState.invalid) return;
                            if (!confirmPasswordState.isDirty || confirmPasswordState.invalid) return;
                            setFormStep(1)
                        }}
                        >
                            Next
                            <ArrowRight className='w-4 h-4 ml-2'/>
                        </Button>
                        <Button type="button" variant={'outline'} className={cn("mt-4",{hidden: formStep == 0})} onClick={() => {setFormStep(0)}}>
                            <ArrowLeft className='w-4 h-4 mr-2'/>
                            Back
                        </Button>
                    </div>
                </form>
            </Form>
        </CardContent>
        </Card>
    </div> 
  )
}