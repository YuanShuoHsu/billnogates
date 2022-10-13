import React from 'react'
import "./index.scss"
import logo from "./../../images/logo.png"
import PRODUCTS from "../../dataset/product"
// 商品圖片大小建議 180px : 240px = 3 : 4

export default function Product() {
    return (
        <div className='product'>
            {
                PRODUCTS && PRODUCTS.map(item => (
                    <div className='box' key={item.id}>
                        <div className='photoContainer'>
                            <img className='photo' src={item.image} alt={item.name} />
                        </div>
                        <div className='name'>{item.name}</div>
                        <div className='price'>${item.price}</div>
                        <div className='addToCart'>加入購物車</div>
                    </div>
                ))
            }
            {/* <div className='box'>
                <div className='photoContainer'>
                    <img className='photo' src={logo} alt="示意圖" />
                </div>
                <div className='item'>商品</div>
                <div className='price'>NT$100</div>
                <div className='addToCart'>加入購物車</div>
            </div> */}
            {/* <div className='box'>
                <div className='photoContainer'>
                    <img className='photo' src={logo} alt="示意圖" />
                </div>
                <div className='item'>商品</div>
                <div className='price'>NT$100</div>
                <div className='addToCart'>加入購物車</div>
            </div>
            <div className='box'>
                <div className='photoContainer'>
                    <img className='photo' src={logo} alt="示意圖" />
                </div>
                <div className='item'>商品</div>
                <div className='price'>NT$100</div>
                <div className='addToCart'>加入購物車</div>
            </div>
            <div className='box'>
                <div className='photoContainer'>
                    <img className='photo' src={logo} alt="示意圖" />
                </div>
                <div className='item'>商品</div>
                <div className='price'>NT$100</div>
                <div className='addToCart'>加入購物車</div>
            </div>
            <div className='box'>
                <div className='photoContainer'>
                    <img className='photo' src={logo} alt="示意圖" />
                </div>
                <div className='item'>商品</div>
                <div className='price'>NT$100</div>
                <div className='addToCart'>加入購物車</div>
            </div> */}
        </div>
    )
}
