type Props = {
    href: string,
    children: string
}
function NavLink({href, children}: Props){
    const path = window.location.pathname; 
    return ( <li className= {path === href ? "active" : ""}>
        <a href= {href}> 
        { children } 
        </a>
        </li>)
}

function Header() {
    return <>
    <header className="navbar">
    <a href="/" className="logo">
        <img alt="logo-image" src="" />
    </a>
    <image />
    <ul>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/watchlist">Watchlist</NavLink>
        <NavLink href="/portfolio">Portfolio</NavLink>
    </ul>
   </header>
    </>
}



export default Header;

