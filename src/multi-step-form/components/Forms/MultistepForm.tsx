import useFormContext from '../../hooks/useFormContext'
import { tabs } from '../../Context'
import PersonalInfoForm from './PersonalInfoForm'
import PlanForm from './PlanForm'
import AddOnsForm from './AddOnsForm'
import SummaryForm from './SummaryForm'

import Sidebar from '../Sidebar'
import ThankYou from '../ThankYou'

const MultistepForm = () => {
    const { step, isConfirmed } = useFormContext()

    return (
        <>
            <Sidebar />
            <section className='w-full min-h-[600px] px-5'>
                {isConfirmed ? (
                    <ThankYou />
                ) : tabs[step] === 'Your info' ? (
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
