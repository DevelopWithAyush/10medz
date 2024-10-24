import React from "react";
import logo from "../../../assets/image/horizontallogo.png";
const Header = () => {
  return (
      <header className=" fixed top-0 w-full z-40 flex flex-row  items-center justify-between px-3 py-2 bg-white border-b-[2px] border-solid border-primary">
      <div className="flex flex-row items-center">
        <img src={logo} alt="logo" className="h-[28px] pr-6" />
        <p className="text-black border-l border-black/50 border-solid  pl-5 font-psemibold_600 text-[16px] ">
          Pharmacist Dashboard
        </p>
      </div>
      <p className="text-black font-pregular_400 text-[14px]   ">
        Dark store : 1800, Shree Niwas, Bhopal
      </p>
          <div className="flex flex-row items-center justify-start gap-[25px]">
              <Search/>
              <button>
                  <NotificationButton />
            </button>
              <button>
                  <ProfileButton/>
            </button>

      </div>
    </header>
  );
};
const Search = () => {
    return (
        <div className="flex flex-row  items-center justify-center  w-[88px] gap-[13px] border border-solid border-[#C4C4C4] p-[7px]" >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12.8291 12.225L9.40008 8.79399C9.83752 8.29394 10.1632 7.70627 10.3553 7.07027C10.5474 6.43427 10.6015 5.76459 10.5141 5.10599C10.3796 4.09007 9.92505 3.14339 9.21623 2.40329C8.50742 1.66319 7.58125 1.16815 6.57208 0.989989C5.9435 0.892015 5.30172 0.919733 4.68393 1.07154C4.06614 1.22334 3.4846 1.49621 2.97301 1.87435C2.46142 2.25249 2.02994 2.72837 1.70357 3.27444C1.37719 3.82051 1.1624 4.42591 1.07165 5.05557C0.980893 5.68524 1.01597 6.32665 1.17485 6.94266C1.33374 7.55867 1.61327 8.13703 1.99725 8.64425C2.38123 9.15147 2.86203 9.57746 3.41181 9.89755C3.96159 10.2176 4.56941 10.4255 5.20008 10.509C5.85201 10.5904 6.51362 10.5414 7.14643 10.3647C7.77923 10.188 8.37058 9.88731 8.88608 9.47999L12.3141 12.91C12.3616 12.9514 12.4225 12.9742 12.4856 12.9742C12.5486 12.9742 12.6095 12.9514 12.6571 12.91L13.0001 12.568C12.9141 12.482 12.9141 12.31 12.8291 12.225ZM1.94408 6.47899C1.81634 5.85524 1.84524 5.20955 2.02821 4.59971C2.21118 3.98987 2.54249 3.43491 2.99251 2.9845C3.44252 2.53409 3.99719 2.20228 4.60687 2.01878C5.21655 1.83527 5.86221 1.8058 6.48608 1.93299C7.28159 2.06019 8.01657 2.4355 8.58605 3.00534C9.15553 3.57518 9.53038 4.31039 9.65708 5.10599C9.75531 5.72497 9.70567 6.35842 9.51222 6.95455C9.31877 7.55067 8.987 8.09256 8.54403 8.53592C8.10106 8.97928 7.55946 9.31153 6.9635 9.5055C6.36755 9.69948 5.73415 9.74967 5.11508 9.65199C4.31956 9.52479 3.58458 9.14948 3.0151 8.57964C2.44562 8.0098 2.07077 7.27458 1.94408 6.47899Z" fill="#606060" />
            </svg>
            <p className="text-[12px] font-pbold_700 text-[#606060] capitalize">search</p>
            {/* <input type="text" placeholder="search" className=" w-full"    /> */}
        </div>
    )
}
const NotificationButton = () => {
    return (
        
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
       
    )
}
const ProfileButton = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17.9815 18.7248C16.6121 16.9175 14.4424 15.75 12 15.75C9.55761 15.75 7.38789 16.9175 6.01846 18.7248M17.9815 18.7248C19.8335 17.0763 21 14.6744 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.6744 4.1665 17.0763 6.01846 18.7248M17.9815 18.7248C16.3915 20.1401 14.2962 21 12 21C9.70383 21 7.60851 20.1401 6.01846 18.7248M15 9.75C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75C9 8.09315 10.3431 6.75 12 6.75C13.6569 6.75 15 8.09315 15 9.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Header;
