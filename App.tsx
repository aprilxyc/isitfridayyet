import ReactDOM from 'react-dom';
import * as React from 'react';
import './app.css';
import { useEffect, useState } from 'react';

const App = () => {
    const [apiResponse, setAPIresponse] = useState('');
    useEffect(() => {
        const callAPI = async() => {
        fetch('http://localhost:9000/testAPI')
        .then(res => res.text())
        .then(res => setAPIresponse(res))
    }
        callAPI()
    }, [])

    return (
        <div className="landing-page">
            <div className="title">
                No
            </div>   
            <p>
                {apiResponse}
            </p>      
        </div>
    )
}

export default App;