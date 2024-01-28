import React from 'react';
import Link from "next/dist/client/link";
import Instagram from "../../nextjs-portfolio-website-starter/public/instagram.svg";
import Twitter from "../../nextjs-portfolio-website-starter/public/twitter.svg";
import Linkedin from "../../nextjs-portfolio-website-starter/public/linkedin.svg";
import Github from "../../nextjs-portfolio-website-starter/public/github.svg";
import SocialButton from "../components/SocialButton";

const Footer: React.FC = () => {
  return (
    <section className="grid grid-cols-1 mb-4 font-sans">
      <div className="bg-zinc-200 h-[32rem] rounded-3xl p-10 flex flex-col bg-[url('/gradient-bg.jpg')] bg-cover md:h-[20rem]">
        <h1 className="text-5xl font-bold">
          Want to Work Together?
        </h1>
        <p className="flex-1 text-xl mt-4 font-semibold">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <a href="mailto:vineetjassal35@gmail.com" className="flex-1 text-xl mb-16">vineetjassal35@gmail.com</a>
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
          <Link className="bg-black text-center text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto" href={"mailto:vineetjassal35@gmail.com"}>
            Contact me
          </Link>
          <div className="flex items-center gap-4">
            <Link href={"https://www.linkedin.com/in/vineetjassal/"} target="_blank">
              <SocialButton bgColor="linkedin">
                <Linkedin className="w-5 h-5" />
              </SocialButton>
            </Link> 
            <Link href={"https://twitter.com/vineet_ai"} target="_blank">
              <SocialButton bgColor="twitter">
                <Twitter className="w-5 h-5" />
              </SocialButton>
            </Link>
            <Link href={"https://github.com/vineetjassal"} target="_blank">
              <SocialButton>
                <Github className="w-5 h-5" />
              </SocialButton>
            </Link>
            <Link href={"https://www.instagram.com/vineetjassal/"} target="_blank">
              <SocialButton  bgColor="instagram">
                <Instagram className="w-5 h-5" />
              </SocialButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;