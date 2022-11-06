import classes from './Navbar.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from  'react-redux';
import { fetchDataActions } from '../store/fetchdata';
import { useEffect,Fragment} from 'react';
import { authActions } from '../store/auth';
import { userActions } from '../store/user';
import { getKeyLocalStore } from './AuthPage/GETKEYLOCAL';
// Lỗi khi load lại trang navbar khi đã đăng xuất
const Navbar = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const homeClickHandler = () => navigate('/home');
    const shopClickHandler =() => navigate('/shop')
    const cartClickHandler =() => navigate('/cart')
    const loginClickHandler =() => navigate('/login')
    const isLogin = useSelector(state => state.auth.isAuthenticated)
    const userLogin = useSelector(state => state.user.userLogin)
    const userArr = useSelector(state => state.user.userArr)

    
    async function fetchProducts(){
        const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
        const data = await response.json();
        dispatch(fetchDataActions.getData(data));
    }  
    const logoutClickHandler = (event) => {
        event.preventDefault();
        dispatch(authActions.logout('false'));
        dispatch(userActions.ON_LOGOUT(''))
        localStorage.setItem('isLogin','false');
        localStorage.setItem('userLogin',JSON.stringify([]));
        navigate('/login');
    }
    const login = () => {
        if(isLogin==='true'){
            return(
                <Fragment>
                    <p onClick={cartClickHandler}><i class="bi bi-cart-fill"></i>  Cart</p>
                    <p onClick={loginClickHandler}><i class="bi bi-person-fill"></i>  {userLogin.name}</p>
                    <p onClick={logoutClickHandler}> (Logout) </p>
                </Fragment>
            )
        }
        else{
            return(
                <Fragment>
                    <p onClick={cartClickHandler}><i class="bi bi-cart-fill"></i>  Cart</p>
                    <p onClick={loginClickHandler}><i class="bi bi-person-fill"></i>  Login</p>
                </Fragment>
            )
        }
    }
    const getKeyUserArr = () =>{ getKeyLocalStore(
        'userArr',
        JSON.stringify([]),
        'Key userArr chưa có dữ liệu',
        dispatch(userActions.getUserArr(JSON.parse(localStorage.userArr))),
        )}

    const getKeyIsLogin = () => {getKeyLocalStore(
        'isLogin',
        'false',
        'Key isLogin chưa có dữ liệu',
        dispatch(authActions.login(localStorage.isLogin)),
        // dispatch(authActions.login('false')),
        )}
    
    const getKeyUserLogin = () => {getKeyLocalStore(
        'userLogin',
        JSON.stringify([]),
        'Key userLogin chưa có dữ liệu',
        dispatch(userActions.ON_LOGIN(JSON.parse(localStorage.userLogin))),
        // dispatch(userActions.ON_LOGIN([])),
        )}
        
    useEffect(()=>{getKeyUserArr()},[])
   
    useEffect(()=>{getKeyIsLogin()},[])

    useEffect(()=>{getKeyUserLogin()},[])

    console.log(userArr)
    console.log(isLogin)
    console.log(userLogin)
    useEffect(() => {login()},[isLogin]);
    useEffect(() => {fetchProducts()},[]);
    
    return (
        <div className={classes.navbar} >
            <div className={classes.leftPart}>
                <p onClick={homeClickHandler}>Home</p>
                <p onClick={shopClickHandler}>Shop</p>
            </div>
            <div className={classes.centerPart}>
                <h1>BOUTIQUE</h1>
            </div>
            <div className={classes.rightPart} >
                {login()}
            </div>
        </div>
    )
}
export default Navbar