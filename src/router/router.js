import React from 'react'
import { Navigate } from "react-router-dom";
const WareHouse = React.lazy(()=>import('@/views/index'))
const Notfound = React.lazy(()=>import('@/views/notfound/Notfound'))

const routes = [
    {
        path:'/',
       element: <Navigate  to='/warehouse' />
    },
    {
        path: '/warehouse',
        element: <WareHouse />
    },
    {
        path: '*',
        element: <Notfound />
    }
]

export {routes}