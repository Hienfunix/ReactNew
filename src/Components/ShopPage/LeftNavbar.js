import { useDispatch } from 'react-redux'
import classes from './LeftNavbar.module.css'
import { categoryActions } from '../../store/category';
const LeftNavbar = (props) => {
    const dispatch = useDispatch();
    const categoryClickHandler = (event => {
        event.preventDefault();
        dispatch(categoryActions.getCategory(event.target.textContent))
    })
    return(
        <div className={classes.leftNavbar}>
            <h1>CATEGORIES</h1>
            <ul>
                <li className={classes.important}>APPLE</li>
                <li className={classes.products} onClick={categoryClickHandler}>All</li>
                <li className={classes.title}>IPHONE & MAC</li>
                <li className={classes.products} onClick={categoryClickHandler}>IPhone</li>
                <li className={classes.products} onClick={categoryClickHandler}>Ipad</li>
                <li className={classes.products} onClick={categoryClickHandler}>Macbook</li>
                <li className={classes.title}>WIRELESS</li>
                <li className={classes.products} onClick={categoryClickHandler}>Airpod</li>
                <li className={classes.products} onClick={categoryClickHandler}>Watch</li>
                <li className={classes.title}>OTHER</li>
                <li className={classes.products} onClick={categoryClickHandler}>Mouse</li>
                <li className={classes.products} onClick={categoryClickHandler}>Keyboard</li>
                <li className={classes.products} onClick={categoryClickHandler}>Other</li>
            </ul>
        </div>
    )
}
export default LeftNavbar; 