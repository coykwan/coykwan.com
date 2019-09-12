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
        <Icon className="HeaderIcon" path={mdiGithubCircle} size={1.5} color="white"/>
        <Icon className="HeaderIcon" path={mdiGmail} size={1.5} color="white"/>
        <Icon className="HeaderIcon" path={mdiLinkedin} size={1.5} color="white"/>
      </div>
    </div>
  </div>
  
);

export default Header;