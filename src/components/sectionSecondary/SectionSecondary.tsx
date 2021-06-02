import img6 from '../../assets/img/img6.png'
import ListadoLugares from '../listadoLugares/ListadoLugares'
const SectionSecondary = () =>{
    return (
        <div className="">
            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">                        
                        <img src={img6} className="bd-placeholder-img thumbnail" width="180" height="180" alt="..."/>
                        <h2>Sección 2 Ariquita</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>                        
                    </div>
                    <div className="col-lg-4">                        
                        <img src={img6} className="bd-placeholder-img thumbnail" width="180" height="180" alt="..."/>
                        <h2>Sección 2 Ariquita</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>                        
                    </div>
                    <div className="col-lg-4">                        
                        <img src={img6} className="bd-placeholder-img thumbnail" width="180" height="180" alt="..."/>
                        <h2>Sección 2 Ariquita</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>                        
                    </div>
                </div>
            </div>

            <div className="container">
                <ListadoLugares/>
                <hr />
            </div>
        </div>
    )
}

export default SectionSecondary