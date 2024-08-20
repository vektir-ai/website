import React from "react";
import { Metadata } from "next";
import TaskList from "@/components/Tasks/TaskList";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TaskHeader from "@/components/Tasks/TaskHeader";

export const metadata: Metadata = {
  title: "Next.js Task List Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Task List page for NextAdmin Dashboard Kit",
};
const TaskListPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-5xl">
        <Breadcrumb pageName="Task List" />

        <TaskHeader />
        <TaskList />
      </div>
    </DefaultLayout>
  );
};

export default TaskListPage;
