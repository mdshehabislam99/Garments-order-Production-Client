import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ProductDetailsPage from "../Pages/Products/ProductDetailsPage";
import AllProducts from "../Pages/Products/AllProducts";
import About from "../Pages/Additional Page/About";
import Contact from "../Pages/Additional Page/Contact";
import AdminDashboard from "../Pages/MainDashboard/Admin/AdminDashboard";
import AdminAnalytics from "../Pages/MainDashboard/Admin/AdminAnalytics";
import ManageUsers from "../Pages/MainDashboard/Admin/ManageUsers";
import AllProductAdmin from "../Pages/MainDashboard/Admin/AllProductAdmin";
import ManagerDashboard from "../Pages/MainDashboard/Manager/ManagerDashboard";
import AddProduct from "../Pages/MainDashboard/Manager/AddProduct";
import PendingOrders from "../Pages/MainDashboard/Manager/PendingOrders";
import ManagerProfile from "../Pages/MainDashboard/Manager/ManagerProfile";
import BuyerDashboard from "../Pages/MainDashboard/Buyer/BuyerDashboard";
import TrackOrder from "../Pages/MainDashboard/Buyer/TrackOrder";
import ManageProducts from "../Pages/MainDashboard/Manager/ManageProducts";
import ApproveOrders from "../Pages/MainDashboard/Manager/ApproveOrders";
import MyOrder from "../Pages/MainDashboard/Buyer/MyOrder";
import PrivetRoute from "./PrivetRout";
import ErrorPage from "../Components/Common/ErrorBoundary/ErrorPage";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import MainLayout from "../Layout/MainLayout/MainLayout";
import DashBoardLayout from "../Layout/DashBoardLayout/DashBoardLayout";
import AdminRout from "./AdminRout";
import AllOrders from "../Pages/MainDashboard/Admin/Allorders";
import ManagerRout from "./ManagerRout";
import Booking from "../Pages/Booking/Booking";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Payment/PaymentCanceled";
import UpdateProduct from "../Pages/MainDashboard/Manager/UpdateProduct";
import OrderDetails from "../Pages/MainDashboard/Manager/OrderDetails";
import AdminManagerRout from "./AdminManagerRout";
import OrderTracking from "../Pages/MainDashboard/Admin/OrderTracking";
import TermCondition from "../Pages/Additional Page/TermCondition";
import Settings from "../Pages/MainDashboard/Shared/Settings";
import PrivacyPolicy from "../Pages/Additional Page/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />,
      },

      {
        path: "/order/:id",
        element: <Booking />,
      },

      {
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment-canceled",
        element: <PaymentCancelled />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/terms-condition",
        element: <TermCondition></TermCondition>
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashBoardLayout></DashBoardLayout>,
      </PrivetRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/admin",
        element: (
          <AdminRout>
            <AdminDashboard />
          </AdminRout>
        ),
      },
      {
        path: "/dashboard/admin/analytics",
        element: (
          <AdminRout>
            <AdminAnalytics />
          </AdminRout>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRout>
            <ManageUsers />
          </AdminRout>
        ),
      },
      {
        path: "/dashboard/all-product",
        element: (
          <AdminRout>
            <AllProductAdmin />
          </AdminRout>
        ),
      },
      {
        path: "/dashboard/all-orders",
        element: (
          <AdminRout>
            <AllOrders />
          </AdminRout>
        ),
      },
      {
        path: "/dashboard/orderTracking/:orderId",
        element: (
          <AdminRout>
            <OrderTracking />
          </AdminRout>
        ),
      },

      {
        path: "/dashboard/manager",
        element: (
          <ManagerRout>
            <ManagerDashboard />
          </ManagerRout>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <ManagerRout>
            <AddProduct />
          </ManagerRout>
        ),
      },
      {
        path: "/dashboard/manage-products",
        element: (
          <ManagerRout>
            <ManageProducts />
          </ManagerRout>
        ),
      },
      {
        path: "/dashboard/pending-orders",
        element: (
          <ManagerRout>
            <PendingOrders />
          </ManagerRout>
        ),
      },
      {
        path: "/dashboard/order-details/:id",
        element: (
          <ManagerRout>
            <OrderDetails />
          </ManagerRout>
        ),
      },

      {
        path: "/dashboard/approved-orders",
        element: (
          <ManagerRout>
            <ApproveOrders />
          </ManagerRout>
        ),
      },
      {
        path: "/dashboard/update-product/:id",
        element: (
          <AdminManagerRout>
            <UpdateProduct />
          </AdminManagerRout>
        ),
      },
      {
        path: "/dashboard/profile",
        element: <ManagerProfile />,
      },

      {
        path: "/dashboard/buyer",
        element: <BuyerDashboard />,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrder />,
      },

      {
        path: "/dashboard/settings",
        element: <Settings />,
      },

      {
        path: "/dashboard/track-order/:orderId",
        element: <TrackOrder />,
      },
    ],
  },
]);

export default router;
