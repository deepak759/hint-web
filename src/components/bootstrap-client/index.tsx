"use client"

import { useEffect } from "react";

const BootstrapClient = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".main-nav-container ul .nav-item .nav-link");
        navLinks.forEach((item: HTMLAnchorElement) => {
            item.addEventListener('click', function () {
                navLinks.forEach((link: HTMLAnchorElement) => link.classList.remove('active'));
                this.classList.add('active');
            });
        });

    }, []);

};

export default BootstrapClient;