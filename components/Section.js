import Link from "next/link";
// import { SocialIcon } from 'react-social-icons';
import "./Header.scss";
import Icon from '@mdi/react'
import { mdiAccount, mdiGithubCircle, mdiGmail, mdiLinkedin} from '@mdi/js'


const Section = props => (
  <div>
    <h2>{props.title}</h2>
  </div>
  
);

export default Section;