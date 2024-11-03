import { createContext, useContext, useState } from "react";

export const HandleContext = createContext();

const HandleState = ({ children }) => {
    const [wapper, setWapper] = useState(false); // Corrected variable name
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openPreviousModal, setOpenPreviousModal] = useState(false);
    const [userExist, setUserExist] = useState(false);

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
                setUserExist,
            }}
        >
            {children}
        </HandleContext.Provider>
    );
};

export default HandleState;
