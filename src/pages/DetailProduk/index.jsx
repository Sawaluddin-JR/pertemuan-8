/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

const listProduct = [
  {
    id: 1,
    productName: "MacBook Air 15”",
    urlImage: "/macbook_air_15.jpg",
    productPrice: 26999999,
  },
  {
    id: 2,
    productName: "iPhone 14 Pro",
    urlImage: "/iphone_14_pro.jpg",
    productPrice: 19999999,
  },
  {
    id: 3,
    productName: "iPhone 14",
    urlImage: "/iphone_14.jpg",
    productPrice: 15999999,
  },
  {
    id: 4,
    productName: "Apple Vision Pro",
    urlImage: "/apple_vision_pro.jpg",
    productPrice: 66999999,
  },
  {
    id: 5,
    productName: "Apple Watch Series 8",
    urlImage: "apple_watch_series_8.jpg",
    productPrice: 7999999,
  },
  {
    id: 6,
    productName: "iPad Pro",
    urlImage: "/ipad_pro.jpg",
    productPrice: 15999999,
  },
  {
    id: 7,
    productName: "MacBook Air 15”",
    urlImage: "/macbook_air_15.jpg",
    productPrice: 26999999,
  },
  {
    id: 8,
    productName: "iPhone 14 Pro",
    urlImage: "/iphone_14_pro.jpg",
    productPrice: 19999999,
  },
  {
    id: 9,
    productName: "iPhone 14",
    urlImage: "/iphone_14.jpg",
    productPrice: 15999999,
  },
  {
    id: 10,
    productName: "Apple Vision Pro",
    urlImage: "/apple_vision_pro.jpg",
    productPrice: 66999999,
  },
  {
    id: 11,
    productName: "Apple Watch Series 8",
    urlImage: "apple_watch_series_8.jpg",
    productPrice: 7999999,
  },
  {
    id: 12,
    productName: "iPad Pro",
    urlImage: "/ipad_pro.jpg",
    productPrice: 15999999,
  },
];

const DetailProduct = () => {
  const { idProduk } = useParams()
  const produk = listProduct.find((product) => product.id == idProduk);
  return (
    <div>
      <p>{produk.productName}</p>
      <p>{produk.productPrice}</p>
    </div>
  )
}

export default DetailProduct