import LogoIcon from '../images/logo.svg'

const Logo: React.FC<{ className?: string }> = ({ className }) => {
    return <img src={LogoIcon} className={className} />
}

export default Logo
