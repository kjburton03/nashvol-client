import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteEvent, getEvents, joinEvent, leaveEvent } from "../../managers/EventManager"
import "./Event.css"
// import "./event.css"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])
    const navigate = useNavigate()
    const userId = parseInt(localStorage.getItem("nash_token"));

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    useEffect(() => {
        getEvents().then((data) => { 
          // Update addedByCurrentUser property for each book

        const updatedEvents = data.map((event) => ({
            ...event,
            addedByCurrentUser: event.volunteer?.id === parseInt(userId),
        }));

        setEvents(updatedEvents);
        });
    }, [userId]);
    
    const deleteButton = (id) => {
            deleteEvent(id)
            .then(() => {
                    getEvents().then(data => setEvents(data))
            
        })
    }


    return (
        <>
        <h1>Nashvols Last call volunteers</h1>
        <article className="events">
        <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
                navigate({ pathname: "/eventForm" })
                }}>Register New Event</button>
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <div className="event__name">{event.name}</div>
                        <div className="event__location"> Location: {event.location} </div>
                        <div className="event__date"> Date: {event.date} </div>
                        <div className="event__details">Details:  {event.details}</div>
                        <div className="event__type">Event Type:{event?.eventType?.eventType} </div>
                        {/* <div className="event__organizer"> Organized by {event.organizer}</div> */}
                        <div className="event__volunteers"> {event?.eventVolunteers?.length} Volunteers joined </div>
                        <div className="event__footer">
                        {event.organizerOfEvent ? (
                            <><button className="btn btn-2 btn-sep icon-create"
                                    onClick={() => {
                                        navigate({ pathname: `editevent/${event.id}` })
                                    } }>Edit</button><button className="btn btn-2 btn-sep icon-create"
                                        onClick={() => { deleteButton(event.id) } }>Delete</button></>                           

                
                ) : (
                <></>
                )}
                            {
                                event.joined 
                                ?
                                    <button
                                    onClick={() => {
                                        leaveEvent(event.id)
                                        .then(() => {
                                            getEvents().then(data => setEvents(data))
                                        })
                                    }} className = "btn2 btn-3 btn-sep icon-create">Leave</button>
                                :
                                    <button
                                    onClick={() => {
                                        joinEvent(event.id)
                                        .then(() => {
                                            getEvents().then(data => setEvents(data))
                                        })
                                    }} className = "btn2 btn-2 btn-sep icon-create">Join</button>
                            } 
                        </div>
                    </section>
                })
            }
        </article>
        </>
    )
}

                                // onClick={() => {
                                //     navigate({ pathname: `editevent/${event.id}` })
                                //     }}>Edit</button>
                                //     {deleteButton(event.id)}   