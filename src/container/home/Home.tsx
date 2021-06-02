import ContactForm from "../../components/contactForm/ContactForm"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import SectionPrincipal from "../../components/sectionPrincipal/SectionPrincipal"
import SectionSecondary from "../../components/sectionSecondary/SectionSecondary"
import LugaresContext from "../../contexts/LugaresContext"
const Home = () =>{

    const lugares = {
        lugares : ['Playa Chinchorro','Playa El Laucho','Playa La Lisera', 'Morro de Arica','Cuevas de Anzota','Humedal Rio Lluta']
    }
    return (
        <LugaresContext.Provider value={lugares}>
            <div>
                <Header/>
                <SectionPrincipal/>
                <SectionSecondary/>
                <ContactForm/>
                <Footer/>
            </div>
        </LugaresContext.Provider>
    )
}
export default Home;