import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  href: string;
  children: string;
}

function NavLink({ href, children }: NavLinkProps) {
  const location = useLocation();
  return (
    <div className="font-bold my-7 md:my-0 md:ml-8">
      <li className={location.pathname === href ? "active" : ""}>
        <Link
          to={href}
          className="block text-white-900 rounded  hover:bg-transparent dark:hover:text-white
                     hover:text-blue-700 dark:hover:text-sky-500  
                     dark:hover:bg-transparent"
        >
          {children}
        </Link>
      </li>
    </div>
  );
}

export default NavLink;
