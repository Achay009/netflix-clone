import React,{useState,useEffect} from 'react';
import './Navbar.css'



function Navbar () {

    let [show,handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });

        return () => {
            window.removeEventListener('scroll');
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
                src="https://img.icons8.com/color/144/000000/netflix.png"
                alt="Netflix Logo"
            />
            <img className="nav__avatar"
                src="https://occ-0-769-768.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABbU3UHUlkChqMS0UORybrasISolcRmk12xz3v84eycdFXFb0OpRQn-eS1DPXHPfnedUm2GsZylJOXOpNbDjSDMw.png?r=a41"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Navbar;