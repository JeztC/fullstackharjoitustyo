import {Link} from "react-router-dom";
import {DarkModeToggle} from "../themes/DarkModeToggle";

const Header = () => {

    const padding = {
        padding: 5
    }

    return (
        <div>
            <Link style={padding} to="/">Etusivu</Link>
            <Link style={padding} to="/products">Tuotteet</Link>
            <Link style={padding} to="/locations">Toimipisteet</Link>
            <Link style={padding} to="/contact">Ota yhteyttä</Link>
            <DarkModeToggle/>
        </div>
    )

}

export default Header