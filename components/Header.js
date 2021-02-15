import Link from "next/link";
// import { SocialIcon } from 'react-social-icons';
import "./Header.scss";
import Icon from '@mdi/react'
import { mdiAccount, mdiGithubCircle, mdiGmail, mdiLinkedin} from '@mdi/js'

const Header = props => (
  <div className="HeaderWrapper"> 
    <div className="HeaderContent">
      <Link href="/">
        <div className="HeaderTitle">{props.appTitle}</div>
      </Link>
      <div className="HeaderIcons">
        <a href="https://github.com/coykwan" target = "blank"><Icon className="HeaderIcon" path={mdiGithubCircle} size={1.5} color="white"/></a>
        <a href="mailto:coykwan@gmail.com"><Icon className="HeaderIcon" path={mdiGmail} size={1.5} color="white"/></a>
        <a href="https://www.linkedin.com/in/coy-kwan-4039b4192/" target = "blank"><Icon className="HeaderIcon" path={mdiLinkedin} size={1.5} color="white"/></a>
      </div>
    </div>
  </div>
  
);

export default Header;