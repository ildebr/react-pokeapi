import {useParams} from "react-router-dom"
import {getInvoice} from "./data.js"

export default function Invoice(){
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10))
    return (<main>
        <h2>Total due: {invoice.amount} </h2>
        <p>{invoice.amount}: {invoice.number} </p>
        <p>Due date: {invoice.due} </p>
    </main>)
}