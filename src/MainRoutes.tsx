import React from 'react'
import { Route, Routes } from 'react-router'
import { Dashboard, Login } from '@sections'
import App from './App'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<App />} />
            <Route path="/app/*" element={<Dashboard />} />
            <Route path="/login/*" element={<Login />} />
        </Routes>
    )
}

