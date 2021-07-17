import * as React from 'react'
import { useEffect, useState } from 'react'
import nextFriday from 'date-fns/nextFriday'
import formatDuration from 'date-fns/formatDuration'
import intervalToDuration from 'date-fns/intervalToDuration'

const formatDateToWords = () => {
    let today = new Date()
    let todaysDate: Date = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 5,
        today.getHours() + 5,
        today.getMinutes() + 28,
        today.getSeconds()
    )
    const dateOfNextFriday: Date = nextFriday(todaysDate)

    let duration = intervalToDuration({
        start: todaysDate,
        end: new Date(
            dateOfNextFriday.getFullYear(),
            dateOfNextFriday.getMonth(),
            dateOfNextFriday.getDate(),
            0,
            0,
            0
        ),
    })

    let countdownInWords = formatDuration(duration, {
        format: ['days', 'hours', 'minutes', 'seconds', 'milliseconds'],
    })

    return countdownInWords
}

const LandingPage = () => {
    const [apiResponse, setAPIresponse] = useState('')
    const [countdown, setCountdown] = useState('')
    const [isFriday, setIsFriday] = useState(false)

    useEffect(() => {
        const callAPI = async () => {
            fetch('http://localhost:9000/testAPI')
                .then((res) => res.text())
                .then((res) => setAPIresponse(res))
        }
        callAPI()
        setInterval(() => {
            let timeUntilFriday = formatDateToWords()
            if (
                timeUntilFriday.startsWith('6 days') ||
                timeUntilFriday.startsWith('7 days')
            ) {
                console.log('ITS FRIDAY!')
                setIsFriday(true)
            } else {
                setIsFriday(false)
            }

            setCountdown(timeUntilFriday)
        }, 500)
    }, [])

    return (
        <div className="landing-page">
            <h1>NO</h1>
            <div>{isFriday ? 'ITS FRIDAY' : countdown}</div>
        </div>
    )
}

export default LandingPage
