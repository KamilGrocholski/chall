import { useState } from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import Header from './components/Header'
import Icons from './components/Icons'
import Logo from './components/Logo'
import FyloIntro from './images/illustration-intro.png'
import FyloStayProductive from './images/illustration-stay-productive.png'
import Profile1 from './images/profile-1.jpg'
import Profile2 from './images/profile-2.jpg'
import Profile3 from './images/profile-3.jpg'

const FyloLandingPage = () => {
    return (
        <div className="h-screen w-full overflow-y-scroll bg-fylo-bg prose-headings text-white ">
            <Header />
            <main className="flex flex-col relative items-center space-y-32 mt-5 px-8 container mx-auto pb-96 pt-24">
                <section className="flex flex-col items-center space-y-5">
                    <figure>
                        <img src={FyloIntro} alt="" />
                    </figure>
                    <h1 className="md:text-4xl text-2xl text-center leading-relaxed font-semibold">
                        All your files in one secure location, accessible
                        anywhere.
                    </h1>
                    <p className="text-center">
                        Fylo stores all your most important files in one secure
                        location. Access them wherever you need, share and
                        collaborate with friends family, and co-workers.
                    </p>
                    <button className="rounded-3xl py-2.5 px-16 bg-fylo-primary hover:bg-fylo-active ">
                        Get Started
                    </button>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div className="grid grid-cols-1 gap-2 items-center text-center">
                        <img
                            src={Icons['AccessAnywhere']}
                            alt=""
                            className="w-16 mx-auto mb-4"
                        />
                        <h2 className="font-semibold text-lg">
                            Access your files, anywhere
                        </h2>
                        <p className="break-words">
                            The ability to use a smartphone, tablet or computer
                            to access your account means your files follow you
                            everywhere.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2 items-center text-center">
                        <img
                            src={Icons['Security']}
                            alt=""
                            className="w-16 mx-auto mb-4"
                        />
                        <h2 className="font-semibold text-lg">
                            Security you can trust
                        </h2>
                        <p className="break-words">
                            2-factor authentication and user-controlled
                            encryption are just a couple of the security
                            features we allow to help secure your files.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2 items-center text-center">
                        <img
                            src={Icons['Collaboration']}
                            alt=""
                            className="w-16 mx-auto mb-4"
                        />
                        <h2 className="font-semibold text-lg">
                            Real-time collaboration
                        </h2>
                        <p className="break-words">
                            Securely share files and folders with friends,
                            family and colleagues for live collaboration. No
                            email attachments required.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2 items-center text-center">
                        <img
                            src={Icons['AnyFile']}
                            alt=""
                            className="w-16 mx-auto mb-4"
                        />
                        <h2 className="font-semibold text-lg">
                            Store any type of file
                        </h2>
                        <p className="break-words">
                            Whether you're sharing holidays photos or work
                            documents, Fylo has your covered allowing for all
                            file types to be securely stored and shared.
                        </p>
                    </div>
                </section>

                <section className="flex md:flex-row flex-col md:gap-0 gap-12 items-center">
                    <figure>
                        <img src={FyloStayProductive} alt="" />
                    </figure>
                    <div className="flex flex-col space-y-5 font-light">
                        <h1 className="text-2xl md:text-4xl font-semibold">
                            Stay productive, wherever you are
                        </h1>
                        <p>
                            Never let location be an issue when accessing your
                            files. Fylo has you covered for all of your file
                            storage needs.
                        </p>
                        <p>
                            Securely share files and folders with friends,
                            family and colleagues for live collaboration. No
                            email attachments required.
                        </p>
                        <a
                            href={''}
                            className="text-[#71e7e0] underline-offset-8 underline flex items-end gap-1.5"
                        >
                            <span>See how Fylo works</span>
                            <img
                                src={Icons['Arrow']}
                                alt=""
                                className="w-fit h-fit"
                            />
                        </a>
                    </div>
                </section>

                <section className="relative grid md:grid-cols-3 grid-cols-1 gap-5">
                    <Card
                        person={{
                            name: 'Satish Patel',
                            organization: 'Founder & CEO. Huddle',
                            icon: Profile1,
                        }}
                        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well oiled collaboration machine."
                    />
                    <Card
                        person={{
                            name: 'Satish Patel',
                            organization: 'Founder & CEO. Huddle',
                            icon: Profile2,
                        }}
                        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well oiled collaboration machine."
                    />
                    <Card
                        person={{
                            name: 'Satish Patel',
                            organization: 'Founder & CEO. Huddle',
                            icon: Profile3,
                        }}
                        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well oiled collaboration machine."
                    />
                </section>

                <SignUpForm />
            </main>

            <footer className="bg-[#0c1524] flex flex-col w-full py-56 font-light">
                <div className="flex flex-col container mx-auto justify-center px-8">
                    <div className="w-48 mb-12">
                        <Logo />
                    </div>

                    <div className="grid lg:grid-cols-4 gap-24 w-full">
                        <div className="flex flex-row gap-8 items">
                            <img
                                src={Icons['Location']}
                                alt=""
                                className="h-4 mt-2"
                            />
                            <span>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatibus ad at voluptate
                                itaque nam atque facere similique adipisci illum
                                quaerat ex
                            </span>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8 items-center">
                                <img
                                    src={Icons['Phone']}
                                    alt=""
                                    className="h-4"
                                />
                                <span>+1-543-123-4567</span>
                            </div>

                            <div className="flex flex-row gap-8 items-center">
                                <img
                                    src={Icons['Email']}
                                    alt=""
                                    className="h-4"
                                />
                                <span>eample@fylo.com</span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a href="">About Us</a>
                                </li>
                                <li>
                                    <a href="">Jobs</a>
                                </li>
                                <li>
                                    <a href="">Press</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a href="">Contact Us</a>
                                </li>
                                <li>
                                    <a href="">Terms</a>
                                </li>
                                <li>
                                    <a href="">Privacy</a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-row gap-2 h-fit  justify-center">
                            <MediaLink href="">
                                <FaFacebookF />
                            </MediaLink>
                            <MediaLink href="">
                                <AiOutlineTwitter />
                            </MediaLink>
                            <MediaLink href="">
                                <AiOutlineInstagram />
                            </MediaLink>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

const MediaLink: React.FC<{
    href: string
    children: React.ReactNode
}> = ({ href, children }) => {
    return (
        <a
            href={href}
            className="text-white border border-white rounded-full p-2"
        >
            {children}
        </a>
    )
}

type CardProps = {
    text: string
    person: {
        name: string
        organization: string
        icon: string
    }
}

const Card: React.FC<CardProps> = ({ text, person }) => {
    return (
        <article className="flex flex-col gap-5 font-light bg-[#21293c] p-5 rounded-md">
            <p>{text}</p>
            <div className="flex gap-2">
                <img
                    src={person.icon}
                    alt="person-image"
                    className="rounded-full h-9 w-9"
                />
                <div className="text-xs flex flex-col justify-between">
                    <p className="font-semibold">{person.name}</p>
                    <p>{person.organization}</p>
                </div>
            </div>
        </article>
    )
}

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <form
            className="absolute mx-8 -bottom-36 p-12 bg-[#1c2230] border border-black/10 shadow-black/50 shadow-lg flex flex-col gap-8 items-center text-center rounded-lg"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl md:text-4xl font-semibold">
                Get early access today
            </h1>
            <p className="font-light">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
            </p>
            <div className="flex md:flex-row flex-col justify-between w-full gap-8">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    inputMode="email"
                    className="rounded-3xl text-black placeholder:text-gray-400 background-white flex-grow px-10 py-2.5"
                    placeholder="email@example.com"
                />
                <button className="rounded-3xl py-2.5 px-8 bg-fylo-primary hover:bg-fylo-active ">
                    Get Started For Free
                </button>
            </div>
        </form>
    )
}

export default FyloLandingPage
