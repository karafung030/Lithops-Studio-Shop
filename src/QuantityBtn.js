import React, { useContext,useState } from 'react'
import { cartContext } from './CartContext'

export default function QuantityBtn({productInfo}) {

    const{cartItems, setCartItems} = useContext(cartContext)

    //睇下購物車有無對應既產品
    let productIndexInCart = cartItems.findIndex((element)=>{
        return element.id === productInfo.id
    })
    //findIndex
    //如果係購物車内找到該件產品 => 返回索引位置 0，1，2，3....
    //該件產品沒有被加入到購物車  =>返回-1

    let [numInCart,setNumInCart] = useState(
        (productIndexInCart=== -1) ? 0 :cartItems[productIndexInCart].quantity

       )

       const handleAdd = ()=>{

        if(productIndexInCart===-1)
        {
            //購物車本身沒有，在cartItems array中加個新element (object)
            setCartItems(
                [{
                    id : productInfo.id,
                    name:productInfo.name,
                    image:productInfo.image,
                    price:productInfo.price,
                    description:productInfo.description,
                    quantity:1
                },
                ...cartItems]
            )
        }
        else
        {
            //購物車有該產品，只加個quantity
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart+1)
    }

    const handleSubtract = ()=>{

        if(cartItems[productIndexInCart].quantity===1)
        {
            //購在物車中只剩一件的話，remove object
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)
        }
        else
        {
            //只減個quantity
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart-1)
    }

    return (
        <div className=" align-items-center">
      {numInCart === 0 ? (
        <button className="btn btn-danger me-2" onClick={handleAdd}>加入購物車</button>
      ) : (
        <div className=" align-items-center">
          <button className="btn btn-success me-2" onClick={handleSubtract}>-</button>
          <span>{numInCart}件</span>
          <button className="btn btn-success ms-2" onClick={handleAdd}>+</button>
        </div>
      )}
    </div>
    )
}