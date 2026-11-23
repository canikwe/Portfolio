import { features } from '@/content/site'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Stack } from '@/components/Stack'
import { CurrentlyWorkingOn } from '@/components/CurrentlyWorkingOn'
import { Projects } from '@/components/Projects'
import { Blog } from '@/components/Blog'
import { Joke } from '@/components/Joke'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Nav />
      <main>
        <About />
        <Experience />
        <Joke background="umbrellas" />
        <Stack />
        <CurrentlyWorkingOn />
        {features.showProjects && <Projects />}
        {features.showBlog && (
          <>
            <Joke background="typewriter" />
            <Blog />
          </>
        )}
        <Joke background="payphones" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
