"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HintLogo from "../../assets/images/hint-logo.svg";
import { GLOBAL_CONSTANTS } from "@/utils/constants/global.constants";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>,id: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    router.push(`/#${id}`); // Navigates to the section directly
  };
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light main-nav-container">
      <div className="container-fluid sub-container">
        <Link href="/" className="navbar-brand">
          <Image src={HintLogo} alt="hint-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {GLOBAL_CONSTANTS.HOME_NAVLINKS}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#our-services" onClick={(e) => handleScroll(e, "our-services")}>
                {GLOBAL_CONSTANTS.SERVICES_NAVLINKS}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about-us" onClick={(e) => handleScroll(e, "about-us")} >
                {GLOBAL_CONSTANTS.ABOUTUS_NAVLINKS}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#hint-us"  onClick={(e) => handleScroll(e, "hint-us")}>
                {GLOBAL_CONSTANTS.HINTUS_NAVLINKS}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact-us" onClick={(e) => handleScroll(e, "contact-us")}>
                {GLOBAL_CONSTANTS.CONTACT_NAVLINKS}
              </a>
            </li>
            <li className="nav-item log-in-container">
              <a
                className="nav-link"
                href={user?.name || user?.email ? "/profile" : "/auth"}
              >
                {user?.name || user?.email || GLOBAL_CONSTANTS.SIGNIN_NAVLINKS}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
