import Logo from './Logo'

const Header: React.FC = () => {
    return (
        <header className="flex flex-row lg:px-16 px-4 items-center lg:pt-12 pt-4 ">
            <div className="flex grow items-center">
                <Logo className="lg:w-36 w-24" />
            </div>
            <Menu links={links} />
        </header>
    )
}

type Link = { label: string; href: string }

const links: Link[] = [
    { label: 'Features', href: '' },
    { label: 'Team', href: '' },
    { label: 'Sign in', href: '' },
]

const Menu: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <ul className="flex flex-row lg:gap-12 gap-4">
            {links.map((link) => (
                <li key={link.label}>
                    <a
                        href={link.href}
                        className="hover:underline text-white font-thin hover:font-normal"
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Header
