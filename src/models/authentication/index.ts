
export interface AuthenticationResponse {
    accessToken: string,
    refreshToken: string,
    accessTokenExpiresInSeconds: number
}

export interface AuthenticationContext {
    original: AuthenticationResponse,
    expiration: string,
    updatedAt: string
}

