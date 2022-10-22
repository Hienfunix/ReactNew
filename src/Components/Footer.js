import classes from './Footer.module.css';
const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <div className={classes.column1}>
                <h2>CUSTOMER SERVICES</h2>
                <p>Help & Contact Us</p>
                <p>Returns & Refunds</p>
                <p>Online Stores</p>
                <p>Terms & Condistions</p>
            </div>
            <div className={classes.column2}>
                <h2>COMPANY</h2>
                <p>What We Do</p>
                <p>Available Services</p>
                <p>Latest Posts</p>
                <p>FAQs</p>
            </div>
            <div className={classes.column3}>
                <h2>SOCIAL MEDIA</h2>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Pinterest</p>
            </div>
        </div>
    )
}
export default Footer
