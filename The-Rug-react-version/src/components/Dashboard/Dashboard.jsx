import React from "react";
import { FiHome, FiUser, FiSettings, FiBarChart2 } from "react-icons/fi";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sales: 4000, users: 2400 },
  { name: "Feb", sales: 3000, users: 1398 },
  { name: "Mar", sales: 2000, users: 9800 },
  { name: "Apr", sales: 2780, users: 3908 },
  { name: "May", sales: 1890, users: 4800 },
  { name: "Jun", sales: 2390, users: 3800 },
  { name: "Jul", sales: 3490, users: 4300 },
];

const pieData = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-35">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Cards */}
        <div className="p-6 bg-white shadow-md rounded-xl flex items-center space-x-4">
          <FiHome className="text-4xl text-blue-500" />
          <div>
            <p className="text-gray-600">Total Sales</p>
            <h2 className="text-2xl font-bold">$45,000</h2>
          </div>
        </div>

        <div className="p-6 bg-white shadow-md rounded-xl flex items-center space-x-4">
          <FiUser className="text-4xl text-green-500" />
          <div>
            <p className="text-gray-600">New Users</p>
            <h2 className="text-2xl font-bold">1,200</h2>
          </div>
        </div>

        <div className="p-6 bg-white shadow-md rounded-xl flex items-center space-x-4">
          <FiSettings className="text-4xl text-orange-500" />
          <div>
            <p className="text-gray-600">Settings Updated</p>
            <h2 className="text-2xl font-bold">87</h2>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Line Chart */}
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-bold mb-4">Sales Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-bold mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="mt-10 p-6 bg-white shadow-md rounded-xl w-full max-w-md mx-auto">
        <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
