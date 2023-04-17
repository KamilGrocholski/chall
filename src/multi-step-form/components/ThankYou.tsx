import ThankYouIcon from '../assets/images/icon-thank-you.svg'

const ThankYou = () => {
    return (
        <div className="flex flex-col space-y-3 justify-center items-center h-full">
            <img src={ThankYouIcon} />
            <legend className="text-center text-primary text-3xl font-bold">
                Thank you!
            </legend>
            <span className="text-muted text-center">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loregaming.com.
            </span>
        </div>
    )
}

export default ThankYou
