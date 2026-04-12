import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxios from "../../../Hooks/useAxios";

const DashboardOverview = ({ stats }) => (
  <div className="p-6">
    <div className="mb-8 text-center item-center">
      <h2 className="text-3xl flex justify-center font-bold">Welcome back</h2>
      <p className="mt-2">Here's Your Dashboard</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="custom-bg rounded-4xl  shadow p-6">
        <div className="ml-4 text-center">
          <p className="text-xl font-medium">Total Orders</p>
          <p className="text-2xl mt-1 font-semibold text-blue-500">
            {stats?.totalOrders || 0}
          </p>
        </div>
      </div>

      <div className="custom-bg rounded-4xl shadow p-6">
        <div className="ml-4 text-center">
          <p className="text-xl font-medium">Payment Pending</p>
          <p className="text-2xl mt-1 font-semibold text-purple-900">
            {stats?.pendingPayment || 0}
          </p>
        </div>
      </div>

      <div className="custom-bg rounded-4xl shadow p-6">
        <div className="ml-4 text-center">
          <p className="text-xl font-medium">Total Spent</p>
          <p className="text-2xl mt-1 font-semibold text-green-600">
            ${stats?.totalSpent?.toFixed(2) || "0.00"}
          </p>
        </div>
      </div>
    </div>
    <div className=" p-6">
      <h3 className="text-lg font-bold    text-center">Quick Actions</h3>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        <Link to="/dashboard/my-orders">
          <button className="flex items-center custom-bg p-3 rounded-4xl hover:bg-red-400">
            <div className="flex-shrink-0 text-blue-500 bg-blue-100 rounded-lg p-3 mr-4">
              <FaTasks className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold  ">My Orders</p>
              <p className="text-lg ">View your order history</p>
            </div>
          </button>
        </Link>

        <Link to="/dashboard/all-products">
          <button className="flex items-center custom-bg p-3 rounded-4xl hover:bg-red-400">
            <div className="flex-shrink-0 text-green-500 bg-green-100 rounded-lg p-3 mr-4">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold  ">Explore Product</p>
              <p className="text-lg ">Creat your new order</p>
            </div>
          </button>
        </Link>
        <Link to="/dashboard/profile">
          <button className="flex items-center custom-bg p-3 rounded-4xl hover:bg-red-400">
            <div className="flex-shrink-0 text-amber-500 custom-bg rounded-lg p-3 mr-4">
              <FaUser className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold  ">My Profile</p>
              <p className="text-lg ">Manage account settings</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const BuyerDashboard = () => {
  const { user } = useAuth();
  const axioInstance= useAxios()
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingPayment: 0,
    totalSpent: 0,
  });

  useEffect(() => {
    if () return;

    const fetchDashboardStats = async () => {
      try {
        const response = await axioInstance.get("/buyer/stats");
        setStats(response.data.data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchDashboardStats();
  }, [axioInstance]);

  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="custom-bg rounded-4xl shadow">
          <div className="px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h1 className="text-xl  font-bold ">Dashboard</h1>
              <div className="items-center ">
                <p className="text-sm">
                  Welcome, <span className="font-medium">{user?.email}</span>
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <DashboardOverview stats={stats} />
        </main>
      </div>
    </div>
  );
};
export default BuyerDashboard;
