import { Navigate, Outlet } from "react-router-dom"

export const Authorized = () => {
if (localStorage.getItem("nash_token")) {
    return <Outlet />
}
return <Navigate to='/login' replace />
}
// import { Navigate, useLocation } from "react-router-dom"

// export const Authorized = ({ children }) => {
//     const location = useLocation()

//     if (localStorage.getItem("nash_token")) {
//         return children
//     }
//     else {
//         return <Navigate
//             to={`/login/${location.search}`}
//             replace
//             state={{ location }} />
//     }
// }

