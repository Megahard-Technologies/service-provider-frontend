import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import './index.css'
import Register from './routes/register/register.tsx'
import ErrorPage from "./error-page.tsx";
import Login from "./routes/login/login.tsx";
import Home from "./routes/home/home.tsx";
import EditEvent from "./routes/editEvent/editEvent.tsx";
import AddEvent from "./routes/addEvent/addEvent.tsx";
import About from "./routes/about/about.tsx";
import EditAbout from "./routes/editAbout/editAbout.tsx";
import CompleteRegistration from "./routes/completeRegistration/completeRegistration.tsx";
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Register/>,
        errorElement: <ErrorPage/>,

    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/editEvent",
        element: <EditEvent/>
    },
    {
        path: "/addEvent",
        element: <AddEvent/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/editAbout",
        element: <EditAbout/>
    },
    {
        path: "/error",
        element: <ErrorPage/>
    },
    {
        path: "/completeRegistration",
        element: <CompleteRegistration/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
            <RouterProvider router={router}/>
        </LocalizationProvider>
    </React.StrictMode>,
)
