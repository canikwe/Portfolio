import { features } from '@/content/site'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'
import { About } from '@/components/About'
import { Stack } from '@/components/Stack'
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
        <Stack />
        {features.showProjects && (
          <>
            <Joke background="umbrellas" />
            <Projects />
          </>
        )}
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
