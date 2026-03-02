import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardLayout from "./pages/DashboardLayout";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Stats from "./pages/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "project/:id", 
        element: <ProjectDetail />,
      },
      {
        path: "dashboard", 
        element: <DashboardLayout />,
        children: [
          {
            path: "stats", 
            element: <Stats />,
          },
        ],
      },
    ],
  },
  {
    path: "*", 
    element: (
      <div className="h-screen flex items-center justify-center bg-slate-950 text-white">
        <h1 className="text-2xl font-mono">404 | This route doesn't exist.</h1>
      </div>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
