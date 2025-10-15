import type { User } from "~/types/models";
import jwt_decode from "jwt-decode";
const VITE_EXTERNAL_API_URL = import.meta.env.VITE_EXTERNAL_API_URL

type LoginOptions = {
    method: 'POST' | 'GET'
    headers: Record<string, string>
    body?: string
    credentials?: RequestCredentials
}

export const useAuth = () => {
    const token = useState<string | null>('token', () => null)

    const decodedTokenValue = async () => {
        if (!token.value) {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                token.value = storedToken;
            }
        }
        if (token.value) {
            return await jwt_decode(token.value);
        }

        return null
    }

    const user = useState<User | null>('user', () => null)

    const login = async (email: string, password: string) => {
        if (!email || !password) return

        const options: LoginOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', accept: 'text/plain' },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        };
        
        try{
            type LoginResponse = { 
                access_token: string
                token_type: string
                expires_in: number
            }
            const data = await $fetch<LoginResponse>(`${VITE_EXTERNAL_API_URL}/login`, options)
            token.value = data.access_token
            localStorage.setItem('token', data.access_token)

            return data
        }
        catch(error){
            throw new Error(`Login State failed: ${String(error)}`)
        }
    }
    
    const getUser = async () => {
        if (!token.value) {
            const storedToken = localStorage.getItem('token');

            if (!storedToken) {
                return;
            }

            token.value = storedToken;
        }
        
        const options = {
            method: 'GET' as const,
            headers: { Authorization: `Bearer ${token.value}` },
        };

        try{
            const data = await useFetch(`${VITE_EXTERNAL_API_URL}/users`, options)
            
            // Assuming the API returns an array of users
            const users = data.data.value as User[];
            user.value = users as object;

            return users[0];
            
        }
        catch(error){
            console.error(error)
            return null
        }
    }

    const logout = () => {
        token.value = null
        user.value = null
        localStorage.removeItem('token')
        navigateTo('/login')
        return void 0
    }

    const refreshToken = async () => {
        const options = {
            method: 'POST' as const,
            credentials: 'include' as RequestCredentials,
        };
        
        try{
            type RefreshResponse = { 
                access_token: string
                token_type: string
                expires_in: number
            }
            const data = await $fetch<RefreshResponse>(`${VITE_EXTERNAL_API_URL}/auth/refresh`, options)
            
            return data
        }
        catch(error){
            console.error(error)
            return
        }
    }

    return { login, token, getUser, logout, refreshToken, decodedTokenValue }
}