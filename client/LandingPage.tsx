import * as React from 'react'
import { useEffect, useState } from 'react'
import nextFriday from 'date-fns/nextFriday'
import formatDuration from 'date-fns/formatDuration'
import intervalToDuration from 'date-fns/intervalToDuration'

// react components
import CursorEventListener from './CursorEventListener'

type mousePositionState = {
    x: number
    y: number
}

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
    const [apiResponse, setAPIresponse] = useState<string>('')
    const [countdown, setCountdown] = useState<string>('')
    const [isFriday, setIsFriday] = useState<boolean>(false)
    const [mousePosition, setMousePosition] = useState<mousePositionState>({
        x: 0,
        y: 0,
    })

    const calculateTransformCoords = (mouseCoordinates) => {
        return `translate(${mouseCoordinates.x}), ${mouseCoordinates.y}px`
    }
    console.log(
        window.addEventListener('mousemove', (e) => console.log('potato', e))
    )

    useEffect(() => {
        // const callAPI = async () => {
        //     fetch('http://localhost:9000/testAPI')
        //         .then((res) => res.text())
        //         .then((res) => setAPIresponse(res))
        // }
        // callAPI()

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.pageX, y: e.pageY })
        }

        window.addEventListener('mousemove', (e) => {
            updateMousePosition(e)
        })

        setInterval(() => {
            let timeUntilFriday = formatDateToWords()
            if (
                timeUntilFriday.startsWith('6 days') ||
                timeUntilFriday.startsWith('7 days')
            ) {
                setIsFriday(true)
            } else {
                setIsFriday(false)
            }

            setCountdown(timeUntilFriday)
        }, 500)

        return () =>
            window.removeEventListener('mousemove', updateMousePosition)
    })

    return (
        <div className="landing-page">
            <CursorEventListener mouseCoords={mousePosition} />
            <h1>NO</h1>
            <div>{isFriday ? 'ITS FRIDAY' : countdown}</div>
        </div>
    )
}

export default LandingPage
