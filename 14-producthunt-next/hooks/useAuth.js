import { useState, useEffect } from 'react'
import firebase from '../Firebase/firebase'

const useAuth = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
        return () => unsubscribe()
    },[])
    return user
}

export default useAuth