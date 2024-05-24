import React from 'react'

interface ReviewIdParams {
    params: {
        productId: string,
        reviewId: string
    }
}

function ReviewId({ params }: ReviewIdParams) {
    return (
        <div>
            <h1>PRODUCT REVIEW BY ID</h1>
            <h2>product id: {params.productId}</h2>
            <h2>review id: {params.reviewId}</h2>
        </div>
    )
}

export default ReviewId