import data from './data.json'
import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from 'react'

export type Job = {
    id: number
    company: string
    logo: string
    new: boolean
    featured: boolean
    position: string
    role: string
    level: string
    postedAt: string
    contract: string
    location: string
    languages: string[]
    tools: string[]
}

export type JobsFilter<
    T = Pick<Job, 'role' | 'level' | 'languages' | 'tools'>
> = {
    [Key in keyof T]: T[Key] extends Array<any> ? T[Key] : T[Key] | null
}

type JobsContextType = {
    jobs: Job[]
    filteredJobs: Job[] | null
    filter: JobsFilter
    resetFilter(): void
    filterActions: {
        languages: {
            add(language: string): void
            remove(langueage: string): void
        }
        tools: {
            add(tool: string): void
            remove(tool: string): void
        }
        level: {
            set(level: string): void
            clear(): void
        }
        role: {
            set(level: string): void
            clear(): void
        }
    }
}

export const JobsContext = createContext<JobsContextType>({} as JobsContextType)

export const JobsProvider: React.FC<{ children: JSX.Element }> = ({
    children,
}) => {
    const [jobs, setJobs] = useState<Job[]>([])
    const [filteredJobs, setFilteredJobs] = useState<Job[] | null>(null)
    const [filter, setFilter] = useReducer<
        (prev: JobsFilter, update: Partial<JobsFilter>) => JobsFilter,
        JobsFilter
    >(
        (prev, update) => ({
            ...prev,
            ...update,
        }),
        createInitialJobsFilterState(),
        createInitialJobsFilterState
    )

    useEffect(() => {
        ;(async () => {
            const result = await getJobs()
            if (result) {
                setJobs(result.data)
            } else {
                console.error('ok')
            }
        })()
    }, [])

    useEffect(() => {
        applyFilter()
    }, [filter, jobs])

    function applyFilter(): void {
        const newFilteredJobs: Job[] = []

        jobs.forEach((job) => {
            if (filter.level && filter.level === job.level) {
                newFilteredJobs.push(job)
                return
            }
            if (filter.role && filter.role === job.role) {
                newFilteredJobs.push(job)
                return
            }
            if (
                filter.languages.length &&
                job.languages.some(filter.languages.includes)
            ) {
                newFilteredJobs.push(job)
                return
            }
            if (filter.tools.length && job.tools.some(filter.tools.includes)) {
                newFilteredJobs.push(job)
                return
            }
        })

        setFilteredJobs(newFilteredJobs)
    }

    const filterActions = {
        languages: {
            add(language: string): void {
                const newLanguages = new Set(filter.languages)
                newLanguages.add(language)
                setFilter({
                    languages: [...newLanguages],
                })
            },
            remove(language: string): void {
                const newLanguages = new Set(filter.languages)
                newLanguages.delete(language)
                setFilter({
                    languages: [...newLanguages],
                })
            },
        },
        tools: {
            add(tool: string): void {
                const newTools = new Set(filter.tools)
                newTools.add(tool)
                setFilter({
                    tools: [...newTools],
                })
            },
            remove(tool: string): void {
                const newTools = new Set(filter.tools)
                newTools.delete(tool)
                setFilter({
                    tools: [...newTools],
                })
            },
        },
        role: {
            set(role: string): void {
                setFilter({
                    role,
                })
            },
            clear() {
                setFilter({
                    role: null,
                })
            },
        },
        level: {
            set(level: string): void {
                setFilter({
                    level,
                })
            },
            clear(): void {
                setFilter({
                    level: null,
                })
            },
        },
    }

    function resetFilter() {
        setFilter(createInitialJobsFilterState())
    }

    return (
        <JobsContext.Provider
            value={{
                resetFilter,
                filter,
                jobs,
                filterActions,
                filteredJobs,
            }}
        >
            {children}
        </JobsContext.Provider>
    )
}

function createInitialJobsFilterState(): JobsFilter {
    return {
        languages: [],
        level: null,
        role: null,
        tools: [],
    }
}

type Result<T> = {
    data: T
} | null

async function getJobs(): Promise<Result<Job[]>> {
    try {
        return {
            data: data as unknown as Job[],
        }
    } catch (error) {
        return null
    }
}

export default function useJobs() {
    const jobsContext = useContext(JobsContext)

    return jobsContext
}
