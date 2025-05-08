import React from 'react';
import footerLogo from '../../../public/footer.png'

const Footer = () => {
    return (
        <div className="w-full bg-base-200">
        <footer className="footer p-10 bg-base-200 text-base-content flex flex-wrap justify-between">
            <aside className="w-full md:w-auto">
                <img className='w-32' src={footerLogo} alt="" />
                <p>Job Portal Ltd.<br />Providing reliable Service since 1992</p>
            </aside>
            <nav className="w-full md:w-auto">
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="w-full md:w-auto">
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="w-full md:w-auto">
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    </div>
    );
};

export default Footer;