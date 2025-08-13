import './Footer.css'
import { assets } from '../../assets/assets';

function Footer(){
  return(
    <div className='footer' id='footer'>
    <div className="footer-content">
      <div className="footer-content-left">
      <img src={assets.logo} alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus minima facere nobis reiciendis ab unde dolores voluptatibus assumenda? Quasi amet consequatur cumque. Quos saepe rem temporibus aliquam autem quis tenetur et odio, totam culpa! Repellat quasi ab excepturi incidunt.</p>
       <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
       </div>
      </div>
      <div className="footer-content-center">
      <h2>COMPANY</h2>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Deliver</li>
        <li>Privacy Policy</li>
      </ul>
      </div>
      <div className="footer-content-right">
        
      </div>
    </div>

    </div>
  )
}

export default Footer;