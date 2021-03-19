import Modal from 'react-modal'
import { Container, TransactionTupeContainer, RadioBox } from './style'
import close from '../../assets/Vector.svg'
import imgS from '../../assets/Saídas.svg'
import imgE from '../../assets/Entradas.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface NewModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewModal({isOpen,onRequestClose}: NewModalProps){
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type
        }

        api.post('/transactions', data)
    }

    


    return(
        <Modal 
        isOpen = {isOpen} 
        onRequestClose= {onRequestClose}
        overlayClassName = 'react-modal-overlay'
        className = 'react-modal-content'
      >
          <button type="button" onClick = {onRequestClose} className = 'react-modal-close'>
              <img src={close} alt="Fechar"/>
          </button>
        <Container onSubmit = {handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>
            
            <input
                placeholder = "Título"
                value = {title}
                onChange = {event => setTitle(event.target.value)}
            />

            <input
                type = 'number'
                placeholder = "Valor"
                value = {value}
                onChange = {event => setValue(Number(event.target.value))}
            />  

            <TransactionTupeContainer>
                <RadioBox
                    type = 'button'
                    onClick = {() => { setType('deposit'); }}
                    isActive = {type === 'deposit'}
                    activeColor = 'green'
                >
                    <img src={imgE} alt="Entrada"/>
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox
                    type = 'button'
                    onClick = {() => { setType('withdraw'); }}
                    isActive = {type === 'withdraw'}
                    activeColor = 'red'
                >
                    <img src={imgS} alt="Saída"/>
                    <span>Saída</span>
                </RadioBox>
            </TransactionTupeContainer>
            
            <input
                placeholder = "Categoria"
                value = {category}
                onChange = {event => setCategory(event.target.value)}
            />

            <button type="submit">Cadastrar</button>
        </Container>
      </Modal>

    )
}