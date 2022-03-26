import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
const Landing = () => {
  return (<main>
    <nav>
      <img src={logo} alt='jobify' className='logo' />
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
        <button className="btn btn-hero">
          Login/Register
        </button>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </div>
  </main>
  )
}

export default Landing