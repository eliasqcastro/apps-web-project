import { createContext, useEffect, useState} from "react"

import {getAuth, signInWithEmailAndPassword, signOut as signOutFirebase, onAuthStateChanged} from "firebase/auth"

const UserContext = createContext({})

const UserProvider = ({children}:any) => {

    const auth = getAuth();
    const [couldLogin, setCouldLogin] = useState(false)
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        return onAuthStateChanged(auth, listenAuth)
    }, [])

    const listenAuth = (userState : any) => {

        setUser(auth.currentUser)
        setLoading(false)
    }

    const signIn = (email:string, password:string) => {

        setLoading(true);

        signInWithEmailAndPassword(auth, email, password).then((userCreditial) => {

        }).catch((error) => {

            setLoading(false);
        })
    }

    const signOut = () => {signOutFirebase(auth).then(() => {}).catch((error) => {

            setLoading(false)
        })
    }

    return(

        <UserContext.Provider value={{couldLogin, signIn, signOut, user, loading}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}