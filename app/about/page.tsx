import Image from 'next/image';
import portrait from "../public/portrait.png";
import BlurFade from 'app/components/magicui/blur-fade';
import { DATA } from 'app/data/resume';
import { ResumeCard } from 'app/components/resume-card';

const BLUR_FADE_DELAY = 0.04;

export const metadata = {
      title: 'About',
      description: 'check out my latest work.',
}

export default function about() {
      return (
            <>
            <section className="mt-10">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-5">
                <div className="max-w-2xl px-2.5 lg:max-w-none">
                  <Image
                    src={portrait}
                    alt=""
                    width={500}
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  />
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  i’m vineet jassal, software developer.
                </h1>
                <div className="mt-6 space-y-7 text-md text-zinc-600 dark:text-zinc-400">
                  <p>
                    hi, i'm vineet jassal—call me vinny. i'm close to graduating with a degree in mathematics and computer science. i've been coding for years and love open-source and tech communities.
                  </p>
                  <p>
                    technology is a huge part of my life, and i'm always excited to connect with others in the field. it's amazing to learn from and contribute to a community that values collaboration and creativity.
                  </p>
                  <p>
                    i'm looking forward to seeing where this journey in tech leads me.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-4xl font-semibold">education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

          </>
      );
}
