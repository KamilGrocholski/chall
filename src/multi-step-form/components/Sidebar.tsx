import { tabs } from '../Context'
import SidebarStepButton from './SidebarStepButton'

const Sidebar = () => {
    return (
        <aside>
            <div className="absolute top-0 left-0 -z-10 h-1/4 w-screen bg-sidebarMobile bg-cover bg-no-repeat md:static md:h-full md:w-[274px] md:rounded-lg md:bg-sidebarDesktop md:bg-auto">
                <div className="flex h-[5/6] items-start justify-center gap-4 pt-12 md:h-fit md:flex-col md:items-stretch md:gap-8 md:p-10">
                    {tabs.map((tab, index) => (
                        <SidebarStepButton key={tab} step={index} title={tab} />
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
