import UserAvatar from '@/features/users/components/user-avatar'
import { useProfile } from './useProfile'

function ProfileCard() {
  const {userData, isLoading} = useProfile()

  if(isLoading){
    <div>Carregando...</div>
  }

  return (
    <div className="bg-card p-6 rounded-xl border border-border flex flex-col gap-6 min-w-xs max-w-full">
      <div className="flex items-center gap-4">
        <UserAvatar
          avatarUrl={userData?.avatarUrl}
          firstName={userData?.firstName}
          lastName={userData?.lastName}
          size="lg"
        />

        <span className="text-sm text-primary">
          {userData?.role === 'STUDENT'
            ? `Estudante de ${userData.course}`
            : `Campus ${userData?.campus.name}`}
        </span>
      </div>

      <div className="flex gap-4 w-full justify-center">
        <div className="flex flex-col">
          <span className="text-muted-foreground text-xs font-semibold">
            Posts
          </span>
          <span className="text-center font-bold">{userData?.states.postsCount}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-muted-foreground text-xs font-semibold">
            Seguindo
          </span>
          <span className="text-center font-bold">{userData?.states.followingCount}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-muted-foreground text-xs font-semibold">
            Seguidores
          </span>
          <span className="text-center font-bold">{userData?.states.followersCount}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
