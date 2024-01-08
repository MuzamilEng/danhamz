import React from 'react';
import Footer from '../Component/Common/Footer';
import Topbar from '../Component/Common/Topbar';
import Navbar from '../Component/Common/Navbar';

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
