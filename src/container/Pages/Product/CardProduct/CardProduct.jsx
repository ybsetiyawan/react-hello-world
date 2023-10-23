import React, { Component } from "react";


class CardProduct extends Component {
    state = {
        order : 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue); 
    }

    handlePLus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0 ){
            this.setState({
                order: this.state.order - 1 
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
        
    }

    render (){
        return (
           
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://foto.kontan.co.id/OJC46TmlHXFukY8uL7wQreAEIjk=/smart/2023/06/14/558498256p.jpg" alt="product_image" />
                </div>
                <p className="product-tittle">Spesifikasi & Harga HP Realme C53: RAM 6GB + 6GB, Kamera 50MP, Hanya Rp 2,1 Juta</p>
                <p className="product-price">Rp 340.000</p>
                <div className="counter">
                    <b className="minus" onClick={this.handleMinus}>-</b>
                    <input type="text" value={this.state.order} />
                    <b className="plus" onClick={this.handlePLus}>+</b>
                </div>
            </div>
        );

    }
}

export default CardProduct;