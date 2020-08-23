import React from "react";
import { Provider } from "react-redux";

import CoursesPage from "./CoursesPage";
import configureStore from "../configureStore";

const store = configureStore();

const HomePage = () => {
  return (
    <Provider store={store}>
      <CoursesPage />
    </Provider>
  );
};

export default HomePage;
