import Link from "next/link";

const Button = ({
  text,
  href,
  mode,
  cln,
  onClick,
}: {
  text: string;
  href: string;
  cln?: string;
  mode?: number;
  onClick?: any;
}) => {
  if (mode === 1) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`px-6 py-3 rounded-3xl ${cln} duration-300 bg-primary-light text-center text-white hover:text-primary hover:bg-white border-primary border transition-all`}
      >
        {text}
      </Link>
    );
  }
  if (mode === 2) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`px-8 py-3 rounded-3xl ${cln} duration-300 bg-primary-light text-center text-primary hover:text-primary hover:bg-white hover:border hover:border-primary transition-all`}
      >
        {text}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-6 py-3 rounded-3xl ${cln} duration-300 bg-primary text-white text-center hover:text-primary hover:bg-white border-primary border transition-all`}
    >
      {text}
    </Link>
  );
};

export default Button;
