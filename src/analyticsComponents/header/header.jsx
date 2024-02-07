import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Header({ data }) {
  const handleSignOut = async () => {
    await signOut({ redirect: false });
  };
  const router = useRouter();

  const navigationItems = [
    { href: "/analytics/customer", label: "Customer" },
    { href: "/analytics/artist", label: "Artists" },
  ];

 


  return (
    <>
      <header className="header_wrapper db_header_wrap">
        <div className="container-fluid pr_40 m_pr_12">
          <div className="row">
            <div className="col-md-12">
              <nav className="header_dashboard">
                <div className="header_logo_nav">
                  <div className="header_logo">
                    <div className="navbar_brand">
                      <Image
                        src="/Inckd-logo-footer-black.svg"
                        alt="Logo"
                        width="105"
                        height="31"
                        priority
                      />
                    </div>
                    <div className="header_db_title_logo">
                      <h6>Analytics</h6>
                    </div>
                  </div>
                  {/* <div className="header_db_title">
                  <h4>Customer</h4>
                </div> */}
                </div>
                <div className="nav_block db_navigation">
                  <ul className="nav main_nav">
                    {navigationItems.map((item, index) => (
                      <li
                        key={index}
                        className={`nav_item ${
                          router.pathname === item.href ? "active" : ""
                        }`}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="header_right">
                  <div className="db_user_profile">
                    <span style={{ textTransform: "capitalize" }}>
                      Hello, {data}{" "}
                    </span>
                    <Image
                      src="/db_user_1.png"
                      alt="user"
                      width="40"
                      height="40"
                      priority
                      className="hidden"
                    />
                    <button
                      className="btn_secondary ml_10"
                      onClick={handleSignOut}
                    >
                      {" "}
                      Log out
                    </button>
                  </div>
                  <button
                    className="nav_btn_toggle"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                   
                    
                  >
                    <Image
                      src="/blackHamburger.svg"
                      alt="hamburger"
                      width={32}
                      height={32}
                      priority
                    />
                  </button>
                </div>

                <div
                  className="offcanvas offcanvas-end"
                
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <Image
                        src="/close.png"
                        width={50}
                        height={50}
                        alt="close"
                        priority
                      />
                    </button>
                  </div>
                  <div className="offcanvas-body">
                    <div className="nav_block">
                      <ul className="nav main_nav">
                        {navigationItems.map((item, index) => (
                          <li
                            key={index}
                            className={`nav_item ${
                              router.pathname === item.href ? "active" : ""
                            }`}
                          >
                            <Link href={item.href}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
