import { Container } from "./style";
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){
    const {transactions} = useTransactions()


    /*const totalDeposits = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            return acc + transaction.amount;
        }
        return acc;
    }, 0); ------ Forma de fazer o total em cima*/

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0,
    }) 


    return(
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposit)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas"/>
                </header>
                <strong>-
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraw)} 
                </strong>
            </div>
            <div className = 'total'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)} 
                </strong>
            </div>
        </Container>
    )
}