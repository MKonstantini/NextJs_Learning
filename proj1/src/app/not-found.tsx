import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <>
            <h1>404 Error - Page Not Found</h1>
            <Link href='/'>To Home</Link>
        </>
    )
}

export default NotFound