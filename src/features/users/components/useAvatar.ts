
export function useAvatar(firstName: string | undefined, lastName: string | undefined) {
  const getInitials = (): string => {
    if (firstName && lastName) {
      return firstName[0].toUpperCase() + lastName[0].toUpperCase()
    }

    if (firstName) {
      return firstName[0].toUpperCase()
    }
    return '?'
  }

  return {
    getInitials,
  }
}
