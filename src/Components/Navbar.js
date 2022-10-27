import classes from './Navbar.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {

    const navigate = useNavigate();
    const homeClickHandle = () => navigate('/home');
    const shopClickHandle =() => navigate('/shop')
    const cartClickHandle =() => navigate('/cart')
    const loginClickHandle =() => navigate('/login')
    
    // useEffect = {() => {
    //     re
    // },}
    // const activeLink = (navData) => navData.isActive ? classes.active : '';
    return (
        <div className={classes.navbar} >
            <div className={classes.leftPart}>
                <p onClick={homeClickHandle}>Home</p>
                <p onClick={shopClickHandle}>Shop</p>
            </div>
            <div className={classes.centerPart}>
                <h1>BOUTIQUE</h1>
            </div>
            <div className={classes.rightPart} >
                <p onClick={cartClickHandle}><i class="bi bi-cart-fill"></i>  Cart</p>
                <p onClick={loginClickHandle}><i class="bi bi-person-fill"></i>  Login</p>
            </div>
        </div>
    )
}
export default Navbar