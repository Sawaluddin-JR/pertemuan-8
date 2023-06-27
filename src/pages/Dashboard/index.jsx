/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../../components/Card'
import './dashboard.css'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

const Dashboard = () => {
    const [searchProduct, setSearchProduct] = useState('');
    const [sortBy, setSortBy] = useState('id');
    const [typeSort, setTypeSort] = useState('asc');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);
    const [page, setPage] = useState(1);

    // menginisialisai useNavigate agar bisa digunakan 
    const navigate = useNavigate()

    //menginisialisasi product berdasarkan sorBy dan typeSort
    let productBiasa = listProduct.toSorted((a, b) => {
        if (typeSort == 'asc') {
            return a[sortBy] < b[sortBy] ? -1 : 1;
        }
        else {
            return a[sortBy] > b[sortBy] ? -1 : 1;
        }
        //setelah di sorting product akan di filter berdasarkan kondisi pencarian,
        // minimal price,dan maksimal price.
    }).filter((product) => product.productName.toLowerCase().includes(searchProduct)
        && product.productPrice > minPrice && product.productPrice < maxPrice)

    // function untuk menavigasi ke detail produk 
    const toDetailProduct = (e) => {
        // cara navigasi router melalui function 
        navigate(`/detail-produk/${e}`)
        //e merupakan id produk yang akan dikirim melalui router params
    }
    return (
        <div>
            <marquee direction="">Panji Gumilang pernah berkata ”Tanpa pengalaman yang konkret, falsafah negara tidak berarti apa-apa. Hanya akan menjadi kata-kata mutiara yang kehilangan makna”.</marquee>
            <div className='wrapper-action'>
                <div className='search-input'>
                    <label htmlFor="">Search : </label>
                    <input type="text" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
                    {/* <button onClick={cariProduk}>Cari</button> */}
                </div>
                <div className='wrapper-cari'>
                    <label>Minimal Harga</label>
                    <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                </div>
                <div className='wrapper-cari'>
                    <label>Maksimal Harga</label>
                    <input type="number" value={maxPrice} onChange={(e) => {
                        e.target.value ? setMaxPrice(e.target.value) : setMaxPrice(Infinity)
                    }} />
                </div>
                <div className="wrapper-cari">
                    <label>Sorting By</label>
                    <select name="sortingBy" id="sortingBy" className='select-input' onChange={(e) => setSortBy(e.target.value)}>
                        <option value="kategori">Pilih Kategori</option>
                        <option value="id">ID</option>
                        <option value="name">Nama produk</option>
                        <option value="price">Harga produk</option>
                    </select>
                </div>
                <div className="wrapper-cari">
                    <label>Type Sort</label>
                    <select name="sorting" id="sorting" className='select-input' onChange={(e) => setTypeSort(e.target.value)}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            <div className='wrapper-product'>
                {
                    // sebelum ditampilkan, di filter terlebih dahulu berdasarkan page 
                    // 4 disini adalah berapa product yang ditampilkan di setiap pagenya 
                    // _product adalah variabel param yang tidak digunakan maka ditambah _ didepan nama variabelnya 
                    productBiasa
                        .filter((_product, i) => i < 4 * page && i >= 4 * page - 4)
                        .map((x) => {
                            return <Card key={x.id}>
                                <img className='card-img' src={x.urlImage} alt={x.urlurlImage} />
                                <p className='card-name'>{x.productName}</p>
                                <p className='card-price'>RP.{x.productPrice.toLocaleString('id-ID')}</p>
                                <button onClick={() => toDetailProduct(x.id)} className='btn-pagination'>Detail Produk</button>
                            </Card>
                        })
                }
            </div>
            {/* tampilan button pagination dan page yang saat ini ditampilkan  */}
            <div className='wrapper-pagination'>
                <button onClick={() => setPage(page - 1)} disabled={page == 1} className='btn-pagination'><BiArrowToLeft size={16} /> Sebelumnya</button>
                <span>{page}</span>
                <button onClick={() => setPage(page + 1)} disabled={page == Math.ceil(productBiasa.length / 4)} className='btn-pagination'>Selanjutnya <BiArrowToRight size={16} /> </button>
            </div>
        </div>
    )
}

export default Dashboard