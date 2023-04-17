import clsx from 'clsx'
import useJobs, { Job } from './JobsContext'
import { FaTimes } from 'react-icons/fa'

const JobsListingPage = () => {
    const { jobs, filteredJobs } = useJobs()

    return (
        <div className="relative w-full bg-jl-accent flex justify-center">
            <header className="w-full bg-jl-primary lg:bg-jlBgDesktop bg-jlBgMobile h-[155px]"></header>
            <main className="absolute top-12 flex flex-col lg:gap-5 gap-24 py-16 px-12 container mx-auto">
                <JobsFilter />
                <div className="flex flex-col lg:gap-6 gap-20">
                    {filteredJobs.length
                        ? filteredJobs.map((job) => (
                              <JobView {...job} key={job.id} />
                          ))
                        : jobs.map((job) => <JobView {...job} key={job.id} />)}
                </div>
            </main>
        </div>
    )
}

const JobsFilter: React.FC = () => {
    const { filter, filterActions, resetFilter, isFilterEmpty } = useJobs()

    if (isFilterEmpty()) {
        return null
    }

    return (
        <div className="shadow-xl shadow-jl-primary/20 bg-white right-0 left-0 flex flex-row p-4 rounded-lg">
            <div className="flex grow flex-row flex-wrap gap-5">
                {filter.level.map((level) => (
                    <JobFilterRemoveButton
                        key={level}
                        onClick={() => filterActions.level.remove(level)}
                    >
                        {level}
                    </JobFilterRemoveButton>
                ))}
                {filter.role.map((role) => (
                    <JobFilterRemoveButton
                        key={role}
                        onClick={() => filterActions.role.remove(role)}
                    >
                        {role}
                    </JobFilterRemoveButton>
                ))}
                {filter.languages.map((language) => (
                    <JobFilterRemoveButton
                        key={language}
                        onClick={() => filterActions.languages.remove(language)}
                    >
                        {language}
                    </JobFilterRemoveButton>
                ))}
                {filter.tools.map((tool) => (
                    <JobFilterRemoveButton
                        key={tool}
                        onClick={() => filterActions.tools.remove(tool)}
                    >
                        {tool}
                    </JobFilterRemoveButton>
                ))}
            </div>

            <button
                onClick={resetFilter}
                className="text-jl-primary hover:underline font-semibold"
            >
                Clear
            </button>
        </div>
    )
}

// https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
function getImageUrl(path: string) {
    return new URL(path, import.meta.url).href
}

const JobView: React.FC<Job> = (job) => {
    const { filterActions } = useJobs()

    const logoSrc = getImageUrl(job.logo)

    return (
        <div
            className={clsx(
                'relative border-l-4 bg-white grid lg:grid-cols-2 grid-cols-1 lg:divide-none divide-y p-5 w-full rounded-lg shadow-xl shadow-jl-primary/20',
                job.featured ? 'border-l-jl-primary' : 'border-l-transparent',
            )}
        >
            <div className="flex flex-row gap-5 lg:pt-0 pt-10">
                <div className="lg:static absolute -top-12 left-5">
                    <img src={logoSrc} alt="" className="h-24 w-24" />
                </div>

                <div className="flex flex-col text-white font-bold gap-2">
                    <div className="flex flex-row gap-3 flex-wrap">
                        <span className="text-jl-primary">{job.company}</span>
                        {job.new ? (
                            <span className="rounded-2xl bg-jl-primary uppercase px-2 py-0.25">
                                new!
                            </span>
                        ) : null}
                        {job.featured ? (
                            <span className="rounded-2xl bg-jl-secondary uppercase px-2 py-0.25">
                                featured
                            </span>
                        ) : null}
                    </div>

                    <div>
                        <span className="text-lg font-bold text-black">
                            {job.position}
                        </span>
                    </div>

                    <div className="flex flex-row gap-5 items-center text-gray-500 font-medium flex-wrap">
                        <span>{job.postedAt}</span>
                        <Dot />
                        <span>{job.contract}</span>
                        <Dot />
                        <span>{job.location}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-3 items-center flex-wrap lg:justify-end justify-sttart lg:py-0 py-5">
                <JobFilterAddButton
                    onClick={() => filterActions.level.set(job.level)}
                >
                    {job.level}
                </JobFilterAddButton>
                <JobFilterAddButton
                    onClick={() => filterActions.role.set(job.role)}
                >
                    {job.role}
                </JobFilterAddButton>
                {job.languages.map((language) => (
                    <JobFilterAddButton
                        key={language}
                        onClick={() => filterActions.languages.add(language)}
                    >
                        {language}
                    </JobFilterAddButton>
                ))}
                {job.tools.map((tool) => (
                    <JobFilterAddButton
                        key={tool}
                        onClick={() => filterActions.tools.add(tool)}
                    >
                        {tool}
                    </JobFilterAddButton>
                ))}
            </div>
        </div>
    )
}

const JobFilterRemoveButton: React.FC<{
    children: React.ReactNode
    onClick: () => void
}> = ({ children, onClick }) => {
    return (
        <div className="flex itmes-center flex-row rounded">
            <span className="bg-jl-accent rounded text-jl-primary font-bold px-2 py-1 flex items-center">
                {children}
            </span>
            <button
                onClick={onClick}
                className="bg-jl-primary hover:bg-jl-secondary text-white flex items-center font-bold text-xl p-1 rounded-r"
            >
                <FaTimes />
            </button>
        </div>
    )
}

const JobFilterAddButton: React.FC<{
    children: React.ReactNode
    onClick: () => void
}> = ({ children, onClick }) => {
    return (
        <button
            className="bg-jl-accent hover:bg-jl-primary rounded hover:text-white text-jl-primary font-bold px-2 py-1"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

const Dot: React.FC<{ size?: keyof typeof DOT_SIZE }> = ({ size = 'md' }) => {
    return (
        <div className={clsx('rounded-full bg-gray-500', DOT_SIZE[size])}></div>
    )
}

const DOT_SIZE = {
    md: 'h-2 w-2',
} as const

export default JobsListingPage
