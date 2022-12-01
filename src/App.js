import React from "react";
import './app.css'
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="row mb-3">
        <h2 className="col">{cash} руб.</h2>
      </div>
      <div className="d-flex justify-content-between mb-3" style={{width: '200px'}}>
        <button className="btn btn-primary fs-5 fw-bolder" style={{width: '40px'}} onClick={() => addCash(Number(prompt()))}>+</button>
        <button className="btn btn-danger fs-5 fw-bolder" style={{width: '40px'}} onClick={() => getCash(Number(prompt()))}>-</button>
        <button className="btn btn-info fs-6 fw-bolder" style={{width: '110px'}} onClick={() => addCustomer(prompt())}>Дабавить клиента</button>
        
      </div>
      <div class="card" style={{width: '11rem', textAlign: 'center'}}>
        {customers.length > 0 ? 
          <ul class="list-group list-group-flush">
            {customers.map(customer => (
              <li class="list-group-item fs-6 fw-bolder" onClick={() => removeCustomer(customer)}>
                {customer.name}
              </li>
            ))}
          </ul> 
          : 
          <div style={{fontSize: '1rem'}}>Клиенты отсутствуют!</div>
        }
        
      </div>
    </div>
  );
}

export default App;
