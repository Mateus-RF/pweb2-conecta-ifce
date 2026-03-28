import { http } from "@/infra/http/http-client";
import type { UserProfileDTO } from "../types/UserProfileDTO";

export async function getProfile(): Promise<UserProfileDTO>{
  const responseData = await http.get<UserProfileDTO>('me')
  return responseData
}
