import { Navigate, Route, Routes } from "react-router-dom"

import { HomePage, LoginPage, AboutPage, Page404 } from "./index.barril"

// Components
import { Navbar } from "./Navbar"

import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
    return (
        
        <UserProvider>
            {/* 
            Esto ya no se usa aqui, ahora usamos el componente "Link" que ofrece React Router
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/login">Login</a> */}
            <Navbar />
            <hr />

            <Routes>
                <Route path="/home" element={<HomePage />}/>
                <Route path="login" element={<LoginPage />}/>
                <Route path="about" element={<AboutPage />}/>

                {/* 404 */}
                {/* <Route path="/*" element={<AboutPage />}/> */}
                {/* Es mejor de esta manera */}
                <Route path="/*" element={<Navigate to={'/about'}/>}/>
            </Routes>
        </UserProvider>
    )
}
