import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import FormComponent from "../components/form/FormComponent";


const routers = [{
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
        {index: true, element: <Navigate to={'form'}/>},
        {path:'form', element: <FormComponent/>}
    ]
}]

export const router = createBrowserRouter(routers);