import AddProduct from "../pages/Admin/AddProduct";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import EditProduct from "../pages/Admin/EditProduct";
import Products from "../pages/Admin/Products";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import About from "../pages/Main/About";
import Contact from "../pages/Main/Contact";
import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";

export const ROUTES = [
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    },
    {
        path:'/admin',
        element:<AdminRoot/>,
        children:[
            {
                path: 'register',
                element: <SignUp />,
            },
            {
                path: 'login',
                element: <SignIn />,
            },
            {
                path: '',
                element: <Dashboard />,
            },
            {
                path:'products',
                element:<Products/>
            },
            {
                path:'add-product',
                element:<AddProduct/>
            },
            {
                path:'products/:id',
                element:<EditProduct/>
            }
        ]
    }
]