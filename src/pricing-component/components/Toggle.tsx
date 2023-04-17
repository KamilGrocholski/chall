import clsx from 'clsx'

type ToggleProps = {
    options: [string, string]
    value: 0 | 1
    onToggle: () => void
}

const Toggle: React.FC<ToggleProps> = ({
    options: [optionA, optionB],
    value,
    onToggle,
}) => {
    return (
        <div className="flex flex-row space-x-5 items-center">
            <span className="text-sm font-semibold tracking-wider text-gray-400">
                {optionA}
            </span>
            <button
                className="bg-cp-primary relative h-6 w-14 rounded-xl"
                onClick={onToggle}
            >
                <div
                    className={clsx(
                        'rounded-full my-auto m-1 h-5 w-5 absolute bg-white top-0 bottom-0',
                        value ? 'left-0' : 'right-0',
                    )}
                ></div>
            </button>
            <span className="text-sm font-semibold tracking-wider text-gray-400">
                {optionB}
            </span>
        </div>
    )
}

export default Toggle
