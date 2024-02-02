import React ,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header({ data }) {
  const handleSignOut = async () => {
    await signOut({ redirect: false });
  };

 
  return (
    <> 
    <header className="header_wrapper db_header_wrap">
      <div className="container-fluid pr_40 m_pr_12">
        <div className="row">
          <div className="col-md-12">
            <nav className="header_dashboard">
              <div className="header_logo_nav">
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
                <button class="nav_btn_toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  <Image                    
                    src="/blackHamburger.svg"
                    alt="hamburger"
                    width={32}
                    height={32}
                    priority
                  />
                </button>              
              </div>


              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">  
                <div class="offcanvas-header">
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                    <Image                      
                      src="/close.png"
                      width={50}
                      height={50}
                      alt="close"
                      priority
                    />
                  </button>  
                </div>
                <div class="offcanvas-body">
                  <div className="nav_block">              
                    <ul className="nav main_nav">
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
