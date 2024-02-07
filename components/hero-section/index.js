import Image from 'next/image'
import s from './hero-section.module.scss'

export const HeroSection = () => {
  return (
    <section className={s.heroSection}>
      <div className={s.hero}>
        {/* hero header */}
        <div className={s.heroHeader}>
          <h1 className={s.firstHeader}>promo</h1>
          <h1 className={s.secondHeader}>team</h1>
          <div className={s.redDot} />
        </div>
        {/* img */}
        <Image
          src={'/images/heroImg.png'}
          width={1500}
          height={400}
          alt="heroImg"
        />
      </div>
    </section>
  )
}
