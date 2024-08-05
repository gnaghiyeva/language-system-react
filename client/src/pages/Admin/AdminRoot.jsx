import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Admin/Navbar';
import SignIn from '../auth/SignIn';

const AdminRoot = () => {
    const isAdmin = localStorage.getItem("isAdmin");
    const loggedIn = localStorage.getItem("loggedIn"); // Kullanıcının giriş yapıp yapmadığını kontrol edin
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Giriş durumu ve admin yetkisi kontrolü
        console.log("isAdmin:", isAdmin);
        console.log("loggedIn:", loggedIn);
        console.log("Current path:", location.pathname);

        // Eğer kullanıcı giriş yapmamışsa veya admin değilse ve auth sayfalarında değilse
        if ((!loggedIn || isAdmin !== "true") && location.pathname !== '/admin/login' && location.pathname !== '/admin/register') {
            navigate('/admin/login', { replace: true });
        }
    }, [isAdmin, loggedIn, location.pathname, navigate]);

    // Giriş sayfası ve kayıt sayfasına izin ver
    const isAuthPage = location.pathname === '/admin/register' || location.pathname === '/admin/login';

    return (
        <>
            {(isAdmin === "true" && loggedIn === "true") || isAuthPage ? (
                <>
                    <Navbar />
                    <Outlet />
                </>
            ) : (
                <SignIn />
            )}
        </>
    );
}

export default AdminRoot;


// import React, { useEffect } from 'react';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import Navbar from '../../components/Admin/Navbar';
// import SignIn from '../auth/SignIn';

// const AdminRoot = () => {
//     const isAdmin = localStorage.getItem("isAdmin");
//     const loggedIn = localStorage.getItem("loggedIn"); // Kullanıcının giriş yapıp yapmadığını kontrol edin
//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Giriş durumu ve admin yetkisi kontrolü
//         console.log("isAdmin:", isAdmin);
//         console.log("loggedIn:", loggedIn);
//         console.log("Current path:", location.pathname);

//         // Eğer kullanıcı giriş yapmamışsa veya admin değilse ve auth sayfalarında değilse
//         if ((!loggedIn || isAdmin !== "true") && location.pathname !== '/admin/login' && location.pathname !== '/admin/register') {
//             navigate('/admin/login', { replace: true });
//         }
//     }, [isAdmin, loggedIn, location.pathname, navigate]);

//     // Giriş sayfası ve kayıt sayfasına izin ver
//     const isAuthPage = location.pathname === '/admin/register' || location.pathname === '/admin/login';

//     return (
//         <>
//             {(isAdmin === "true" && loggedIn === "true") || isAuthPage ? (
//                 <>
//                     <Navbar />
//                     <Outlet />
//                 </>
//             ) : (
//                 <SignIn />
//             )}
//         </>
//     );
// }

// export default AdminRoot;
