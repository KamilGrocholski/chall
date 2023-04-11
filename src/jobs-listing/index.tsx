import clsx from 'clsx'
import useJobs, { Job } from './JobsContext'

const JobsListingPage = () => {
    const { jobs, filteredJobs } = useJobs()

    return (
        <div>
            <header></header>
            <main className='flex flex-col px-12'>
                {filteredJobs && filteredJobs.length
                    ? filteredJobs.map((job) => (
                          <JobView {...job} key={job.id} />
                      ))
                    : jobs.map((job) => <JobView {...job} key={job.id} />)}
            </main>
        </div>
    )
}

const JobView: React.FC<Job> = (job) => {
    const { filterActions } = useJobs()

    return (
        <div
            className={clsx(
                'border bg-white grid grid-cols-3 p-5 h-12 w-full',
                job.featured && 'border-l-teal-500'
            )}
        >
            <img src={job.logo} alt='' />

            <div className='flex flex-col'>
                <div className='flex flex-row gap-3'>
                    <span className='text-teal-500 font-semibold'>
                        {job.company}
                    </span>
                    {job.new ? (
                        <span className='rounded-2xl bg-teal-500 uppercase'>
                            new!
                        </span>
                    ) : null}
                    {job.featured ? (
                        <span className='rounded-2xl bg-teal-900 uppercase'>
                            featured
                        </span>
                    ) : null}
                </div>
            </div>

            <div>
                <span className='text-lg font-bold text-black'>
                    {job.position}
                </span>
            </div>

            <div className='flex flex-row gap-5 items-center'>
                <span>{job.postedAt}</span>
                <Dot />
                <span>{job.contract}</span>
                <Dot />
                <span>{job.location}</span>
            </div>

            <div className='flex flex-row gap-3 items-center'>
                <JobFilterButton
                    onClick={() => filterActions.level.set(job.level)}
                >
                    {job.level}
                </JobFilterButton>
                <JobFilterButton
                    onClick={() => filterActions.role.set(job.role)}
                >
                    {job.role}
                </JobFilterButton>
                {job.languages.map((language) => (
                    <JobFilterButton
                        onClick={() => filterActions.languages.add(language)}
                    >
                        {language}
                    </JobFilterButton>
                ))}
                {job.tools.map((tool) => (
                    <JobFilterButton
                        onClick={() => filterActions.tools.add(tool)}
                    >
                        {tool}
                    </JobFilterButton>
                ))}
            </div>
        </div>
    )
}

const JobFilterButton: React.FC<{
    children: React.ReactNode
    onClick: () => void
}> = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>
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
