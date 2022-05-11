import React, { lazy } from 'react';
//import { RouteObject } from "react-router-dom";
const Home = lazy(() => import('@/views/Home'));
const Login = lazy(() => import('@/views/Login'));
const NotFound = lazy(() => '@/views/Notfound');

//const routes: RouteObject[] = [
const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
    //children: [{path:'list'}]
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes