import styles from './Footer.module.css'
const Footer = () =>{
    return(
        <footer className={styles.bgFooter}>            
            <div className="d-flex justify-content-center">
                <label className={styles.texto}> &copy; Footer cmriverosa, ariqueño en santiago 2021</label>
            </div>
        </footer>
    )
}
export default Footer