import {useState} from 'react'
import alerta from 'sweetalert2'

const ContactForm = () =>{
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('');
    
    const alertSuccess = () =>{
        alerta.fire({
            icon: 'success',
            text: `Estimado : ${username}, Ariquita es pulento.`,
            footer: 'Lo contactaremos a la brevedad.'
        }) 
    }

    const handlerUsernameChange = (event:any) =>{
        setUsername(event.target.value)
    }
    const handlerEmailChange = (event:any) =>{
        setEmail(event.target.value)
    }
    const handlerMessageChange = (event:any) =>{
        setMessage(event.target.value)
    }

    const handlerSend = () => {
        alertSuccess()
        // alert (`Estimado : ${username}, Ariquita es pulento. Lo contactaremos a la brevedad.`)
        console.log(`Correo emisor: ${email}, mensaje: ${message}`)
    }
    return (        
        <div className="container mt-5">            
                <div className="card">
                    <div className="card-header"><h3>Contacto</h3></div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input className="form-control" type="text" onChange={handlerUsernameChange} value={username}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input className="form-control" type="text" onChange={handlerEmailChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mensaje</label>
                            <textarea className="form-control" onChange={handlerMessageChange} />
                        </div>                                                                
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-dark" onClick={handlerSend}>Enviar</button>
                    </div>
                </div>            
        </div>
    )
}
export default ContactForm