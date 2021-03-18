import Modal from 'react-modal'
import { Container, TransactionTupeContainer } from './style'
import close from '../../assets/Vector.svg'
import imgS from '../../assets/Saídas.svg'
import imgE from '../../assets/Entradas.svg'

interface NewModalProps{
    isOpen: boolean;
    onRequestClose: () => void;

}


export function NewModal({isOpen,onRequestClose}: NewModalProps){
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
        <Container>
            <h2>Cadastrar Transação</h2>
            
            <input
                placeholder = "Título"
            />

            <input
                type = 'number'
                placeholder = "Valor"
            />  

            <TransactionTupeContainer>
                <button
                    type = 'button'
                >
                    <img src={imgE} alt="Entrada"/>
                    <span>Entrada</span>
                </button>
                <button
                    type = 'button'
                >
                    <img src={imgS} alt="Saída"/>
                    <span>Saída</span>
                </button>
            </TransactionTupeContainer>
            
            <input
                placeholder = "Categoria"
            />

            <button type="submit">Cadastrar</button>
        </Container>
      </Modal>

    )
}