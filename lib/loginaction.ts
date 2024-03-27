'use server'

import { auth } from "@/firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export async function authenticate(formData: FormData) {
    try {
        const email = formData.get('email')
        const password = formData.get('password')

        await signInWithEmailAndPassword(auth, email as string, password as string)

        return 'Success'
    } catch (error) {
        if (error) {
            switch (error) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.'
                default:
                    return 'Something went wrong.'
            }
        }
        throw error
    }
}