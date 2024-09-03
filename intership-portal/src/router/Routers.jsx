import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobLayouts from "../layouts/JobLayouts";
import DetailJobLayouts from "../layouts/DetailJobLayouts";
import InformationLayouts from "../layouts/InformationLayouts";
import DashboardLayouts from "../layouts/DashboardMhs/DashboardLayouts";
import ProfileLayouts from "../layouts/DashboardMhs/ProfileLayouts";
import ChangePassLayouts from "../layouts/DashboardMhs/ChangePassLayouts";
import LogbookLayouts from "../layouts/DashboardMhs/LogbookLayouts";
import LaporanMagangLayouts from "../layouts/DashboardMhs/LaporanMagangLayouts";
import DospemLayouts from "../layouts/DashboardMhs/DospemLayouts";
import AdminProfileLayouts from "../layouts/AdminDashboard/AdminProfileLayouts";
import ChangePasswordLayouts from "../layouts/AdminDashboard/ChangePasswordLayouts";
import CreateAccountLayouts from "../layouts/AdminDashboard/CreateAccountLayouts";
import AdminLaporanLayouts from "../layouts/AdminDashboard/AdminLaporanLayouts";
import PengajuanDospemLayouts from "../layouts/AdminDashboard/PengajuanDospemLayouts";
import AdminInformationLayouts from "../layouts/AdminDashboard/AdminInformationLayouts";
import CreateLokerLayouts from "../layouts/CompanyDashboard/CreateLokerLayouts";
import AddNewLokerLayouts from "../layouts/CompanyDashboard/AddNewLokerLayouts";
import ApplicantListLayouts from "../layouts/CompanyDashboard/ApplicantListLayouts";
import ApplicantDetailLayouts from "../layouts/CompanyDashboard/ApplicantDetailLayouts";
import LogbookCompanyLayouts from "../layouts/CompanyDashboard/LogbookCompanyLayouts";
import AdminLogin from "../pages/AdminLogin";
import DetailLokerLayouts from "../layouts/CompanyDashboard/DetailLokerLayouts";
import EditLokerLayouts from "../layouts/CompanyDashboard/EditLokerLayouts";
import Forbidden from "../components/Forbidden";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import MitraProfileLayouts from "../layouts/CompanyDashboard/MitraProfileLayouts";
import MitraDashboardLayouts from "../layouts/CompanyDashboard/MitraDashboardLayouts";
import ServiceError from "../components/ServiceError";
import LandingPageLayouts from "../layouts/LandingPageLayouts";
import PageNotFound from "../components/PageNotFound";
import GettingStarted from "../pages/GettingStarted";
import ContactLayout from "../layouts/ContactLayout";
import { getMhs, refreshToken } from "../redux/Action/LoginMhsAction";
import { refreshTokenUser } from "../redux/Action/LoginAction";
import AdminDashboardLayouts from "../layouts/AdminDashboard/AdminDashboardLayouts";


const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.loginMhs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refresh = async () => {
      try {
        await dispatch(refreshToken()).unwrap();
      } catch (error) {
        console.error("Failed to refresh token");
      } finally {
        setLoading(false);
      }
    };

    refresh();
  }, [dispatch]);

  if (loading) {
    return <div></div>; // You can replace this with a spinner or loader component
  }

  const isAuthenticated = user.token !== "";

  if (!isAuthenticated) {
    toast.error("You need to login first");
    return <Navigate to="/login" />;
  }

  return children;
};

const PrivateRouteUser = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refresh = async () => {
      try {
        await dispatch(refreshTokenUser()).unwrap();
      } catch (error) {
        console.error("Failed to refresh token");
      } finally {
        setLoading(false);
      }
    };

    refresh();
  }, [dispatch]);

  if (loading) {
    return <div></div>;
  }

  const isAuthenticated = user.token !== "";

  if (!isAuthenticated) {
    toast.error("You need to login first");
    return <Navigate to="/login-admin" />;
  }

  return children;
};

const Routers = () => {
  return (
    <div>
      <Routes>
        {/* Home */}
        <Route path="/" element={<LandingPageLayouts />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login-admin" element={<AdminLogin />} />
        <Route path="/started" element={<GettingStarted />} />


        {/* Job */}
        <Route path="/internship" element={<PrivateRoute><JobLayouts /></PrivateRoute>} />
        <Route path="/internship/:id" element={<PrivateRoute><DetailJobLayouts /></PrivateRoute>} />

        {/* Information */}
        <Route path="/information" element={<PrivateRoute><InformationLayouts /></PrivateRoute>} />

        {/* Contact */}
        <Route path="/contact" element={<ContactLayout />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<PrivateRoute><DashboardLayouts /></PrivateRoute>} />
        <Route path="/dashboard/profile" element={<PrivateRoute><ProfileLayouts /></PrivateRoute>} />
        <Route path="/dashboard/change-password" element={<PrivateRoute><ChangePassLayouts /></PrivateRoute>} />
        <Route path="/dashboard/logbook" element={<PrivateRoute><LogbookLayouts /></PrivateRoute>} />
        <Route path="/dashboard/laporan-magang" element={<PrivateRoute><LaporanMagangLayouts /></PrivateRoute>} />
        <Route path="/dashboard/dosen-pembimbing" element={<PrivateRoute><DospemLayouts /></PrivateRoute>} />

        {/* Dashboard Admin */}
        <Route path="/admin-dashboard" element={<PrivateRouteUser><AdminDashboardLayouts /></PrivateRouteUser>} />
        <Route path="/admin-dashboard/profile/:id" element={<PrivateRouteUser><AdminProfileLayouts /></PrivateRouteUser>} />
        <Route path="/admin-dashboard/change-password/:id" element={<PrivateRouteUser><ChangePasswordLayouts /></PrivateRouteUser>} />
        <Route path="/admin-dashboard/create-account" element={<PrivateRouteUser><CreateAccountLayouts /></PrivateRouteUser>} />
        <Route path="/admin-dashboard/laporan-magang" element={<PrivateRouteUser><AdminLaporanLayouts /></PrivateRouteUser>} />
        <Route path="/admin-dashboard/dosen-pembimbing" element={<PrivateRouteUser><PengajuanDospemLayouts /></PrivateRouteUser>} />
        <Route path="/admin-dashboard/information" element={<PrivateRouteUser><AdminInformationLayouts /></PrivateRouteUser>} />

        {/* Company Dashboard */}
        <Route path="/company-dashboard" element={<PrivateRouteUser><MitraDashboardLayouts /></PrivateRouteUser>} />
        <Route path="/company-dashboard/profile-company/:id" element={<PrivateRouteUser><MitraProfileLayouts /></PrivateRouteUser>} />
        <Route path="/company-dashboard/internship" element={<PrivateRouteUser><CreateLokerLayouts /></PrivateRouteUser>} />
        <Route path="/company-dashboard/internship/:id" element={<PrivateRouteUser><DetailLokerLayouts /></PrivateRouteUser>} />
        <Route path="/company-dashboard/internship/edit/:id" element={<PrivateRouteUser><EditLokerLayouts /></PrivateRouteUser>} />
        <Route path="/company-dashboard/create-internship" element={<PrivateRouteUser><AddNewLokerLayouts /></PrivateRouteUser>} />
        <Route path="/company-dashboard/applicant" element={<PrivateRouteUser><ApplicantListLayouts /></PrivateRouteUser>} />
        <Route path="/company-dashboard/applicant/:id" element={<PrivateRouteUser><ApplicantDetailLayouts /></PrivateRouteUser>} />
        <Route path="/company-dashboard/logbook" element={<PrivateRouteUser><LogbookCompanyLayouts /></PrivateRouteUser>} />


        {/* Error Page */}
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="/error-page" element={<ServiceError />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Routers;
