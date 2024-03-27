import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKrILy19U55y4BLITFSzX4ppHX-xUjnz0",
    authDomain: "moha-k-youth-app.firebaseapp.com",
    projectId: "moha-k-youth-app",
    storageBucket: "moha-k-youth-app.appspot.com",
    messagingSenderId: "35805656769",
    appId: "1:35805656769:web:e8138aac65c9247deb4640",
    measurementId: "G-N9D3XPZVBF"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { db, storage, auth }