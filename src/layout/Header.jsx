import React, { useEffect, useReducer, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cart from '../components/common/Cart'
const initialState = {
    activeMenu: "",
    activeSubMenu: "",
    isSidebarOpen: false,
    isLeftSidebarOpen: false,
};
function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_MENU":
            return {
                ...state,

                activeMenu: state.activeMenu === action.menu ? "" : action.menu,
                activeSubMenu:
                    state.activeMenu === action.menu ? state.activeSubMenu : "",
            };
        case "TOGGLE_SUB_MENU":
            return {
                ...state,
                activeSubMenu:
                    state.activeSubMenu === action.subMenu ? "" : action.subMenu,
            };
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,
            };
        case "setScrollY":
            return { ...state, scrollY: action.payload };
        case "TOGGLE_LEFT_SIDEBAR":
            return {
                ...state,
                isLeftSidebarOpen: !state.isLeftSidebarOpen,
            };
        default:
            return state;
    }
}


const Header = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const headerRef = useRef(null);
    const handleScroll = () => {
        const { scrollY } = window;
        dispatch({ type: "setScrollY", payload: scrollY });
    };
    const currentRoute = useRouter().pathname;
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const toggleMenu = (menu) => {
        dispatch({ type: "TOGGLE_MENU", menu });
    };

    const toggleSubMenu = (subMenu) => {
        dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
    };
    const toggleSidebar = () => {
        dispatch({ type: "TOGGLE_MENU", menu: "" });
        dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };
    return (
        <header ref={headerRef} className={`header-area ${state.scrollY > 10 ? "sticky" : ""}`}>
            <div className="container-xxl container-fluid position-relative  d-flex flex-nowrap align-items-center justify-content-between">
                <div className="header-logo d-lg-none d-flex">
                    <Link legacyBehavior href="/"><a><img alt="image" className="img-fluid" src="/assets/img/Zidkart logo.png" width={100} /></a></Link>
                </div>
                <div className="category-dropdown">
                    <div className="category-button" onClick={() => toggleMenu("categoryModal")}>
                        <img src="/assets/img/home1/icon/category-icon.svg" alt="" />
                        <span>Category</span>
                    </div>
                </div>
                <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
                    <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                        <div className="mobile-logo-wrap">
                            <Link legacyBehavior href="/"><a><img alt="image" src="/assets/img/Zidkart logo.png" width={100} /></a></Link>
                        </div>
                    </div>
                    <ul className="menu-list">
                        <li className="menu-item-has-children">
                            <a href="#Cycling" className="drop-down">Dryfruits</a>
                        </li>
                    </ul>
                    <div className="d-lg-none d-block">
                        <form className="mobile-menu-form d-lg-none d-block pt-50">
                            <div className="input-with-btn d-flex flex-column">
                                <input type="text" placeholder="Search here..." />
                                <button type="submit" className="primary-btn1 hover-btn3">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="nav-right d-flex jsutify-content-end align-items-center">
                    {/* Button trigger modal */}
                    <div className="dropdown">

                        <Cart />
                    </div>
                    <div className="save-btn">
                        <a>
                            <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_68_10)">
                                    <path d="M16.528 2.20922C16.0674 1.71414 15.5099 1.31909 14.8902 1.04862C14.2704 0.778143 13.6017 0.638026 12.9255 0.636976C12.2487 0.637756 11.5794 0.777669 10.959 1.04803C10.3386 1.31839 9.78042 1.71341 9.31911 2.20857L9.00132 2.54439L8.68352 2.20857C6.83326 0.217182 3.71893 0.102819 1.72758 1.95309C1.63932 2.0351 1.5541 2.12032 1.47209 2.20857C-0.490696 4.32568 -0.490696 7.59756 1.47209 9.71466L8.5343 17.1622C8.77862 17.4201 9.18579 17.4312 9.44373 17.1869C9.45217 17.1789 9.46039 17.1707 9.46838 17.1622L16.528 9.71466C18.4907 7.59779 18.4907 4.32609 16.528 2.20922ZM15.5971 8.82882H15.5965L9.00132 15.7849L2.40553 8.82882C0.90608 7.21116 0.90608 4.71143 2.40553 3.09377C3.76722 1.61792 6.06755 1.52538 7.5434 2.88706C7.61505 2.95317 7.68401 3.02213 7.75012 3.09377L8.5343 3.92107C8.79272 4.17784 9.20995 4.17784 9.46838 3.92107L10.2526 3.09441C11.6142 1.61856 13.9146 1.52602 15.3904 2.8877C15.4621 2.95381 15.531 3.02277 15.5971 3.09441C17.1096 4.71464 17.1207 7.21893 15.5971 8.82882Z" />
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className={`sidebar-button mobile-menu-btn ${state.isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar}>
                        <span />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
