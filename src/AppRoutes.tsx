import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Home, Login } from '@pages'
import { NotFound } from '@components'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/app/*" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
        </Routes>
    )
}

