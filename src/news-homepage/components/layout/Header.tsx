import LogoSvg from '../../assets/images/logo.svg'

type Link = {
    href: string
    label: string
}

const LINKS: Link[] = [
    { href: 'eqwewq', label: 'T' },
    { href: 'eqwewqeqeq', label: 'eqwjeqwke' },
    { href: 'qweqweqwqwnekwqen', label: 'wejqwe' },
]

const Logo = () => {
    return <img src={LogoSvg} alt="" />
}

const Navigation = () => {
    return (
        <nav>
            <ul className="flex flex-row space-x-5 items-center">
                {LINKS.map((link) => (
                    <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

const Header = () => {
    return (
        <header className="w-full h-24 flex flex-row items-center">
            <div className="flex flex-row grow">
                <Logo />
            </div>
            <Navigation />
        </header>
    )
}

export default Header
