import img1 from '../../assets/img/morro.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
const SectionPrincipal = () =>{
    return(
        <div className="">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">                    
                        <img src={img1} className="bd-placeholder-img" alt="..."/>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Atardecer Ariqueño</h1>
                                <p>Morro de Arica</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">                    
                        <img src={img2} className="bd-placeholder-img" alt="..."/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Atardecer Ariqueño</h1>
                                <p>Playa el Laucho, Arica - Chile</p>                        
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="bd-placeholder-img" alt="..."/>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Amanecer Ariqueño</h1>
                                <p>Imagenes del barrio</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default SectionPrincipal