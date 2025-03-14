import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AuthProvider } from "../context/authContext";

export const Route = createRootRoute({
  component: () => {
    return (
      <div className="w-full h-svh bg-radial from-blue-800 md:from-20% to-gray-800 to-90% dark:text-white flex justify-center items-center">
        {/* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div> */}
        {/* <AuthContext.Provider value={{ userToken, username, login }}>
          <Outlet />
        </AuthContext.Provider> */}

        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <TanStackRouterDevtools />
      </div>
    );
  },
});
