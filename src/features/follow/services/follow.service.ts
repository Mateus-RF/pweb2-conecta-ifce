import { http } from "@/infra/http/http-client";
import type { RecommendationsDTO } from "../types/dto/RecommendationsDTO";

export async function getRecommendations(): Promise<RecommendationsDTO> {
  const responseData = await http.get<RecommendationsDTO>('follow/recommendations')
  return responseData

}
