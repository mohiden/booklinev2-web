import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { tabs } from '@components'

export const Sidebar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<number>(0);
    return (
        <div className="sidebar-wrapper sidebar-theme">
            <nav id="compactSidebar">
                <ul className="menu-categories">
                    <li className="menu ">
                        <a href="#dashboard" data-active="true" className="menu-toggle">
                            <div className="base-menu">
                                <div className="base-icons">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                </div>
                                <span>Dashboard</span>
                            </div>
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
                    </li>

                </ul>
            </nav>
            <div id="compact_submenuSidebar" className="submenu-sidebar">
                <div className="submenu" id="dashboard">
                    <ul className="submenu-list" data-parent-element="#dashboard">
                        {
                            tabs.map((tab, idx) => (
                                <li key={idx} onClick={() => {
                                    setActiveLink(idx);
                                    document.querySelector('.submenu-sidebar')?.classList.remove("show");
                                }} className={activeLink === idx ? 'active' : ''}>
                                    <NavLink to={tab.path}>
                                        {tab.icon}
                                        {tab.title} </NavLink>
                                </li>

                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

