import { http } from '@/infra/http/http-client'
import { setAccessToken } from '../storage/auth.storage'
import type { UserResponseDTO } from '../types/dto/auth-dto'

export async function LoginUser(email: string, password: string): Promise<UserResponseDTO> {
  const responseData = await http.post<UserResponseDTO>('auth/login', {
    email,
    password,
  })
  setAccessToken(responseData.token)
  return responseData
}
