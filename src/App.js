import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import Store from "./pages/redux/Store";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";
import BookingPage from "./pages/Online Ordering/OrderOnline"
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HairPrice from "./pages/PriceList/HairPrice";
import SkinPrice from "./pages/PriceList/SkinPrice";
import Admin from "./pages/admin/Admin";
import NailPrice from "./pages/PriceList/NailPrice";
import Bodyprice from "./pages/PriceList/BodyPrice";
import BridalPrice from "./pages/PriceList/BridalPrice";
import CheckOut from "./pages/CheckOut/CheckOut";

import PaymentDetails from "./pages/Payment/PaymentDetails";
import ReviewBooking from "./pages/ReviewBooking/ReviewBooking";
import NewApoinment from "./pages/admin/NewApoinment";
import Appoinment from "./pages/admin/Appoinment";
import AddAdmin from "./pages/admin/AddAdmin";
import { Inbox } from "@mui/icons-material";
import SentMail from "./pages/admin/SentMail";
import Setting from "./pages/admin/Setting";
import LogOut from "./pages/admin/LogOut";
import About from "./pages/About/about";
import AdminLogin from "./pages/admin/AdminLogin";
import PriceUpdate from './pages/admin/Update/PriceUpdate';
import AlertDialogSlide from './pages/ChatBot/Pop';
import ChatbotLauncher from './pages/ChatBot/Chatbot';
import Chatbot from './pages/ChatBot/Chatbot';
import CreateData from "./pages/admin/Add/CreateData";
import UserManage from "./pages/admin/UserManage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdDashboard from "./pages/admin/AdDashboard";
import OrderOnline from "./pages/Online Ordering/OrderOnline";
import Footer from "./pages/Footer/Footer";
import FoodPriceList from "./pages/PriceList/FoodPriceList";



function App() {
  return (
      <ReduxProvider store={Store}>
        <BrowserRouter>
          <Layout />
         
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="Login" element={<Login />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="OrderOnline" element={<OrderOnline />} />
            <Route path="Home" element={<Home />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="HairPrices" element={<HairPrice />} />
            <Route path="SkinPrices" element={<SkinPrice />} />
       
            <Route path="NailPrices" element={<NailPrice />} />
            <Route path="BodyPrices" element={<Bodyprice />} />
            <Route path="BridalPrices" element={<BridalPrice />} />
            <Route path="About" element={<About />} />
            <Route path="Checkout" element={<CheckOut />} />
            <Route path="FoodPriceList" element={<FoodPriceList />} />

            
      

        
 
    

            <Route path="Alert" element={<AlertDialogSlide />} />
            <Route path="ChatBot" element={<ChatbotLauncher />} />
            <Route path="ChatBotui" element={<Chatbot />} />
        
 {/* admin section */}
            <Route path="PriceUpdate" element={<PriceUpdate />} /> 
            <Route path="UserManage" element={<UserManage />} />
            <Route path="Admin" element={<Admin />} />
            <Route path="AddAdmin" element={<AddAdmin />} />
            <Route path="AdminLogin" element={<AdminLogin />} />
            <Route path="AdminDashboard" element={<AdminDashboard />} />
            <Route path="AdDashboard" element={<AdDashboard />} />
            <Route path="Inbox" element={<Inbox />} />
            <Route path="SentMail" element={<SentMail />} />
            <Route path="Setting" element={<Setting />} />
            <Route path="LogOut" element={<LogOut />} />
           
            <Route path="*" element={<NoPage />} />

           
            {/* </Route> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </ReduxProvider>
  );
}

export default App;
