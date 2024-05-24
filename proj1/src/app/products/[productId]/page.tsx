import React from 'react'

interface ProductDetailsProps {
    params: {
        productId: string;
    };
}

function ProductDetails({ params }: ProductDetailsProps) {
    return (
        <>
            <h1>Product Details</h1>
            <h2>Welcome to route: {params.productId}</h2>
        </>
    )
}

export default ProductDetails