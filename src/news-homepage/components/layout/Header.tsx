import { useState } from 'react'
import LogoSvg from '../../assets/images/logo.svg'
import MenuCloseIcon from '../../assets/images/icon-menu-close.svg'
import MenuOpenIcon from '../../assets/images/icon-menu.svg'

type Link = {
    href: string
    label: string
}

const LINKS: Link[] = [
    { href: 'eqwewq', label: 'Home' },
    { href: 'eqwewqeqeq', label: 'New' },
    { href: 'qweqweqwqwnekwqen', label: 'Popular' },
    { href: 'qweqweqwqwnekwqen', label: 'Trending' },
    { href: 'qweqweqwqwnekwqen', label: 'Categories' },
]

const Logo = () => {
    return <img src={LogoSvg} alt="" />
}

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <nav>
            <button
                className="md:hidden static"
                onClick={() => setIsMenuOpen(true)}
            >
                <img src={MenuOpenIcon} />
            </button>
            <Modal show={isMenuOpen} close={() => setIsMenuOpen(false)} />
            <ul className="hidden flex-row space-x-5 items-center md:flex">
                {LINKS.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className="hover:text-np-secondary text-np-primary"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

const Modal: React.FC<{ show: boolean; close(): void }> = ({ show, close }) => {
    return (
        <>
            {show ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed top-0 bottom-0 right-0 z-50 outline-none focus:outline-none">
                        <div className="relative my-6 max-w-3xl">
                            {/*content*/}
                            <div className="py-8 px-5 shadow-lg min-h-screen h-full flex w-64 justify-end relative flex-col bg-white">
                                <button
                                    onClick={close}
                                    className="w-full flex justify-end mb-16"
                                >
                                    <img src={MenuCloseIcon} />
                                </button>
                                <div className="relative flex-auto">
                                    <ul className="flex flex-col space-y-5">
                                        {LINKS.map((link) => (
                                            <li
                                                key={link.label}
                                                className="text-xl capitalize"
                                            >
                                                <a href={link.href}>
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

const Header = () => {
    return (
        <header className="w-full md:mt-12 mt-3 h-24 flex flex-row items-center">
            <div className="flex flex-row grow">
                <Logo />
            </div>
            <Navigation />
        </header>
    )
}

export default Header
