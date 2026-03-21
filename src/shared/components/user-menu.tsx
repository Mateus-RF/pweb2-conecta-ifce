import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenu,
} from './ui/dropdown-menu'
import UserAvatar from './user-avatar'
import { useUserMenu } from './useUserMenu'

function UserMenu() {

  const {authUser, getInitials, triggerLogout } = useUserMenu()
  const initials = getInitials()
  return(
    <DropdownMenu>
    <DropdownMenuTrigger className='outline-none focus:none'>
      <UserAvatar imageUrl={authUser?.avatarUrl} initials={initials} size='lg'/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuLabel className='text-sm font-semibold text-foreground'>{authUser?.name}</DropdownMenuLabel>
        <DropdownMenuLabel className='text-xs text-muted-foreground'>{authUser?.email}</DropdownMenuLabel>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem variant='destructive' onClick={triggerLogout}>Sair</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UserMenu
