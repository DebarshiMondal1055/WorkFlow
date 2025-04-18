import React, { useEffect, useState } from "react";
import Header from "../others/Header";
import TaskUpdates from "../others/TaskUpdates";
import TaskList from "../TaskList/TaskList";
import { useAuthContext } from "../../Context/AuthenticationContext";
import { TaskContextProvider } from "../../Context/TaskContext";

export default function Employee() {
  const { data, loggedInUserData, setUserData } = useAuthContext();



  return (
    // <TaskContextProvider value={{ task, removeTask }}>
      <div>
      <Header />
      <TaskUpdates />
      <TaskList />
      </div>
    // </TaskContextProvider>
  );
}
