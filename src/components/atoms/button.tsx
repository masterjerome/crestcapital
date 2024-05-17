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
      <button
        onClick={onClick}
        className={`px-6 py-3 rounded-3xl ${cln}  bg-primary-light text-white hover:text-primary hover:bg-white border-primary border transition-all`}
      >
        <Link href={href}>{text}</Link>
      </button>
    );
  }
  if (mode === 2) {
    return (
      <button
        onClick={onClick}
        className={`px-8 py-3 rounded-3xl ${cln} bg-primary-light text-primary hover:text-primary hover:bg-white hover:border hover:border-primary transition-all`}
      >
        <Link href={href}>{text}</Link>
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-3xl ${cln} bg-primary text-white hover:text-primary hover:bg-white border-primary border transition-all`}
    >
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default Button;
