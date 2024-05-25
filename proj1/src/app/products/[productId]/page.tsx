import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next';

interface ProductDetailsProps {
    params: {
        productId: string;
    };
}

export const generateMetadata = ({ params }: ProductDetailsProps): Metadata => {
    return {
        title: params.productId
    }
}

function ProductDetails({ params }: ProductDetailsProps) {
    if (parseInt(params.productId) > 10) {
        return notFound()
    }
    return (
        <>
            <h1>Product Details</h1>
            <h2>Welcome to route: {params.productId}</h2>
        </>
    )
}

export default ProductDetails