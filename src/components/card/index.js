import { useState} from 'react';
import Button from '../buttons';

const Card = () => {
    
    const [valor, setValor] = useState(0)


    function Adicionar (){
        setValor(valor + 1)
    }

    function Remover (){
        setValor(valor - 1)
    }

    function Duplicar(){
        setValor(valor * 2)
    }

    function Resetar(){
        setValor(valor - valor)
    }
    
    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            
            <div className="card-body" >
                <Button className="btn btn-success" onClick={Adicionar}>Adiconar</Button>
                <Button className="btn btn-danger" onClick={Remover}>Remover</Button>
                <Button className="btn btn-warning" onClick={Duplicar}>Duplicar</Button>
                <Button  className="btn btn-secondary" onClick={Resetar}>Resetar</Button>
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;