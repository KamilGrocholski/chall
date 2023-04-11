import data from "./data.json";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export type Job = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export type JobsFilter<
  T = Pick<Job, "role" | "level" | "languages" | "tools">
> = {
  [Key in keyof T]: T[Key] extends Array<any> ? T[Key] : T[Key][];
};

type JobsContextType = {
  jobs: Job[];
  filteredJobs: Job[];
  filter: JobsFilter;
  resetFilter(): void;
  filterActions: {
    languages: {
      add(language: string): void;
      remove(langueage: string): void;
    };
    tools: {
      add(tool: string): void;
      remove(tool: string): void;
    };
    level: {
      set(level: string): void;
      remove(level: string): void;
    };
    role: {
      set(role: string): void;
      remove(role: string): void;
    };
  };
};

export const JobsContext = createContext<JobsContextType>(
  {} as JobsContextType
);

export const JobsProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
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
  );

  useEffect(() => {
    (async () => {
      const result = await getJobs();
      if (result) {
        setJobs(result.data);
      } else {
        console.error("ok");
      }
    })();
  }, []);

  useEffect(() => {
    applyFilter();
  }, [filter, jobs]);

  function applyFilter(): void {
    const newFilteredJobs: Job[] = [];

    jobs.forEach((job) => {
      if (filter.role.length && filter.role.some((role) => role === job.role)) {
        newFilteredJobs.push(job);
        return;
      }
      if (
        filter.level.length &&
        filter.level.some((level) => level === job.level)
      ) {
        newFilteredJobs.push(job);
        return;
      }
      if (
        filter.languages.length &&
        job.languages.some((language) =>
          filter.languages.some((filterLanguage) => language === filterLanguage)
        )
      ) {
        newFilteredJobs.push(job);
        return;
      }
      if (
        filter.tools.length &&
        job.tools.some((tool) =>
          filter.tools.some((filterTool) => tool === filterTool)
        )
      ) {
        newFilteredJobs.push(job);
        return;
      }
    });

    setFilteredJobs(newFilteredJobs);
  }

  const filterActions = {
    languages: {
      add(language: string): void {
        const newLanguages = new Set(filter.languages);
        newLanguages.add(language);
        setFilter({
          languages: [...newLanguages],
        });
      },
      remove(language: string): void {
        const newLanguages = new Set(filter.languages);
        newLanguages.delete(language);
        setFilter({
          languages: [...newLanguages],
        });
      },
    },
    tools: {
      add(tool: string): void {
        const newTools = new Set(filter.tools);
        newTools.add(tool);
        setFilter({
          tools: [...newTools],
        });
      },
      remove(tool: string): void {
        const newTools = new Set(filter.tools);
        newTools.delete(tool);
        setFilter({
          tools: [...newTools],
        });
      },
    },
    role: {
      set(role: string): void {
        const newRole = new Set(filter.role);
        newRole.add(role);
        setFilter({
          role: [...newRole],
        });
      },
      remove(role: string) {
        const newRole = new Set(filter.role);
        newRole.delete(role);
        setFilter({
          role: [...newRole],
        });
      },
    },
    level: {
      set(level: string): void {
        const newLevel = new Set(filter.level);
        newLevel.add(level);
        setFilter({
          level: [...newLevel],
        });
      },
      remove(level: string) {
        const newLevel = new Set(filter.level);
        newLevel.delete(level);
        setFilter({
          level: [...newLevel],
        });
      },
    },
  };

  function resetFilter() {
    setFilter(createInitialJobsFilterState());
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
  );
};

function createInitialJobsFilterState(): JobsFilter {
  return {
    languages: [],
    level: [],
    role: [],
    tools: [],
  };
}

type Result<T> = {
  data: T;
} | null;

async function getJobs(): Promise<Result<Job[]>> {
  try {
    return {
      data: data as unknown as Job[],
    };
  } catch (error) {
    return null;
  }
}

export default function useJobs() {
  const jobsContext = useContext(JobsContext);

  return jobsContext;
}
