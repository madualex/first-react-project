import ReactLogo from "../images/reactjs-icon-small.png"
import "../App.css"

const Navbar = () => {
    return (
        <div className="Nav-div">
            <nav className="Nav">
                <img src={ReactLogo} alt="react logo" />
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        </div>
    )
}

export default Navbar