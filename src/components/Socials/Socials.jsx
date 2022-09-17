import pinterest from '../../assets/socials images/pinterest.png'
import facebook from '../../assets/socials images/facebook.png'
import twitter from '../../assets/socials images/twitter.png'
import email from '../../assets/socials images/mail.png'
import './socials.scss'

export default function Socials({ socialsSize }) {
    const styles = {
        width: socialsSize,
        height: socialsSize,
    }
    return (
        <div className="socials">
            <img style={styles} className="pinterest" src={pinterest} alt="" />
            <img style={styles} className="facebook" src={facebook} alt="" />
            <img style={styles} className="twitter" src={twitter} alt="" />
            <img style={styles} className="email" src={email} alt="" />
        </div>
    )
}
