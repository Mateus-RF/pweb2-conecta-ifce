import Brand from '@/shared/components/brand'
import type { ReactNode } from 'react'
import { Link } from 'react-router'

function Navbar({ children }: { children: ReactNode }) {
  return (
    <header className="sticky top-0 border-b border-border z-50 bg-card/80 backdrop-blur-md">
      <nav className="container-main flex items-center justify-between py-3">
        {children}
      </nav>
    </header>
  )
}

function NavBrand({ to}: { to: string }) {
  return (
    <Link to={to}>
      <Brand />
    </Link>
  )
}

function NavLinks({ children }: { children: ReactNode }) {
  return <div className="flex gap-4 lg:gap-8">{children}</div>
}

function NavLink({ to, text  }: { to: string; text: string}) {
  return (
    <Link
      to={to}
      className="text-muted-foreground font-medium hover:text-primary"
    >
      {text}
    </Link>
  )
}

function NavActions({ children }: { children: ReactNode }) {
  return <div className="flex gap-2">{children}</div>
}

Navbar.Brand = NavBrand
Navbar.Links = NavLinks
Navbar.Link = NavLink
Navbar.Actions = NavActions

export default Navbar
