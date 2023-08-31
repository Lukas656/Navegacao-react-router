import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle.jsx'

const UseState = (props) => {
    const [count, setConunt] = useState(0)



    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercicio 01" />
            <div className='center'>
                <span className='text'>{count}</span>
                <div>
                    <button className='btn' onClick={() => setConunt(count - 1)}>
                        -1
                    </button>
                    <button className='btn' onClick={() => setConunt(count + 1)}>
                        +1
                    </button>
                    <button className='btn' onClick={() => setConunt(current => current + 100)}>
                        +1000
                    </button>
                </div>
            </div>
            


        </div>
    )
}

export default UseState
