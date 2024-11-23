import Container from "@/app/_components/container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b dark:bg-slate-800", {
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            Se inscreva na minha{" "}
            <a
              href={``}
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              newsletter
            </a>
            !
          </>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
