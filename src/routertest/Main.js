import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Aplica from "./Aplica"
import {
    Routes,
    Route
  } from "react-router-dom";
import Expenses from "./Expenses"
import Invoices from "./Invoices"
import Indexx from "./Indexx"
import Defindex from "./Defindex"
import Invoice from "./Invoice"
export default function main(){
    return (
        
        <div>
            <BrowserRouter>
                <p>Alo!</p>
                <Routes>
                

                    <Route exact path="/" element={<Aplica />}>
                        <Route path="expenses" element={<Expenses />} />
                        <Route path="invoices" element={<Invoices />}>
                            <Route path=":invoiceId" element={<Invoice />} />
                        </Route>
                        <Route path="*" element={<Indexx />} />
                        <Route index element={<Defindex />} />
                    </Route>

                    {/* <Route index element={<Aplica />} /> */}

                </Routes>
            </BrowserRouter>
        </div>
        
    )
}