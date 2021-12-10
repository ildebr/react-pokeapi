import { Link, Outlet } from "react-router-dom";
import {getInvoices} from "./data"
export default function Invoices() {

  let invoices = getInvoices();

    return (
      <div>
        <p>Invoices lol</p>
        <nav>
          {console.log(invoices)}
        {invoices.map((invoice) =>(
          <Link to={`/invoices/${invoice.number}`} key={invoice.number} >{invoice.name}</Link>
    ))}
        </nav>
        <Outlet />
      </div>
    );
  }