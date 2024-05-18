import React, { useState, useEffect } from 'react';
import Master from './Layout/Master';

export default function Cart(props) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = props.cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    setTotal(newTotal);
  }, [props.cart]);

  const addQty = (product) => {
    props.setCart((prevState) => prevState.map((d) => {
      if (d.title === product.title) {
        return { ...d, qty: d.qty + 1 };
      }
      return d;
    }));
  };


  const reduceQty = (product) => {
    props.setCart((prevState) => {
      return prevState
        .map((d) => {
          if (d.title === product.title) {
            return { ...d, qty: d.qty - 1 };
          }
          return d;
        })
        .filter((d) => d.qty > 0);
    });
  };

  return (
    <Master {...props}>
      <div className="container">
        <h1 className="mt-3">All Carts</h1>
        <div className="row">
          <div className="col-md-12 mt-3 mb-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Qty</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Option</th>
                </tr>
              </thead>
              <tbody>
                {props.cart.map((d) => (
                  <tr key={d.id}>
                    <td>{d.title}</td>
                    <td>{d.price}</td>
                    <td>{d.qty}</td>
                    <td>{d.qty * d.price}</td>
                    <td>
                      <span
                        onClick={() => reduceQty(d)}
                        className="btn btn-sm btn-danger"
                        data-mdb-ripple-init=""
                        style={{ marginRight: 15 }}
                      >
                        <i className="fas fa-minus" />
                      </span>
                      <span
                        onClick={() => addQty(d)}
                        className="btn btn-sm btn-success"
                        data-mdb-ripple-init=""
                      >
                        <i className="fas fa-plus" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="offset-md-6">
              <label style={{ marginRight: 15 }}>Totals</label>
              <a
                href="#!"
                className="btn btn-sm border border-danger"
                data-mdb-ripple-init=""
              >
                {total}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Master>
  );
}
