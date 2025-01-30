import { useAppSelector } from 'app/hooks'
import { selectCurrentUser } from 'features/auth/slice/authSlice'
import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
    const { user } = useAppSelector(selectCurrentUser)
    const location = useLocation()

    return user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : user ? (
        <Navigate to="anauthorized" state={{ form: location }} replace />
    ) : (
        <Navigate to="auth" state={{ form: location }} replace />
    )
}

export default ProtectedRoute