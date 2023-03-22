// import React, { useEffect, useState } from "react"
// import { useNavigate, navigate } from "react-router-dom"
// import { getEvents } from "../../managers/EventManager.js"

// export const EventList = (props) => {
//     const [ events, setEvents ] = useState([])

//     useEffect(() => {
//         getEvents().then(data => setEvents(data))
//     }, [])

//     return (
//         <>
//         <button className="btn btn-2 btn-sep icon-create"
//             onClick={() => {
//                 navigate({ pathname: "/events/new" })
//                 }}>Register New Event</button>
//         <article className="events">
//             {
//                 events.map(event => {
//                     return <section key={`event--${event.id}`} className="event">
//                         {/* <div className="event__title">{event.title} by {event.organizer}</div> */}
//                         {/* <div className="event__players">{event.number_of_players} players needed</div> */}
//                         {/* <div className="game__skillLevel">Skill level is {game.skill_level}</div> */}
//                     </section>
//                 })
//             }
//         </article>
//         </>
//     )
// }

// // import React, { useEffect, useState } from "react"
// // import { useNavigate } from "react-router-dom"
// // import { deleteEvent, getEvents, joinEvent, leaveEvent } from "../../managers/EventManager"
// // import "./event.css"

// // export const EventList = (props) => {
// //     const [ events, setEvents ] = useState([])
// //     const navigate = useNavigate()

// //     useEffect(() => {
// //         getEvents().then(data => setEvents(data))
// //     }, [])

// //     const deleteButton = (id) => {
// //         return <button onClick={() => {
// //             deleteEvent(id)
// //             .then(() => {
// //                     getEvents().then(data => setEvents(data))
// //                 })
            
// //         }} className="btn2 btn-2 btn-sep icon-create">Delete</button>
// //     }

// //     return (
// //         <>
// //         <button className="btn btn-2 btn-sep icon-create"
// //             onClick={() => {
// //                 navigate({ pathname: "/events/new" })
// //                 }}>Register New Event</button>
// //         <article className="events">
// //             {
// //                 events.map(event => {
// //                     return <section key={`event--${event.id}`} className="event">
                        
// //                         <div className="event__location"> Location: {event.location} </div>
// //                         <div className="event__date"> Date: {event.date} </div>
// //                         <div className="event__details">Details:  {event.details}</div>
// //                         <div className="event__organizer">{event.title} Organized by {event.organizing_volunteer.full_name}</div>
// //                         <div className="event__footer">
// //                             <button className="btn btn-2 btn-sep icon-create"
// //                                 onClick={() => {
// //                                     navigate({ pathname: `edit/${event.id}` })
// //                                     }}>Edit</button>
// //                                     {deleteButton(event.id)}   
                        
// //                             {
// //                                 event.joined 
// //                                 ?
// //                                     <button
// //                                     onClick={() => {
// //                                         leaveEvent(event.id)
// //                                         .then(() => {
// //                                             getEvents().then(data => setEvents(data))
// //                                         })
// //                                     }} className = "btn2 btn-3 btn-sep icon-create">Leave</button>
// //                                 :
// //                                     <button
// //                                     onClick={() => {
// //                                         joinEvent(event.id)
// //                                         .then(() => {
// //                                             getEvents().then(data => setEvents(data))
// //                                         })
// //                                     }} className = "btn2 btn-2 btn-sep icon-create">Join</button>
// //                             } 
// //                         </div>
// //                     </section>
// //                 })
// //             }
// //         </article>
// //         </>
// //     )
// // }