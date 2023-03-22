export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("nash_token")}`
        }
    })
        .then(response => response.json())
}

export const getEventById = (id) => {
    return fetch(`http://localhost:8000/events/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("nash_token")}`
        }
    })
        .then(response => response.json())
}

export const createEvent = (event) => {
    return fetch("http://localhost:8000/events", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("nash_token")}`
        },
        body: JSON.stringify(event)
    })
    .then(response => response.json())
}

export const getEventTypes = () => {
    return fetch("http://localhost:8000/eventTypes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("nash_token")}`
        }
    })
    .then(response => response.json())
}

export const updateEvent = (event, id) => {
    return fetch(`http://localhost:8000/events/${id}`, {
    method: "PUT",
    headers: {
        "Authorization": `Token ${localStorage.getItem("nash_token")}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(event)
    })
}

export const deleteEvent = (id) => {
    return fetch(`http://localhost:8000/events/${id}`, 
    {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("nash_token")}`
        }
    })
}

export const leaveEvent = (id) => {
    // TODO: Write the DELETE fetch request to leave an event
    return fetch(`http://localhost:8000/events/${id}/leave`, 
    {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("nash_token")}`
        }
    })
}

export const joinEvent = (id) => {
      // TODO: Write the POST fetch request to join and event
    return fetch(`http://localhost:8000/events/${id}/signup`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("nash_token")}`
        },
        body: JSON.stringify(id)
    })
    .then(res => res.json())
}