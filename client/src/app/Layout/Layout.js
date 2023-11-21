import React from 'react';
import Footer from '../Component/Footer';
import Topbar from '../Component/Topbar';
import Navbar from '../Component/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <main className="bg-gray-300 relative w-full h-screen overflow-x-hidden">
            <Topbar />
            <Navbar />
            {children}
            <Footer />
            </main>
        </div>
    );
};

export default Layout;
