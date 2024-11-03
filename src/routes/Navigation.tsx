import { Suspense } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import viteLogo from '/logo.svg';
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={viteLogo} alt="React Logo" />
                        <ul>
                            {
                                routes.map(({ to, name, path }) => (
                                    <li key={path}>
                                        <NavLink
                                            to={to}
                                            className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ path, Component }) => (
                                <Route
                                    path={path}
                                    key={path}
                                    element={<Component />}
                                />
                            ))
                        }

                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>

    );
}
