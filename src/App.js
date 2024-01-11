import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//import Custom Style scss
import "./assets/scss/themes.scss";
import Navbar from "./commonComponents/Navbar";
import IntergratedNav from "./commonComponents/IntergratedNav";
import Error404 from "./Pages/Error404";
import AdsList from "./Pages/Ads/AdsList";
import AdDetails from "./Pages/Ads/AdDetails";
import BlogsList from "./Pages/Blogs/BlogList";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import Footer from "./commonComponents/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import TopBar from "./commonComponents/TopBar";
import BottomBar from "./commonComponents/BottomBar";
import Subscribe from "./commonComponents/Subscribe";
import Faqs from "./Pages/Faqs/Faqs";
import TermAndConditions from "./Pages/TermAndConditions/TermAndConditions";
import ManageAds from "./Pages/Profile/ManageAds/ManageAds";
import FavoriteAds from "./Pages/Profile/FavouriteAds/FavoriteAds";
import MyProfile from "./Pages/Profile/Profile/MyProfile";
import SignOut from "./Pages/AuthPages/SignOut";
import SignUp from "./Pages/AuthPages/SignUp";
import SignIn from "./Pages/AuthPages/SignIn";
import ResetPassword from "./Pages/AuthPages/ResetPassword";
import NewPassword from "./Pages/AuthPages/NewPassword";
import PostAdd from "./Pages/PostYourAdd/PostAd";
// import AdPreview from "./Pages/PostYourAdd/components/AdPreview.js";
import Chat from "./Pages/Chat/Index";
import MobileNav from "./commonComponents/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import PrivateRoute from "./routes/PrivateRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import i18next from "i18next";
import EditForm from "./Pages/Profile/ManageAds/components/EditAd";
import EditAdFormWrapper from "./Pages/Profile/ManageAds/components/EditFormAd";
import NotPaidAd from "./Pages/PostYourAdd/components/NotPaid";


function App() {
  useEffect(() => {
    let currentlang = localStorage.getItem("lang");
    i18next.changeLanguage(currentlang);
  }, []);
    i18next.on("languageChanged", () => {
    document.body.dir = i18next.language === "ar" ? "rtl" : "ltr";
  });
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
      {/* <TopBar />
      <Navbar /> */}
      <IntergratedNav />
      <BottomBar />
      {/* <MobileNav /> */}
      <Routes>
        <Route exact path="*" element={<Error404 />} />
        <Route exact path="/" element={<AdsList />} />
        <Route exact path="/adDetails" element={<AdDetails />} />
        <Route exact path="/blogs" element={<BlogsList />} />
        <Route exact path="/blogdetails" element={<BlogDetails />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faqs" element={<Faqs />} />

        <Route
          exact
          path="/termandconditions"
          element={<TermAndConditions />}
        />
        {/* <Route exact path="/manageads" element={<PrivateRoute><ManageAds /></PrivateRoute>} />
        <Route exact path="/favoriteads" element={<PrivateRoute><FavoriteAds /></PrivateRoute>} />
        <Route exact path="/myprofile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
        <Route exact path="/signout" element={<ProtectedRoute><SignOut /></ProtectedRoute>} />
        <Route exact path="/signup" element={<ProtectedRoute><SignUp /></ProtectedRoute>} />
        <Route exact path="/signin" element={<ProtectedRoute><SignIn /></ProtectedRoute>} />
        <Route exact path="/resetpassword" element={<ProtectedRoute><ResetPassword /></ProtectedRoute>} />
        <Route exact path="/changepassword" element={<ProtectedRoute><NewPassword /></ProtectedRoute>} />
        <Route exact path="/postyourad" element={<PrivateRoute><PostAdd /></PrivateRoute>} />
        <Route exact path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} /> */}
        <Route exact path="/manageads" element={<ManageAds />} />
        <Route exact path="/favoriteads" element={<ManageAds />} />
        <Route exact path="/myprofile" element={<MyProfile />} />
        <Route exact path="/signout" element={<SignOut />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/changepassword" element={<NewPassword />} />
        <Route exact path="/postyourad" element={<PostAdd />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/edit" element={<EditForm />} />
        <Route path="/edit/:id" component={<EditAdFormWrapper />} />
        <Route path ="/notpaid" element={<NotPaidAd />} />
        {/* <Route path ="/preview" element={<AdPreview />} /> */}
      </Routes>
      {/* <Subscribe /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
