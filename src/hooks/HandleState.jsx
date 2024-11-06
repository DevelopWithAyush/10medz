import { createContext, useState } from "react";

export const HandleContext = createContext();

const HandleState = ({ children }) => {
  const [wapper, setWapper] = useState(false); // Corrected variable name
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openPreviousModal, setOpenPreviousModal] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [phoneLoginModal,setPhoneLoginModal] = useState(false);
//   const { userExist } = useSelector((state) => state.auth);
const userExist = true 

  return (
    <HandleContext.Provider
      value={{
        wapper, // Corrected here as well
        setWapper,
        openLoginModal,
        setOpenLoginModal,
        openPreviousModal,
        setOpenPreviousModal,
        userExist,
        phoneLoginModal,
        setPhoneLoginModal,
      }}
    >
      {children}
    </HandleContext.Provider>
  );
};

export default HandleState;
