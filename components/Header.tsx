import Image from "next/image";
import Link from "next/link";
import { Github } from "./NavComponent";

export default function Header({ name }: { name: string }) {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/writingIcon.png"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          {name}
        </h1>
      </Link>
      <a
        href="https://github.com/doniaskima/Prosemaster"
        target="_blank"
        rel="noreferrer"
      >
       <Github 
        className="github-ui"
       />
      </a>
    </header>
  );
}