import { z } from "zod";

export const registerSchema = z.object({
    username: z.string().min(3, { message: "Username must be between 3 and 20 characters"}).max(20),
    email: z.string().email(),
    password: z.string().min(7).max(20),
    confirmPassword: z.string().min(7).max(20),
    source: z.string().min(3, { message: "Please choose from the options provided"}).max(20),
    subscriptionType: z.string().min(3).max(20),
    firstName: z.string().min(2, { message: "First name must be between 2 and 20 characters"}).max(20),
    lastName: z.string().min(2, { message: "Last name must be between 2 and 20 characters"}).max(20),
    bio: z.string().min(0, {
        message: "Bio must be at least 10 characters.",
      }).max(255, {
        message: "Bio must not be longer than 160 characters.",
      }),
});