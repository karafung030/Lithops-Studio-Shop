import Title from "./Title"
import {Link} from 'react-router-dom'
import QuantityBtn from "./QuantityBtn"
import { cartContext } from "./CartContext"
import { useContext } from "react"

export default function Checkout() {
    let {cartItems} = useContext(cartContext)
    let cartEmpty = cartItems.length<=0 ? true : false

    let grandTotal = cartItems.reduce((total, product)=>{
        return total += product.price*product.quantity
    },0)
    const freeShippingPrice = 99

    return (
        <div className="card bg-light">
        <div className="container">
      <div className="mt-5">
        <h1 className="text-primary">你的購物車</h1>

        {cartEmpty ? (
          <div>
            <p>購物車現在沒有商品</p>
            <a href="/">去產品頁看看吧</a>
          </div>
        ) : (
          <div>
            <div id="cartSection">
              {cartItems.map((product) => (
                <div key={product.id} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={process.env.PUBLIC_URL + '/image/' + product.image}
                        alt={product.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">售價: {product.price}元</p>
                        <p className="card-text">購買數量: {product.quantity}</p>
                        <QuantityBtn productInfo={product} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div id="checkOutSection" className="mt-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>全部貨品總共</div>
                <div>{grandTotal}元</div>
              </div>

              {grandTotal >= freeShippingPrice ? (
                <div>我們免費送貨</div>
              ) : (
                <div>
                  滿${freeShippingPrice}免費送貨
                  <br />
                  還差${freeShippingPrice - grandTotal}
                </div>
              )}

              <div className="d-flex justify-content-end mt-4">
                <button className="btn btn-primary">付款</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    )
}
