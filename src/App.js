import React, { useContext } from "react";
import PharmacistDashboard from "./pages/pharmacist/PharmacistDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prescription from "./pages/pharmacist/Prescription";
import Home from "./pages/user/Home";
import UploadPrescription from "./pages/user/UploadPrescription";
import { Account } from "./assets/image";
import AccountProfile from "./pages/user/AccountProfile";
import OrderStatus from "./pages/user/OrderStatus";
import CameraCapture from "./pages/user/CameraCapture";
import Wapper from "./components/shared/user/Wapper";
import Login from "./components/shared/user/Login";
import { HandleContext } from "./hooks/HandleState";

const App = () => {
  const { openLoginModal, wapper, setOpenLoginModal } =
    useContext(HandleContext);
  return (
    <>
      <BrowserRouter>
        {openLoginModal && <Login />}
        {wapper && <Wapper />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<OrderStatus />} />
          <Route path="/account" element={<AccountProfile />} />
          <Route path="/prescription/camera" element={<CameraCapture />} />

          <Route path="/prescription" element={<UploadPrescription />} />
          <Route path="/prescription/:id" element={<Prescription />} />
          <Route path="/pharmacist" element={<PharmacistDashboard />} />
          <Route path="/pharmacist/:id" element={<Prescription />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
