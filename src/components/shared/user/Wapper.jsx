import React, { useState } from "react";

const Wapper = () => {
    const [wapper, setWapper] = useState(false); // useState instead of useContext

    return (
        wapper && (
            <div
                className="z-[1000] fixed top-0 left-0 w-full h-[100vh]"
                style={{ background: "rgba(0, 0, 0, 0.40)", backdropFilter: "blur(1.5px)" }}
            ></div>
        )
    );
};

export default Wapper;
