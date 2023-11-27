/*import {Link} from "react-router-dom"
import styles from './ProductList.module.css'
import {useState, useEffect} from "react"  //React Hook
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"

export default function ProductList() {

    let [productList, setProductList] = useState([])
    let [input , setInput] = useState('')

    //useEffect hook
    useEffect(()=>{

        //1 : 無第二個參數 : component每次render都會觸發
        //2 : Dependency Array是空array時 : 只會在第一次網頁render時會觸發
        //3 : Dependency Array是有變數時 : 第一次網頁render時 + 指定的變數改變 會觸發
        fetch('XXX.json')
            .then(response => response.json())
            .then(data => setProductList(data))

    },[]) // <==  Dependency Array

    return (
        <div>
            <Title mainTitle="請選擇要購買的水果" />
            
            <div>
                {
                    productList.map(product=>(
                        <div className={styles.productBorder} key={product.id}>
                            {product.name}<br/>
                            {product.price}元/件<br/>
                            <Link to={'/product/'+product.id}>
                            <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name} />
                            </Link>
                            <br/>
                            {product.description}<br/>
                            <QuantityBtn productInfo={product} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}*/
import { Link } from "react-router-dom";

import { useState } from "react";

import QuantityBtn from "./QuantityBtn";

export const productList = [
    {
      id: 1,
      name: "綠鑽",
      price: 15,
      image: "2_CYS2046.jpg",
      description: "「火龍果小時候」",
    },
    {
      id: 2,
      name: "銀之太鼓",
      price: 13,
      image: "2CYS_2000-567x378 (1).jpg",
      description: "「銀灰色系的多肉」",
    },
    {
        id: 3,
        name: "皺葉麒麟",
        price: 20,
        image: "DSC_01002-1-567x378.jpg",
        description: "「小巧的瑰寶」",
      },{
        id: 4,
        name: "白鳳",
        price: 18,
        image: "CYS_8109-567x378.jpg",
        description: "「多肉界的楊貴妃」",
      },{
        id: 5,
        name: "十二之卷",
        price: 23,
        image: "CYS_8187-567x378.jpg",
        description: "「長相奇特」",
      },
      {
        id: 6,
        name: "蝴蝶之舞錦",
        price: 19,
        image: "DSC_01572-567x378.jpg",
        description: "「一年四季都很美」",
      }
  ];

export default function ProductList() {
  let [productList, setProductList, ] = useState([
    {
      id: 1,
      name: "綠鑽",
      price: 15,
      image: "2_CYS2046.jpg",
      description: "「火龍果小時候」",
    },
    {
      id: 2,
      name: "銀之太鼓",
      price: 13,
      image: "2CYS_2000-567x378 (1).jpg",
      description: "「銀灰色系的多肉」",
    },
    {
        id: 3,
        name: "皺葉麒麟",
        price: 20,
        image: "DSC_01002-1-567x378.jpg",
        description: "「小巧的瑰寶」",
      },{
        id: 4,
        name: "白鳳",
        price: 18,
        image: "CYS_8109-567x378.jpg",
        description: "「多肉界的楊貴妃」",
      },{
        id: 5,
        name: "十二之卷",
        price: 23,
        image: "CYS_8187-567x378.jpg",
        description: "「長相奇特」",
      },
      {
        id: 6,
        name: "蝴蝶之舞錦",
        price: 19,
        image: "DSC_01572-567x378.jpg",
        description: "「一年四季都很美」",
      }
  ]);

  return (
    
    <div className="card bg-light">
      <div className="container">
        <div className="text-center">
        <div className="mt-5  justify-content-center">
          <h1 className="text-primary">請選擇要購買的多肉植物</h1>
          <div className="card-body">
            <div className="row">
              {productList.map((product) => (
                <div className="col-md-6" key={product.id}>
                  <div className="card border-primary">
                    <div className="card-body">
                      <h2 className="text-danger mb-3">{product.name}</h2>
                      <p className="text-success mb-3">{product.price}元/件</p>
                      <div className="mb-3">
                        <Link to={'/product/' + product.id}>
                          <img
                            src={process.env.PUBLIC_URL + '/image/' + product.image}
                            alt={product.name}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <p className="mb-3">{product.description}</p>
                      <QuantityBtn productInfo={product} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
          
}