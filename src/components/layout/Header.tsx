import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-slate-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight text-blue-500">
                    Ranger Guard
                </h1>
                <nav>
                    {/* Navigation items will go here */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
