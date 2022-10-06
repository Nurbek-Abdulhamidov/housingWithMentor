import React, { Suspense, lazy } from "react";
import useId from "../hooks/useId";

const HomePage = lazy(() => import("../pages/Home"));
const PropertyPage = lazy(() => import("../pages/Property"));

export const navbar = [
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <HomePage />,
      </Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <PropertyPage />
      </Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Sign In</h1>,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  },
];
