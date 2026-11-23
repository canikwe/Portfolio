import { bio, person } from '@/content/site'

export const About = () => (
  <section id="about" className="about">
    <div className="container about__inner">
      <img className="about__photo" src="/images/profile.jpg" alt={person.name} width={240} height={240} />
      <div className="about__text">
        <h2 className="section-title">About</h2>
        <p>
          {bio.before}
          <strong>{bio.name}</strong>
          {bio.after}
        </p>
      </div>
    </div>
  </section>
)
