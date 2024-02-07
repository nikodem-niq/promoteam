import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import { forwardRef } from 'react'
import s from './header.module.scss'

export const Header = forwardRef((_, ref) => {
  return (
    <header className={s.header} ref={ref}>
      <div className={cn('layout-block', s.head)}>
        <div className={cn(s.headerSectionLeft, s.headerSection)}>
          <Link href="/_debug/orchestra" target="_blank" className="link">
            promoteam
          </Link>
        </div>
        <div className={cn(s.headerSectionMain, s.headerSection)}>
          <Link href="/_debug/orchestra" target="_blank" className="link">
            strona główna
          </Link>
          <Link href="/_debug/orchestra" target="_blank" className="link">
            o nas
          </Link>
          <Link href="/_debug/orchestra" target="_blank" className="link">
            usługi
          </Link>
          <Link href="/_debug/orchestra" target="_blank" className="link">
            kontakt
          </Link>
        </div>
        <div className={cn(s.headerSectionRight, s.headerSection)}>
          <Link href="/_debug/orchestra" target="_blank" className="link">
            email
          </Link>
          <Link href="/_debug/orchestra" target="_blank" className="link">
            instagram
          </Link>
          <Link href="/_debug/orchestra" target="_blank" className="link">
            facebook
          </Link>
          <Link href="/_debug/orchestra" target="_blank" className="link">
            debug
          </Link>
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
