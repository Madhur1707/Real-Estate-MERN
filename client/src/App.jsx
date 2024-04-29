import HomePage from "./pages/homepage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./pages/layout/layout";
import ListPage from "./pages/listPage/listPage";
import SoloPage from "./pages/soloPage/soloPage";
import ProfilePage from "./pages/profilePage/profilePage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import UpdateProfile from "./pages/updateProfile/UpdateProfile";
import NewPostPage from "./pages/newPostPage/newPostPage";
import { listPageLoader, singlePageLoader } from "./lib/loaders";

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
        loader: listPageLoader,
      },
      {
        path: "/:id",
        element: <SoloPage />,
        loader: singlePageLoader,
      },

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
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/profile/update",
        element: <UpdateProfile />,
      },
      {
        path: "/add",
        element: <NewPostPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
