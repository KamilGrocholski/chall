import Gaming from './assets/images/image-gaming-growth.jpg'
import RetroPc from './assets/images/image-retro-pcs.jpg'
import Laptops from './assets/images/image-top-laptops.jpg'
import Big from './assets/images/image-web-3-desktop.jpg'
import Header from './components/layout/Header'

type NewArticle = {
    title: string
    description: string
    href: string
}

const newArticles: NewArticle[] = [
    {
        title: 'Hydrogen VS Electric Cars',
        description: 'Will hydrogen-fueled cars ever catch up to EVs?',
        href: '',
    },
    {
        title: 'The Downsides of AI Artistry',
        description:
            'What are the possible adverse effects of on-demand AI image generation?',
        href: '',
    },
    {
        title: 'Is VC Funding Drying Up?',
        description:
            'Private founding by VC firms is down  50% YOY. We take a look at what that means.',
        href: '',
    },
]

const NewArticlesSection = () => {
    return (
        <section className="px-4 py-8 flex flex-col justify-evenly bg-np-primary">
            <h1 className="text-3xl font-semibold text-np-accent">New</h1>
            <ul className="flex flex-col divide-y space-y-5">
                {newArticles.map((article) => (
                    <li key={article.title} className="py-5">
                        <a
                            href={article.href}
                            className="hover:text-np-accent text-white text-xl font-semibold"
                        >
                            {article.title}
                        </a>
                        <p className="text-gray-400">{article.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

const BigSection = () => {
    return (
        <section className="flex flex-col justify-between gap-1 md:w-[90%]">
            <div className="md:flex-1">
                <img src={Big} alt="" />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 py-3">
                <div>
                    <h1 className="text-5xl font-bold text-np-primary">
                        The Bright Future of Web 3.0?
                    </h1>
                </div>
                <div className="flex flex-1 flex-col gap-3 justify-evenly">
                    <p className="text-np-primary">
                        We dive into the next evolution of the web that claims
                        to put the power of the platforms back into the hands of
                        the people. But is it really fulfilling its promise?
                    </p>
                    <button className="md:px-8 px-12 py-3 bg-np-secondary uppercase hover:bg-np-primary text-white tracking-wider w-fit">
                        READ MORE
                    </button>
                </div>
            </div>
        </section>
    )
}

type RestArticle = {
    image: string
} & NewArticle

const restArticles: RestArticle[] = [
    {
        title: 'Reviving Retro PCs',
        description: 'What happends when old PCs are given modern upgrades?',
        href: '',
        image: RetroPc,
    },
    {
        title: 'Top 10 Laptops of 2022',
        description: 'Out best picks for various needs and budgets.',
        href: '',
        image: Laptops,
    },
    {
        title: 'The Growth of Gaming',
        description: 'How the pandemic has sparked fresh opportunities.',
        href: '',
        image: Gaming,
    },
]

const RestArticlesSection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-16">
            {restArticles.map((article, articleIndex) => (
                <article className="grid grid-cols-3 gap-3">
                    <div className="col-span-1">
                        <img src={article.image} alt="" className="h-36" />
                    </div>
                    <div className="flex flex-col justify-between col-span-2">
                        <span className="text-gray-400 text-3xl">
                            0{articleIndex + 1}
                        </span>
                        <div>
                            <h3 className="text-xl pb-1 text-np-primay font-semibold">
                                <a
                                    href={article.href}
                                    className="hover:text-np-accent text-np-primary"
                                >
                                    {article.title}
                                </a>
                            </h3>
                            <p className="text-np-primary text-sm">
                                {article.description}
                            </p>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
}

const NewsHomepage = () => {
    return (
        <div className="container mx-auto px-4">
            <Header />
            <main>
                <div className="flex md:flex-row flex-col gap-5 h-fit">
                    <BigSection />
                    <NewArticlesSection />
                </div>
                <RestArticlesSection />
            </main>
        </div>
    )
}

export default NewsHomepage
