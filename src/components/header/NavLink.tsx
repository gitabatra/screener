interface NavLinkProps {
  href: string;
  children: string; //TODO Rename to something like title, or name
}

function NavLink({ href, children }: NavLinkProps) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href}>{children}</a>
    </li>
  );
}

export default NavLink;
