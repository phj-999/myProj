import React from 'react'
import { Navigate } from "react-router-dom";
const RocketShuttle = React.lazy(()=>import('@/views/Rocket-Shuttle/index'))
const Notfound = React.lazy(()=>import('@/views/notfound/Notfound'))

const routes = [
    {
        path:'/',
       element: <Navigate  to='/rocket' />
    },
    {
        path: '/rocket',
        element: <RocketShuttle />
    },
    {
        path: '*',
        element: <Notfound />
    }
]

export {routes}