import './home.scss'
import '../Layout/index.scss'
import { Link } from 'react-router-dom';


const Home = () => {
    return(
        <div className="container home-page">
            <div className='text-zone'>
                <h1>Hi, <br/> I'm
                <img src='' alt='developer'/>
                JINAL
                <br/>
                Web Developer
                </h1>
                <h2>Frontend Developer / WordPress Developer / React Developer</h2>
                <Link to="/contact" className='flat-button'>Contact</Link>
            </div>
        </div>
    )
}

export default Home;