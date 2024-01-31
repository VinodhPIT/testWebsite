import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header({ data, type }) {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({callbackUrl:"/analytics/login"}); 
  };


  return (
    <header className="header_wrapper db_header_wrap">
      <div className="container-fluid pr_40 m_pr_12">
        <div className="row">
          <div className="col-md-12">
            <nav className="header_dashboard">
              <div className="header_logo_nav m_flex_direction_column">
                <div className="header_logo">
                  <div  className="navbar_brand">
                    <Image
                      src="/Inckd-logo-footer-black.svg"
                      alt="Logo"
                      width="105"
                      height="31"
                      priority
                    />
                  </div>
                </div>
                <div className="header_db_title">
                  <h4>{`${type === "artist" ? 'Artist' : 'Customer'} analytics`}</h4>
                </div>
              </div>
              <div className="nav_block db_navigation">
                <ul className="nav main_nav navbar_collapse collapse">
                  <li className="nav_item active">
                    <Link href="#">Customer</Link>
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
                    className="btn_secondary ml_10"
                    
                    onClick={handleSignOut}
                  >
                    {" "}
                    Log out
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
