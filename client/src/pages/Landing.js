import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
  <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className="container page">
      {/* info */}
      <div className='info'>
        <h1>
          job <span>tracking</span> app
        </h1>
        <p>
        Kale chips migas waistcoat affogato, ennui fam blue bottle 
        DIY biodiesel. Twee blog flannel everyday carry fingerstache 
        lomo roof party hot chicken hammock.
        </p>
        <Link to='/register' className="btn btn-hero">
          Login/Register
        </Link>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </div>
  </Wrapper>
  )
}

export default Landing