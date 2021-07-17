import * as React from 'react'
import { useEffect } from 'react'
import './app.css'

import LandingPage from './client/LandingPage'
import { io } from 'socket.io-client'

const App = () => {
    useEffect(() => {
        io('http://localhost:9000')
    })

    return (
        <div className="app-page">
            <LandingPage />
        </div>
    )
}

export default App
