/*import {useParams, Link} from "react-router-dom"
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"
import { useState,useEffect } from "react"

export default function ProductDetail() {

    let params = useParams()
    let [productDetail,setProductDetail] = useState(null)

    useEffect(()=>{

        //1 : 無第二個參數 : component每次render都會觸發
        //2 : Dependency Array是空array時 : 只會在第一次網頁render時會觸發
        //3 : Dependency Array是有變數時 : 第一次網頁render時 + 指定的變數改變 會觸發
        fetch('XXX.json')
            .then(response => response.json())
            .then(data => {
                let productInfo = data.find((element)=>{
                    return element.id === parseInt(params.id)
                })
                setProductDetail(productInfo)
            })
    },[]) // <==  Dependency Array

    return (
        <div>
            {
                productDetail &&
                <div>
                    <Title mainTitle={productDetail.name+'產品資料'} />
                    <img src={process.env.PUBLIC_URL+'/img/'+productDetail.image} alt={productDetail.name} width="400" />
                    <p>名稱 : {productDetail.name}</p>
                    <p>售價 : {productDetail.price}元</p>
                    <p>描述 : {productDetail.description}</p>
                    <QuantityBtn productInfo={productDetail} />
                </div>
            }
        
            <Link to="/">回到產品列表</Link>
        </div>
    )
}上面係利用api去import返數據，好處係能隨時跟返個json檔更新，或者放更多資料出黎
下面係我自己想利用parms去定義返個別id,直接係arraylist抽出黎用*/
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { productList } from "./ProductList";

import QuantityBtn from "./QuantityBtn";

export default function ProductDetail() {
    let params = useParams();
    let [productDetail, setProductDetail] = useState(null);
  
    useEffect(() => {
      let productInfo = productList.find((element) => {
        return element.id === parseInt(params.id);
      });
      setProductDetail(productInfo);
    }, [params.id]);
  

  return (
    <div className="card bg-light">
    <div className="container">
      {productDetail && (
        <div className="mt-5  justify-content-center">
          <h1 className="text-primary">{productDetail.name}產品資料</h1>
          <img
            src={process.env.PUBLIC_URL + '/image/' + productDetail.image}
            alt={productDetail.name}
            className="img-fluid"
            width="400"
          />
          <p className="mt-3">名稱: {productDetail.name}</p>
          <p>售價: {productDetail.price}元</p>
          <p>描述: {productDetail.description}</p>
          <QuantityBtn productInfo={productDetail} />
        </div>
      )}

      <Link to="/" className="btn btn-primary mt-3">回到產品列表</Link>
    </div>
    </div>
  );
}
