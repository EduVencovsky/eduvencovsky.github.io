import Container from "@/app/_components/container";
import { Social } from "./social";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Eduardo Vencovsky
          </h3>
          <div className="lg:ml-auto flex flex-col lg:flex-row items-center">
            <Social />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
