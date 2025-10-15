import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { useAuth } from '../composables/useAuth'
import jwt_decode from "jwt-decode";

const isExpired = (exp: number) => {
  return exp < Date.now() / 1000;
}

const isAuthenticated = () => {
  const { token } = useAuth()
  
  if (token.value) {
    const { exp } = jwt_decode(token.value) as { exp: number };
    return !isExpired(exp)
  }
  
  const localToken = localStorage.getItem('token');
  
  if (localToken) {
    const { exp } = jwt_decode(localToken) as { exp: number };
    return !isExpired(exp)
  }

  return false
}

export default defineNuxtRouteMiddleware(() => {
  if (isAuthenticated() === false) {
    return navigateTo('/')
  }
})