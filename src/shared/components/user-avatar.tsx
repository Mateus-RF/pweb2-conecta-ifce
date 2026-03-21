import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

function UserAvatar({imageUrl, initials, size}: {imageUrl: string | undefined, initials: string, size: "default" | "sm" | "lg" | undefined}) {
  return (
    <Avatar size={size}>
      <AvatarImage src={imageUrl} />
      <AvatarFallback className="bg-primary/20 text-primary font-semibold border border-primary">{initials}</AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
