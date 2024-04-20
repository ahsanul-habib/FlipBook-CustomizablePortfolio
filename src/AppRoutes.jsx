import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppProd from './AppProd';
import AppDev from './AppDev';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' index={true} element={<AppDev />} />
                <Route path='/prod' element={<AppProd />} />
                <Route path='/dev' element={<AppDev />} />
                <Route path='/*' element={<AppDev />} />
            </Routes>
        </BrowserRouter>
    )
}