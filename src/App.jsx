import HomePage from "./pages/homepage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/layout";
import ListPage from "./pages/listPage/listPage";
import SoloPage from "./pages/soloPage/soloPage";
import ProfilePage from "./pages/profilePage/profilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/:id",
        element: <SoloPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
