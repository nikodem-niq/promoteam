import { useEffect, useRef } from 'react'
import s from './progressBar.module.scss'

export function ProgressBar() {
  const progressRef = useRef()

  useEffect(() => {
    const updateProgress = () => {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const progress = `${(scrollPosition / windowHeight) * 100}%`

      progressRef.current.style.width = progress
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className={s.progressBar}>
      <div className={s.progressStatic}>
        <div>
          <p>strona główna</p>
          <div className={s.separator}></div>
        </div>
        <div>
          <p>o nas</p>
          <div className={s.separator}></div>
        </div>
        <div>
          <p>usługi</p>
          <div className={s.separator}></div>
        </div>
        <div>
          <p>momenty</p>
          <div className={s.separator}></div>
        </div>
        <div>
          <p>kontakt</p>
          <div className={s.separator}></div>
        </div>
      </div>
      <div ref={progressRef} className={s.progress} />
    </div>
  )
}
