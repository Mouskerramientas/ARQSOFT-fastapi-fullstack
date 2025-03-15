import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AuthProvider } from "../context/authContext";
import Header from "../components/Header";

export const Route = createRootRoute({
  component: () => {
    return (
      <div className="w-full h-svh bg-radial from-blue-400 to-neutral-200 dark:from-blue-800 dark:md:from-20% dark:to-gray-800 dark:to-90% dark:text-white flex flex-col items-center">
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
          <div className="w-full h-svh flex flex-col items-center overflow-y-auto">
            <Header />
            <div className="h-full flex justify-center">
              <Outlet />
            </div>
          </div>
        </AuthProvider>
        <TanStackRouterDevtools />
      </div>
    );
  },
});
