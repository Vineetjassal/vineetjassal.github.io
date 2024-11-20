import { BlogPosts } from 'app/components/posts'
import { LayoutGridDemo } from './components/LayoutGridDemo'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-5xl font-medium tracking-tighter">
        hi! im Vineet.🖐
      </h1>
      <p className="mb-4">
        {`i'm a web builder with an eye for aesthetic interfaces, using my creativity to make cool stuff.`}
        <br />
        <br />
        {`i'm the most fulfilled when im improving in multiple areas of my interests including technology, art, writing and fitness.`}
      </p>
      <LayoutGridDemo />
      <p className="mb-4 text-gray-400 italic lg:mt-[-140px] mt-[-50px]">
        {`"becoming a fullstack ape"`}
      </p>
      <p className="mb-4">
        {`i'm using social media as a means to share my passions, inspire, educate and create a community of like minded people.`}
      </p>
      <p className="mb-4">
        {`got no clue where i'm going. but i'm just focused on taking it`}
      </p>
      <p className=" font-semibold">
        {`one step @ a time.`}
      </p>
    </section>
  )
}
