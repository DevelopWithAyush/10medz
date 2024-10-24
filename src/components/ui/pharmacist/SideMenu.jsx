import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const SideMenu = () => {
    const location = useLocation();
  return (
      <aside className=" fixed top-[51.5px] w-[250px] h-[calc(100vh-60px)]   bg-white border-r-[1px] border-solid border-[#BCC3CD] ">
          <Link
              to={"/"}
              className={` ${location.pathname === "/"
                  ? "border-l-[6.5px]  border-primary bg-[#E7EEFF] "
                      : ""
                  }  text-[14px] font-psemibold_600 text-primary capitalize pl-4 pt-4 pb-[13px] border-solid border-b-[1px] border-b-[#DFE7F2] flex flex-row items-center `}
          >
              <p>Orders</p>
          </Link>
          <Link
              to={"/inventory"}
              className={` ${location.pathname === "/inventory"
                      ? "border-l-[6.5px]  border-primary "
                      : ""
                  }  text-[14px] font-psemibold_600 text-primary capitalize pl-4 pt-4 pb-[13px] border-solid border-b-[1px] border-b-[#DFE7F2] flex flex-row items-center `}
          >
              <p>Inventory</p>
          </Link>
          <Link
              to={"/orderhistory"}
              className={` ${location.pathname === "/orderhistory"
                      ? "border-l-[6.5px]  border-primary "
                      : ""
                  }  text-[14px] font-psemibold_600 text-primary capitalize pl-4 pt-4 pb-[13px] border-solid border-b-[1px] border-b-[#DFE7F2] flex flex-row items-center `}
          >
              <p>Order history</p>
          </Link>
          <Link
              to={"/darkstore"}
              className={` ${location.pathname === "/darkstore"
                      ? "border-l-[6.5px]  border-primary "
                      : ""
                  }  text-[14px] font-psemibold_600 text-primary capitalize pl-4 pt-4 pb-[13px] border-solid border-b-[1px] border-b-[#DFE7F2] flex flex-row items-center `}
          >
              <p>Darkstore details</p>
          </Link>
      </aside>
  )
}

export default SideMenu
