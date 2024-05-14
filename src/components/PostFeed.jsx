import Image from 'next/image';
import React from 'react';
import post1 from '@/images/photos/post1.png';
import post2 from '@/images/photos/post2.png';
import post3 from '@/images/photos/post3.png';
import post4 from '@/images/photos/post4.png';
import post5 from '@/images/photos/post5.png';
import post6 from '@/images/photos/post6.png';
import post7 from '@/images/photos/post7.png';

export function PostFeed() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="hidden md:block">
          <Image src={post1} alt="" 
            className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[45%]"
          />
          <Image src={post5} alt="" 
            className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[18%] mt-4"
          />
          <Image src={post4} alt="" 
            className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[21%] mt-4"
          />
          <Image src={post7} alt="" 
            className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[14%] mt-4"
          />
        </div>
        <div className="hidden md:block">
          <Image src={post3} alt="" 
            className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[19%]"
          />
          <Image src={post2} alt="" 
            className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[39%] mt-4"
          />
          <Image src={post6} alt="" 
            className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[40%] mt-4"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Image src={post1} alt="" 
          className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[45%] mt-4"
        />
        <Image src={post5} alt="" 
          className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[18%] mt-4"
        />
        <Image src={post4} alt="" 
          className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[21%] mt-4"
        />
        <Image src={post7} alt="" 
          className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[14%] mt-4"
        />
        <Image src={post3} alt="" 
          className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[19%] mt-4"
        />
        <Image src={post2} alt="" 
          className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[39%] mt-4"
        />
        <Image src={post6} alt="" 
          className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-full h-[40%] mt-4"
        />
      </div>
    </>
  )
}
