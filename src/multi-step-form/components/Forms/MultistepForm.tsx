import useFormContext from '../../hooks/useFormContext'
import { tabs } from '../../Context'
import PersonalInfoForm from './PersonalInfoForm'
import PlanForm from './PlanForm'
import Button from '../Button'
import AddOnsForm from './AddOnsForm'
import SummaryForm from './SummaryForm'

import BgSidebarDesktop from '../../assets/images/bg-sidebar-desktop.svg'
import BgSidebarMobile from '../../assets/images/bg-sidebar-mobile.svg'
import Sidebar from '../Sidebar'

const MultistepForm = () => {
    const { goTo, step } = useFormContext()

    return (
        <>
            <Sidebar />
            <section className='w-full'>
                {tabs[step] === 'Your info' ? (
                    <PersonalInfoForm />
                ) : tabs[step] === 'Select plan' ? (
                    <PlanForm />
                ) : tabs[step] === 'Add-ons' ? (
                    <AddOnsForm />
                ) : tabs[step] === 'Summary' ? (
                    <SummaryForm />
                ) : null}
            </section>
        </>
    )
}

export default MultistepForm
