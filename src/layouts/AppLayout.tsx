import { useAuth } from "@/features/auth/contexts/AuthContext";
import Navbar from "@/shared/components/navbar";
import useScroll from "@/shared/hooks/useScroll";
import { Navigate, Outlet } from "react-router";

function AppLayout(){

  useScroll()
  const {isAuthenticadated} = useAuth()
  if(!isAuthenticadated){
    return <Navigate to='/login' replace/>
  }

  return(
    <>
      <div className="flex flex-col min-h-svh">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default AppLayout
