import { Link } from "react-router-dom";

const SOLUTIONS_LINKS = [
  { path: "/fylo-landing-page", label: "Fylo landing page" },
  { path: "/jobs-listing", label: "Jobs listing" },
  { path: "/launch-countdown-timer", label: "Launch countdown timer" },
  {
    path: "/interactive-card-details-form",
    label: "Interactive card details form",
  },
  { path: "/multi-step-form", label: "Multi step form" },
  { path: "/pricing-component", label: "Pricing component" },
  { path: "/password-generator", label: "Password generator" },
  { path: "/pomodoro", label: "Pomodoro" },
  { path: "/news-homepage", label: "News homepage" },
] as const;

const EXTERNAL_LINKS = {
  challenges: "https://www.frontendmentor.io/challenges",
  repo: "https://github.com/KamilGrocholski/chall",
  github: "https://github.com/KamilGrocholski",
} as const;

const Home = () => {
  return (
    <div className="w-full min-h-screen overflow-y-scroll bg-zinc-800 text-white">
      <header className="flex items-center h-full flex-col px-3 py-5">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-4xl font-semibold text-center">
            Frontend mentor challenges
          </h1>
          <p className="text-center">
            Solutions for
            <a
              href={EXTERNAL_LINKS.challenges}
              className="underline text-pink-600 transition-all duration-200 ease-in-out mx-1"
            >
              Frontend mentor challenges
            </a>
            created by
            <a
              href={EXTERNAL_LINKS.github}
              className="underline text-pink-600 transition-all duration-200 ease-in-out mx-1"
            >
              me
            </a>
          </p>
          <a
            href={EXTERNAL_LINKS.repo}
            className="underline hover:text-pink-600 transition-all duration-200 ease-in-out mx-1 my-8"
          >
            <GithubLogo />
          </a>
        </div>
        <nav className="w-full md:w-[700px] mx-auto">
          <ul className="flex flex-col space-y-5">
            {SOLUTIONS_LINKS.map((link) => (
              <li>
                <LinkButton
                  path={link.path}
                  label={link.label}
                />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

const LinkButton: React.FC<{ path: string; label: string }> = (link) => {
  return (
    <Link aria-label="app-link" to={link.path}>
      <button className="transition-all duration-200 ease-in-out text-lg w-full py-2.5 rounded-3xl break-words hover:bg-pink-600 border border-zinc-600">
        {link.label}
      </button>
    </Link>
  );
};

const GithubLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
};

export default Home;
