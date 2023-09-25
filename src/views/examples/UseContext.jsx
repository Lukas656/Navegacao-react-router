import React, { useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {
    //  Exemplo #01
    const context = useContext(DataContext)

    function addNumber(delta) {
        context.setState({
            ...context.state,  // Aqui usando os ... eu pego todos os dado do objeto para não ser alterado e a baixo eu declaro o valor que quero realmente alterar 
            number: context.state.number + delta
        })
    }

    //  Exemplo #02
    const {number, text, setNumber} = useContext(AppContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className='center'>
                <span className='text'>{context.state.text}</span>
                <span className='text'>{context.state.number}</span>
            </div>
            <div>
                <button className='btn'onClick={()=>addNumber(-1)}>-1</button>
                <button className='btn'onClick={()=>addNumber(+1)}>+1</button>
            </div>
            <SectionTitle title="Exercicio #02"/>


            <div className='center'>
                <span className='text'>{text}</span>
                <span className='text'>{number}</span>
                <div>
                    <button className='btn' onClick={()=> setNumber(number -1)}>-1</button>
                    <button className='btn' onClick={()=> setNumber(number +1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
