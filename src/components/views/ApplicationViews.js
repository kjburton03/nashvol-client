import { Route, Routes } from "react-router-dom"
import { EventList } from "../event/EventList"

// import { updateEvent } from "../../managers/EventManager"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { Authorized } from "./Authorized"
import { EventForm } from "../event/EventForm"
import { UpdateEvent } from "../event/UpdateEvent"




export const ApplicationViews = () => {
	return <>
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			{/* <Route element={<Authorized />}> */}
			<Route path="/events" element={<EventList />} />
			{/* <Route path="/events" element={<EventList />} /> */}
			<Route path="/eventform" element={<EventForm />} />
			<Route path="editevent/:eventId" element={<UpdateEvent />} />
			{/* </Route> */}
		</Routes>
	</>

}

{/* <Routes>

<Route path="events" >
	<Route path="/eventList" element= {<EventList />} /> 
	<Route path="/new" element={<EventForm />} /> 
</Route>
<Route path="edit/:eventId" element={<updateEvent />} />
</Routes> */}
