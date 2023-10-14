import React, { Component, Fragment } from "react";
import './Product.css'

class Product extends Component {
    render (){
        return (
            <Fragment>
            <div className="header">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Realme-realme-_logo_box-RGB-01.png/800px-Realme-realme-_logo_box-RGB-01.png" alt="" />
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