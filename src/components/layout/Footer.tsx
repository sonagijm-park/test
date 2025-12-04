import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 p-4 mt-auto">
            <div className="container mx-auto text-center text-sm">
                &copy; {new Date().getFullYear()} Ranger Guard. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
