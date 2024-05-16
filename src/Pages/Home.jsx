import React, { useEffect, useState } from 'react'
import Master from './Layout/Master'
import Loader from '../Components/Loader'
import axios from 'axios'

export default function Home() {
    const [loader, setLoader] = useState(true);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => setProduct(res.data), setLoader(false))
    }, [])
    return (
        <Master>
            {loader && <Loader />}
            {!loader &&
                <div className="container">
                    <div className="row">
                        {product.map(d => {
                            return (
                                <div className="col-md-3  mt-4 mb-4">
                                    <div key={d.id} className="card">
                                        <div
                                            className="bg-image hover-overlay"
                                            data-mdb-ripple-init=""
                                            data-mdb-ripple-color="light"
                                        >
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
                                                {d.description }
                                            </p>
                                            <div className="text-center">
                                                <a
                                                    href="#!"
                                                    className="btn border border-danger border-2"
                                                    data-mdb-ripple-init=""
                                                    style={{ marginRight: 15 }}
                                                >
                                                    Ks 5000
                                                </a>
                                                <a
                                                    href="#!"
                                                    className="btn border border-danger border-2 btn-danger"
                                                    data-mdb-ripple-init=""
                                                >
                                                    <i className="fas fa-cart-shopping" />
                                                </a>
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
