import React, { Component } from "react";
import Counter from "./Counter";


class CardProduct extends Component {
    
    render (){
        return (
           
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://foto.kontan.co.id/OJC46TmlHXFukY8uL7wQreAEIjk=/smart/2023/06/14/558498256p.jpg" alt="product_image" />
                </div>
                <p className="product-tittle">Spesifikasi & Harga HP Realme C53: RAM 6GB + 6GB, Kamera 50MP, Hanya Rp 2,1 Juta</p>
                <p className="product-price">Rp 340.000</p>

                {/* mengirimkan value dari Counter change */}
                <Counter/>
            </div>
        );

    }
}

export default CardProduct;