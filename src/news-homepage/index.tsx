import Header from './components/layout/Header'
import Big from './assets/images/image-web-3-desktop.jpg'
import RetroPc from './assets/images/image-retro-pcs.jpg'
import Laptops from './assets/images/image-top-laptops.jpg'
import Gaming from './assets/images/image-gaming-growth.jpg'

const BiggestArticle = () => {
    return (
        <section>
            <article className="flex flex-col">
                <figure>
                    <img src={Big} alt="" />
                </figure>
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <h2>The Bright Future of Web 3.0?</h2>
                    <div className="flex flex-col justify-between">
                        <p>
                            We dive into the next evolution of the web that
                            claims to put the power of the platforms back into
                            the hands of the people. But is it really fulfilling
                            its promise?
                        </p>
                        <button>Read more</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

const NewArticles = () => {
    return (
        <section className="px-2 py-3 bg-indigo-900">
            <h1 className="text-xl font-semibold text-yellow-600">New</h1>
            <ul className="flex flex-col divide-y [&>li]:py-2 [&>li>h3]:text-lg [&>h3]:hover:text-yellow-600 [&>li>h3]:font-semibold">
                <li>
                    <h3>Hydrogen VS Electric Cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </li>
                <li>
                    <h3>Hydrogen VS Electric Cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </li>
                <li>
                    <h3>Hydrogen VS Electric Cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </li>
            </ul>
        </section>
    )
}

const RestArticles = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3">
            <article className="grid grid-cols-3 gap-3">
                <figure className="col-span-1">
                    <img src={RetroPc} alt="" />
                </figure>
                <div className="col-span-2 flex flex-col justify-between">
                    <span className="text-zinc-500 text-xl">01</span>
                    <h4 className="hover:text-orange-700 text-md font-semibold">
                        Reviving Retro PCs
                    </h4>
                    <p className="text-zinc-700">
                        What happens when old PCs are given modern upgrades?
                    </p>
                </div>
            </article>
            <article className="grid grid-cols-3 gap-3">
                <figure className="col-span-1">
                    <img src={RetroPc} alt="" />
                </figure>
                <div className="col-span-2 flex flex-col justify-between">
                    <span className="text-zinc-500 text-xl">01</span>
                    <h4 className="hover:text-orange-700 text-md font-semibold">
                        Reviving Retro PCs
                    </h4>
                    <p className="text-zinc-700">
                        What happens when old PCs are given modern upgrades?
                    </p>
                </div>
            </article>
            <article className="grid grid-cols-3 gap-3">
                <figure className="col-span-1">
                    <img src={RetroPc} alt="" />
                </figure>
                <div className="col-span-2 flex flex-col justify-between">
                    <span className="text-zinc-500 text-xl">01</span>
                    <h4 className="hover:text-orange-700 text-md font-semibold">
                        Reviving Retro PCs
                    </h4>
                    <p className="text-zinc-700">
                        What happens when old PCs are given modern upgrades?
                    </p>
                </div>
            </article>
        </section>
    )
}

const NewsHomepage = () => {
    return (
        <div className="container mx-auto py-12 text-black">
            <Header />
            <main className="flex flex-col gap-5">
                <div className="flex lg:flex-row gap-5 flex-col">
                    <BiggestArticle />
                    <NewArticles />
                </div>
                <RestArticles />
            </main>
        </div>
    )
}

export default NewsHomepage
