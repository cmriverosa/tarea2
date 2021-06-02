import {useContext} from 'react'
import LugaresContext from '../../contexts/LugaresContext'

const ListadoLugares = () => {

    const ctx = useContext(LugaresContext);

    return (
        <div className="container mb-5"> Atractivos Turísticos
            
                <ul className="list-group">
                    {ctx.lugares.map((lugar,i) => (                        
                        <li className="list-group-item" key ={i}>
                            <h4>{lugar}</h4>
                        </li>
                    ))}
                </ul>            
        </div>
    )
}
export default ListadoLugares