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
                    <div className={`sidebar-button mobile-menu-btn ${state.isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar}>
                        <span />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
