import React, { useContext, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userExists, userNotExists } from "./redux/reducers/auth";
import UpdatingNotificaiton from "./components/ui/user/UpdatingNotificaiton";
import Cart from "./pages/user/Cart";

const App = () => {
  const { openLoginModal, wapper, isNotificationsOpen, setOpenLoginModal } =
    useContext(HandleContext);

  const server = " http://localhost:5000";

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${server}/api/v1/user/me`, { withCredentials: true })
      .then(({ data }) => dispatch(userExists(data.user)))
      .catch((err) => dispatch(userNotExists()));
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        {openLoginModal && <Login />}
        {wapper && <Wapper />}
        {false && <UpdatingNotificaiton />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
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
