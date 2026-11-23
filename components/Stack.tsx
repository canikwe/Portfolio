import { stack } from '@/content/site'

export const Stack = () => (
  <section id="stack" className="stack">
    <div className="container">
      <h2 className="section-title section-title--center stack__title">Stack</h2>
      <div className="stack__grid">
        {stack.map(({ group, items }) => (
          <div key={group} className="stack__card">
            <h3>{group}</h3>
            <ul className="chips">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)
