import SectionLabel from '../components/SectionLabel'
import Tag from '../components/Tag'
import Polaroid from '../components/Polaroid'
import { interests, polaroids } from '../data/beyond'

export default function Beyond() {
  return (
    <section
      id="beyond"
      className="flex flex-col gap-10 border-t border-line px-6 py-16 md:px-14"
    >
      <SectionLabel>BEYOND CODE</SectionLabel>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h2 className="font-serif text-4xl leading-tight font-medium text-ink md:text-5xl">
            More than just code.
          </h2>
          <p className="max-w-md text-soft">
            A little bit of everything that makes me, me.
          </p>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {polaroids.map(({ label, image, rotate }) => (
            <Polaroid key={label} label={label} image={image} className={rotate} />
          ))}
        </div>
      </div>
    </section>
  )
}