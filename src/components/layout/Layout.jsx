import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}
