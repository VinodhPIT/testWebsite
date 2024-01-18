import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";


export default function Header({ data }) {
  return (
    <header className="header_wrapper db_header_wrap">
      <div class="container-fluid pr_40 m_pr_12">
        <div class="row">
          <div class="col-md-12">
            <nav className="header_dashboard">
              <div className="header_logo_nav m_flex_direction_column">
                <div className="header_logo">
                  <Link href="#" className="navbar_brand">
                    <Image
                      src="/Inckd-logo-footer-black.svg"
                      alt="Logo"
                      width="105"
                      height="31"
                      priority
                    />
                  </Link>
                </div>
                <div className="header_db_title">
                  <h4>Customer analytics</h4>
                </div>
              </div>
              <div className="nav_block db_navigation">
                <ul className="nav main_nav navbar_collapse collapse">
                  <li className="nav_item active">
                    <Link href="#">Dashboard</Link>
                  </li>
                  <li className="nav_item">
                    <Link href="#">Menu 2</Link>
                  </li>
                  <li className="nav_item">
                    <Link href="#">Menu 3</Link>
                  </li>
                  <li className="nav_item">
                    <Link href="#">Menu 4</Link>
                  </li>
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
                    class="btn_secondary ml_10"
                    onClick={() => signOut({ callbackUrl: "/analytics/login" })}
                  >
                    {" "}
                    Logo out
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
