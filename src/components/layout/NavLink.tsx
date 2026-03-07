import Link from "next/link";

interface NavLinkProps {
  name: string;
  href: string;
}

export default function NavLink({ name, href }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-black font-medium"
    >
      {name}
    </Link>
  );
}