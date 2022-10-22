import classes from './Navbar.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate, NavLink } from 'react-router-dom';
const Navbar = (props) => {
    const navigate = useNavigate();
    const activeLink = (navData) => navData.isActive ? classes.active : '';
    return (
        <div className={classes.navbar} >
            <div className={classes.leftPart}>
                <p><NavLink className={activeLink} to='/home'>Home</NavLink></p>
                <p><NavLink className={activeLink} to='/shop'>Shop</NavLink></p>
            </div>
            <div className={classes.centerPart}>
                <h1>BOUTIQUE</h1>
            </div>
            <div className={classes.rightPart} >
                <p><NavLink className={activeLink} to='/cart'><i class="bi bi-cart-fill"></i>  Cart</NavLink></p>
                <p><NavLink className={activeLink} to='/login'><i class="bi bi-person-fill"></i>  Login</NavLink></p>
            </div>
        </div>
    )
}
export default Navbar