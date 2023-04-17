const AddOnButton: React.FC<{
    isChecked: boolean
    title: string
    desc: string
    subDesc: string
    onClick: () => void
}> = ({ isChecked, title, desc, subDesc, onClick }) => {
    return (
        <div className="relative">
            <input
                type="checkbox"
                id={title}
                name={title}
                value={title}
                className="peer pointer-events-none absolute top-[35%] left-[22px] h-6 w-6 accent-accent"
                onChange={onClick}
                checked={isChecked}
                tabIndex={-1}
            />
            <label
                htmlFor={title}
                className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-muted bg-white px-5 py-4 transition-colors hover:border-primary focus:border-primary
        focus:bg-accent/5 peer-checked:border-primary peer-checked:bg-accent/10"
            >
                <div className="flex items-center justify-between gap-5">
                    <button
                        type="button"
                        tabIndex={-1}
                        className="pointer-events-none h-6 w-6 outline-none"
                    ></button>
                    <div>
                        <p className="font-bold text-primary">{title}</p>
                        <p className="text-sm text-muted">{desc}</p>
                    </div>
                </div>
                <span className="text-accent font-semibold">{subDesc}</span>
            </label>
        </div>
    )
}

export default AddOnButton
