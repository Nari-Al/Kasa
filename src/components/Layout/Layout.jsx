import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children} {/* The dynamic content of my pages */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;