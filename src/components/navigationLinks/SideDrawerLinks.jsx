
import React,{useState} from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image'

const SideDrawerLinks = ({ filteredLinks, onCloseToggle, t }) => {
  const router = useRouter();
  const [subMenuOpen, setSubMenuOpen] = useState(false); 

  // const stripLocale = (url) => {
  //   const localePattern = new RegExp(`^/${router.locale}`);
  //   return url.replace(localePattern, "");
  // };

  const isActive = (linkUrl) => {
    const currentPath = router.asPath;
    const linkPath = linkUrl;
    return currentPath === linkPath;
  };

  const handleSpanClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setSubMenuOpen(!subMenuOpen); 
   
  };


  return (
    <ul>
      {filteredLinks.map((link) => (
        <li key={link.id}>
          {link.url ? (
        
              <Link
                href={`/${router.locale}${link.url}`}
                onClick={() => onCloseToggle()}
                className={isActive(link.url) ? "fw_700" : "fw_400"}
              >
                {t(link.title)}

                {link.subLinks &&  <Image
                src="/drop-down-arrow.svg"
                width={24}
                height={24}
                alt="angleDown"
                className="ml_4 fa_angle_mob"
              />}
              </Link>
             
          
          ) : (
            <Link className={"d_flex justify_space_between align_item_center"}
            href={"#"}
            onClick={handleSpanClick} // Handle span click to toggle submenu
              style={{ cursor: 'pointer' }} >
              {t(link.title)}

              {link.subLinks &&  <Image
                src="/drop-down-arrow.svg"
                width={24}
                height={24}
                alt="angleDown"
                className="ml_4  fa_angle_mob"
              />}
            </Link>
          )}

          {link.subLinks && subMenuOpen &&  (
            <ul className="drawer_submenu">
              {link.subLinks.map((subLink) => (
                <li key={subLink.id} className="nav_sub_item">
                  <Link
                  onClick={()=>onCloseToggle()}
                    href={`/${router.locale}${subLink.url}`}
                    className={`textBlack ${isActive(subLink.url) ? 'fw_700' : 'fw_400'}`}
                  >
                    {t(subLink.title)}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SideDrawerLinks;
