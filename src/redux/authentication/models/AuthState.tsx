export default interface AuthState {
    token?: string
    refreshToken?: string
    expiration?: string
    updatedAt?: string
    isBiometric?: boolean
    isAuthenticated?: boolean
}