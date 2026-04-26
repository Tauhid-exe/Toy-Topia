import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../firebase.config'

// 1. Create the context
const AuthContext = createContext(null)

// 2. Google provider
const googleProvider = new GoogleAuthProvider()

// 3. AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Register with email & password
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Login with email & password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Login with Google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // Logout
  const logout = () => {
    return signOut(auth)
  }

  // Update name and photo
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL })
  }

  // Reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    // Cleanup listener on unmount
    return () => unsubscribe()
  }, [])

  const value = {
    user,
    loading,
    register,
    login,
    googleLogin,
    logout,
    updateUserProfile,
    resetPassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// 4. Custom hook to use auth anywhere
export function useAuth() {
  return useContext(AuthContext)
}