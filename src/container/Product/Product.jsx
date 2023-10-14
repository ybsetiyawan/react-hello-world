import React, { Component, Fragment } from "react";
import './Product.css'

class Product extends Component {
    render (){
        return (
            <Fragment>
            <div className="header">
                <div className="logo">
                    <img src="data:image/png;base64,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" alt="" />
                </div>
                <div className="troley">
                    <img src="data:image/png;base64,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" alt="" />
                    <div className="count">3</div>
                </div>
            </div>
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://foto.kontan.co.id/OJC46TmlHXFukY8uL7wQreAEIjk=/smart/2023/06/14/558498256p.jpg" alt="product_image" />
                </div>
                <p className="product-tittle">Spesifikasi & Harga HP Realme C53: RAM 6GB + 6GB, Kamera 50MP, Hanya Rp 2,1 Juta</p>
                <p className="product-price">Rp 340.000</p>
                <div className="counter">
                    <b className="minus">-</b>
                    <input type="text" value={3} />
                    <b className="plus">+</b>
                </div>
            </div>
            </Fragment>
        );

    }
}

export default Product;