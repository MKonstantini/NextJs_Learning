import React from 'react'

interface DocsParams {
    params: {
        slug?: string[]
    }
}

function Docs({ params }: DocsParams) {
    if (params.slug?.length === 2) {
        return <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
    }
    else if (params.slug?.length === 1) {
        return <h1>Viewing docs for feature {params.slug[0]}</h1>
    }

    return (
        <h1>Docs Home Page</h1>
    )
}

export default Docs