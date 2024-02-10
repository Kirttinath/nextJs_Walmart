import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex bg-walmart px-10 py-7 space-x-5">
      <Link href="/" className="">
        <Image
          src="https://links.papareact.com/yur"
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>
      <form className="flex items-center bg-white rounded-full w-full flex-1">
        <input
          type="text"
          placeholder="Search Everything..."
          className="flex-1 px-5  rounded-l-full outline-none placeholder:text-sm"
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-3 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>
    </header>
  );
};

export default Header;
