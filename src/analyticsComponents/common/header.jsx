import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { useSession } from "next-auth/react";

export default function Header({ data }) {
  const [offCanvas, setoffCanvas] = useState(false);
  const { status } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
  const navigationItems = [
    { href: "/analytics/dashboard", label: "Dashboard" },
    { href: "/analytics/customer", label: "Customer" },
    { href: "/analytics/artist", label: "Artists" },
    { href: "/analytics/offer", label: "Offer" },
  ];

  const handleSignOut = async () => {
    await signOut({ redirect: false });
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setoffCanvas(true); // Set to true to open the offcanvas
    });

    router.events.on("routeChangeComplete", () => {
      setoffCanvas(false); // Set to false to close the offcanvas
    });

    return () => {
      router.events.off("routeChangeStart");
      router.events.off("routeChangeComplete");
    };
  }, [router.events, setoffCanvas]);

  return (
    <>
      <header className="db_header_wrap">
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
                      <h6>{t("common:Analytics")}</h6>
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
                      {t("common:Hello")}, {data}{" "}
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
                      className="btn_secondary ml_10 bdr_rad_4"
                      onClick={handleSignOut}
                    >
                      {t("common:Log out")}
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

                {!offCanvas && (
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
                              <Link
                                href={item.href}
                                onClick={() => setoffCanvas(!offCanvas)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
