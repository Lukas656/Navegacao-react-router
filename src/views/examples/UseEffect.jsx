import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseEffect = () => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    function calcFatorial(num) {
        const n = parseInt(num)
        if (n < 0) return -1
        if (n === 0) return 1
        return calcFatorial(n - 1) * n
    }

    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number, calcFatorial]) // incluindo calcFatorial no array de dependências

    useEffect(() => {
        if (fatorial > 10000) {
            document.title = 'UseEffect !!!'
        }
    }, [fatorial])

    const [status, setStatus] = useState("Impar")

    useEffect(() => {
        setStatus(number % 2 === 0 ? "Par" : "Ímpar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <sectionTitle title='Exercicio #01' />
            <div className='center'>
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                </div>
                <input type='number' className='input'
                    value={number} onChange={e => setNumber(e.target.value)}
                ></input>
            </div>
            <sectionTitle title='Exercicio #02' />
            <div className='center'>
                <div>
                    <span className='text'>Status:</span>
                    <span className='text red'>{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
