import classes from './Detail.module.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import React from 'react';
const Detail = (props) => {
    const params = useParams();
    const idProduct = params.productId;
    const categoryProduct = params.productCategory;
    const dataProduct = useSelector(state => state.fetchdata.data) 

    
    const showRelateProduct = () => {
        return dataProduct.map(product => {
            if(product.category===categoryProduct){
                return(
                    <div className={classes.relatedProduct}>
                        
                        <img src={`${product.img1}`}className={classes.imag3} alt='related' />
                        <h2>{product.name}</h2>
                        <p>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</p>
                    </div>
                )
            }
            return <div/>
        })
    }
    const showDetailProduct = () => {
        return dataProduct.map(product => {        
            if (product._id.$oid === idProduct){
                return (
                    <React.Fragment>
                        <div className={classes.part1}>
                            <div className={classes.column1}>
                                <img src={`${product.img1}`} alt='SmallImage' className={classes.imag1} />
                                <img src={`${product.img2}`} alt='SmallImage' className={classes.imag1} />
                                <img src={`${product.img3}`} alt='SmallImage' className={classes.imag1} />
                                <img src={`${product.img4}`} alt='SmallImage' className={classes.imag1} />
                            </div>
                            <div className={classes.column2}>
                                <img src={`${product.img1}`} alt ='BigImage'className={classes.imag2} />
                            </div>
                            <div className={classes.column3}>
                                <h1 className={classes.name}>{product.name}</h1>
                                <p className={classes.price}>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</p>
                                <p className={classes.info}>{product.short_desc}</p>
                                <div className={classes.category}>
                                    <span className={classes.tt}>CATEGORY: </span> 
                                    <span className={classes.categoryName}>{product.category}</span>
                                </div>
                                <form className={classes.addCart}>
                                    <label htmlFor='quantity'></label>
                                    <input placeholder='QUANTITY'></input>
                                    <span><i class="bi bi-caret-left-fill"></i> 1 <i class="bi bi-caret-right-fill"></i></span>
                                    <button>Add to cart</button>
                                </form>
                            </div>
                        </div>
                            
                        <div className={classes.part2}>
                            <button>DESCRIPTION</button>
                            <h1>PRODUCT DESCRIPTION</h1>
                            <p>{product.long_desc} \n hello </p>
                        </div>

                    </React.Fragment>
                )
            }
            return <div />
        })

    }

    return(
        <div className={classes.detail}>
            {showDetailProduct()}
            <div className={classes.part3}>
                <h1>RELATED PRODUCTS</h1>
                <div className={classes.relatedProducts}>
                    {showRelateProduct()}
                </div>
            </div>
        </div>
    )
}
export default Detail; 