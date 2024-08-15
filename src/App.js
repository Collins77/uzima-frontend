import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CompanyPricing from './pages/CompanyPricing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import CompanyLogin from './pages/auth/CompanyLogin';
import CompanyRegister from './pages/auth/CompanyRegister';
import Dashboard from './pages/user/Dashboard';
import UserLayout from './pages/user/UserLayout';
import ChatPage from './pages/user/ChatPage';
import BillingPage from './pages/user/BillingPage';
import ProfilePage from './pages/user/ProfilePage';
import ProtectedRoute from './pages/auth/ProtectedRoute';
import CompanyProtectedRoute from './pages/auth/CompanyProtectedRoute';
import HrLayout from './pages/Hr/HrLayout';
import HrDash from './pages/Hr/HrDash';
import RegisterStaff from './pages/Hr/RegisterStaff';
import HrStaff from './pages/Hr/HrStaff';
import SendEmails from './pages/Hr/SendEmails';
import StaffPreview from './pages/Hr/StaffPreview';
import AdminLayout from './pages/Admin/components/AdminLayout';
import AdminAddPlan from './pages/Admin/AdminAddPlan';
import AdminPlans from './pages/Admin/AdminPlans';
import AdminAddCounsellor from './pages/Admin/AdminAddCounsellor';
import AdminCounsellors from './pages/Admin/AdminCounsellors';
import AdminAddCompany from './pages/Admin/AdminAddCompany';
import AdminCompanies from './pages/Admin/AdminCompanies';
import AdminAddUser from './pages/Admin/AdminAddUser';
import AdminUserSubs from './pages/Admin/AdminUserSubs';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminDash from './pages/Admin/AdminDash';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import VerifyEmail from './pages/user/VerifyEmail';
import RegistrationConfirm from './pages/user/RegistrationConfirm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/corp-pricing' element={<CompanyPricing />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path='/registration-confirmation' element={<RegistrationConfirm />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={
            <UserLayout>
            <Dashboard />
          </UserLayout>
          } />
        </Route>
        {/* <Route path='/dashboard' element={
          <UserLayout>
            <Dashboard />
          </UserLayout>
          } /> */}
        <Route path='/profile' element={
          <UserLayout>
            <ProfilePage />
          </UserLayout>
          } />
        <Route path='/chat' element={
          <UserLayout>
            <ChatPage />
          </UserLayout>
          } />
        <Route path='/billing' element={
          <UserLayout>
            <BillingPage />
          </UserLayout>
          } />
        <Route path='/corp-signin' element={<CompanyLogin />} />
        <Route path='/corp-signup' element={<CompanyRegister />} />
        
        <Route element={<CompanyProtectedRoute />}>
          <Route
            path="/hr/*"
            element={

              <Routes>
                
                <Route path='/' element={
                  <HrLayout>
                    <HrDash />
                  </HrLayout>
                } />
                <Route path='/register-staff' element={
                  <HrLayout>
                    <RegisterStaff />
                  </HrLayout>
                } />
                <Route path='/all-staff' element={
                  <HrLayout>
                    <HrStaff />
                  </HrLayout>
                } />
                <Route path='/send-emails' element={
                  <HrLayout>
                    <SendEmails />
                  </HrLayout>
                } />
                <Route path='/staff-preview' element={
                  <HrLayout>
                    <StaffPreview />
                  </HrLayout>
                } />


              </Routes>
              // </Layout>
            }
          />
        </Route>
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route element={<AdminProtectedRoute />}>
        <Route
            path="/admin/*"
            element={

              <Routes>
                
                <Route path='/' element={
                  <AdminLayout>
                    <AdminDash />
                  </AdminLayout>
                } />
                <Route path='/users' element={
                  <AdminLayout>
                    <AdminUsers />
                  </AdminLayout>
                } />
                <Route path='/users-active' element={
                  <AdminLayout>
                    <AdminUserSubs />
                  </AdminLayout>
                } />
                <Route path='/users-expired' element={
                  <AdminLayout>
                    <AdminUsers />
                  </AdminLayout>
                } />
                <Route path='/create-user' element={
                  <AdminLayout>
                    <AdminAddUser />
                  </AdminLayout>
                } />
                <Route path='/corporates' element={
                  <AdminLayout>
                    <AdminCompanies />
                  </AdminLayout>
                } />
                <Route path='/add-corporate' element={
                  <AdminLayout>
                    <AdminAddCompany />
                  </AdminLayout>
                } />
                <Route path='/counsellors' element={
                  <AdminLayout>
                    <AdminCounsellors />
                  </AdminLayout>
                } />
                <Route path='/add-counsellor' element={
                  <AdminLayout>
                    <AdminAddCounsellor />
                  </AdminLayout>
                } />
                <Route path='/plans' element={
                  <AdminLayout>
                    <AdminPlans />
                  </AdminLayout>
                } />
                <Route path='/create-plan' element={
                  <AdminLayout>
                    <AdminAddPlan />
                  </AdminLayout>
                } />
              </Routes>
              // </Layout>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
