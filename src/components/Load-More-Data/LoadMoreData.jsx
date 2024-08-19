import React, { useEffect, useState } from "react";
import "./style.css";

function LoadMoreData() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`
            );
            const result = await response.json();
            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false);
            }
            console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true)
    }, [products])


    if (loading) {
        return <div> loading data...!! Please Wait</div>;
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {products && products.length
                    ? products.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null}
                <div className="button-container">
                    <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Data </button>
                    {
                        disableButton ? <p>you have reached 100 products</p> : null
                    }
                </div>

            </div>

        </div>
    );
}

export default LoadMoreData;
