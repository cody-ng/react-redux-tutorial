import React from "react";
import HookLayout from "./HookLayout";
import { CoursesProvider } from "../hooks/CoursesContext";

const HomePage = () => {
  return (
    <CoursesProvider>
      <HookLayout />
    </CoursesProvider>
  );
};

export default HomePage;
