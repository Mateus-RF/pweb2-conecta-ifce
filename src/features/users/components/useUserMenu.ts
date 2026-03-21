import { useAuth } from "@/features/auth/contexts/AuthContext";
import { Logout } from "@/features/auth/services/login.service";
import { useNavigate } from "react-router";

export function useUserMenu(){
  const {authUser, clearAuthUser} = useAuth()
  const navigate = useNavigate()



  const triggerLogout = () => {
    clearAuthUser()
    Logout()
    navigate('/login')
  }

  return{
    authUser,
    triggerLogout
  }
}

