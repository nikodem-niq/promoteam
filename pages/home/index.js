import { AboutSection } from 'components/about-section'
import { ContactSection } from 'components/contact-section'
import { HeroSection } from 'components/hero-section'
import { MomentsSection } from 'components/moments-section'
import { ServicesSection } from 'components/services-section'
import { Layout } from 'layouts/default'
import s from './home.module.scss'

export default function Home() {
  return (
    <Layout theme="dark" className={s.home}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MomentsSection />
      <ContactSection />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    }, // will be passed to the page component as props
  }
}
