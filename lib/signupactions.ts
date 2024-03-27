'use server'

import { auth, db } from "@/firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, doc, setDoc } from "firebase/firestore"

export async function signup(formData: FormData) {
    try {
        const email = formData.get('email')
        const password = formData.get('password')
        const role = formData.get('role')
        const username = formData.get('username')
        const phonenumber = formData.get('phonenumber')
        const cell = formData.get('cell')

        const userCredential = await createUserWithEmailAndPassword(auth, email as string, password as string)
        const user = userCredential.user

        await setDoc(doc(collection(db, "users"), user.uid), {
            email: email,
            role: role,
            username: username,
            phonenumber: phonenumber,
            cell: cell,
        })

        return 'Success'

    } catch (error) {
        if (error) {
            return 'Something went wrong.'
        }
        throw error
    }
}