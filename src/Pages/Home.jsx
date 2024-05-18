import React, { useEffect, useState } from 'react'
import Master from './Layout/Master'
import Loader from '../Components/Loader'
import axios from 'axios'

export default function Home(props) {
    const [loader, setLoader] = useState(true);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => { setProduct(res.data); setLoader(false) });
    }, []);
    const addtoCart = (product) => {
        var findProduct = props.cart.find(p => { return p.id === product.id });
        if (findProduct) {
            findProduct.qty += 1;
        } else {
            product.qty = 1;
            props.setCart([...props.cart, product]);
        }

    }
    return (

        <Master {...props}>
            {loader && <Loader />}
            {!loader &&
                <div className="container">
                    <div className="row">
                        {product.map(d => {
                            return (
                                <div key={d.id} className="col-md-4  mt-4 mb-4">
                                    <div className="card">
                                        <div
                                            className="bg-image hover-overlay"
                                            data-mdb-ripple-init=""
                                            data-mdb-ripple-color="light"
                                        >
                                            <div className='text-center p-3'>
                                                <span className='fw-bold text-capitalize'>{d.category}</span>
                                            </div>
                                            <img
                                                src={d.image}
                                                className="img-fluid"
                                            />
                                            <a href="#!">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{d.title}</h5>
                                            <p className="card-text">
                                                {d.description}
                                            </p>
                                            <div className="text-center">
                                                <span
                                                    href="#!"
                                                    className="mt-2 btn border border-danger border-2"
                                                    data-mdb-ripple-init=""
                                                    style={{ marginRight: 15 }}
                                                >
                                                    Ks 5000
                                                </span>
                                                <button onClick={() => addtoCart(d)}
                                                    className="mt-2 btn border border-danger border-2 btn-danger"
                                                    data-mdb-ripple-init=""
                                                >
                                                    <i className="fas fa-cart-shopping" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            }
        </Master>
    )
}
