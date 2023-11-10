import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'
import Error from './UI/Error/Error';

export default function AppRouter() {
    const isAuth = true
    return (
        <main className='main'>
            <div className='container'>
                <div className='main__holder'>
                    {isAuth
                    ? <Routes>
                    {privateRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                        exact={route.exact}
                    />
                    ))}
                    <Route path="*" element={<Error />} />
                    </Routes>
                        : 
                        <Routes>
                        {publicRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                            exact={route.exact}
                        />
                        ))}
                        <Route path="*" element={<Error />} />
                        </Routes>
                    }
                </div>
            </div>
        </main>
    )
}
