import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface CustomLinkProps extends LinkProps {
  title: string;
  className?: string;
}

interface CustomLinkPropsMobile extends LinkProps {
  title: string;
  className?: string;
  toggle: () => void;
}
export function CustomLink({ title, href, className }: CustomLinkProps) {
  const router = useRouter();

  if (router.asPath === href) {
    console.log(href);
  }

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
}

export function CustomMobileLink({
  title,
  href,
  className,
  toggle,
}: CustomLinkPropsMobile) {
  const router = useRouter();

  if (router.asPath === href) {
    console.log(href);
  }
  function handleClick() {
    toggle();
    router.push(href);
  }
  return (
    <Link
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2 `}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-light absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}
      >
        &nbsp;
      </span>
    </Link>
  );
}
