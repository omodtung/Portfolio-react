import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import contactPage from "./pages/contact";
import bookPage from "./pages/book";
import RegisterPage from "./pages/register";
const Layout = () => {
  return (
    <div className="layout-app">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
// dothedung131
// eye6pipl23iGDK1E
function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      // @ts-ignore

      element: <Layout />,
      errorElement: <div> 404 not found h</div>,
      children: [
        // @ts-ignore
        { index: true, element: <Home></Home> },
        {
          path: "contact",
          // @ts-ignore
          element: <contactPage></contactPage>,
        },
        {
          path: "book",
          // @ts-ignore
          element: <bookPage></bookPage>,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",

      element: <RegisterPage></RegisterPage>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
