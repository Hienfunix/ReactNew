import classes from './Navbar.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from  'react-redux';
import { fetchDataActions } from '../store/fetchdata';
import { useEffect} from 'react';

const Navbar = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const homeClickHandle = () => navigate('/home');
    const shopClickHandle =() => navigate('/shop')
    const cartClickHandle =() => navigate('/cart')
    const loginClickHandle =() => navigate('/login')

    async function fetchProducts(){
        const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
        const data = await response.json();
        dispatch(fetchDataActions.getData(data));
    }  
    
    useEffect(() => {fetchProducts()},[]);
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