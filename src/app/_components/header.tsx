import Link from "next/link";
import { Social } from "./social";

const Header = () => {
  return (
    <div className="tracking-tight md:tracking-tighter leading-tight mb-8 mt-8 flex items-center">
      <h2 className="text-2xl font-bold">
        <Link href="/" className="hover:underline">
          Eduardo Vencovsky
        </Link>
      </h2>
      <div className="flex ml-auto">
        <Social />
      </div>
    </div>
  );
};

export default Header;
