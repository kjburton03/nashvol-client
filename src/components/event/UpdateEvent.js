import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getEventById, getEventTypes, updateEvent } from "../../managers/EventManager.js"
import './Event.css'

export const UpdateEvent = () => {
    const navigate = useNavigate()
    const [events, setEvents] = useState([
        {
         id: 0
        } 
     ])
    const [eventTypes, setEventTypes] = useState ([ 
        {
            id: 0
        }
    ])
    const { eventId } = useParams()
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
        const [currentEvent, setCurrentEvent] = useState({
            name: "",
            location: "",
            date: "",
            details: "",
            eventType: 0
        })

    useEffect(() => {
        // TODO: Get the game types, then set the state
        getEventById(eventId).then((data) => {
            setCurrentEvent(data)
        })
        getEventTypes(eventId).then((data) => { setEventTypes(data)})

    }, [eventId])

    const changeEventState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = { ...currentEvent }
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentEvent(copy)
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">Update Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="details">Details: </label>
                    <input type="text" name="details" required autoFocus className="form-control"
                        value={currentEvent.details}
                        onChange={changeEventState}
                    />
                    <label htmlFor="location">Location: </label>
                    <input type="text" name="location" required autoFocus className="form-control"
                        value={currentEvent.location}
                        onChange={changeEventState}
                    />
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        value={currentEvent.date}
                        onChange={changeEventState}
                    />
                    <label className="label">Event Type: </label>
                    <select
                        name="eventType"
                        className="form-control"
                        value={currentEvent.eventType}
                        onChange={(event) => {
                            const copy = { ...currentEvent }
                            copy.eventType = parseInt(event.target.value)
                            setCurrentEvent(copy)
                        }} >
                        <option value="0">Choose:</option>
                        {eventTypes.map(events => ( 
                                    <option key={`event--${events.id}`} value={events.id} name={events.eventType}>{events.eventType}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const event = {
                        organizing_volunteer: currentEvent.organizing_volunteer,
                        location: (currentEvent.location),
                        date: (currentEvent.date),
                        name: (currentEvent.name),
                        details: (currentEvent.details),
                        eventType: (currentEvent.eventType)
                    }

                    // Send POST request to your API
                    updateEvent(event, eventId)
                        .then(() => navigate("/events"))
                }}
                className="btn btn-primary">Update</button>
        </form>
    )
}