import React from "react";
import MainLayout from "./layouts/main/main-layout";

function Index(props) {
  return (
    <MainLayout>
      <h1>Hello {props.name}</h1>
    </MainLayout>
  );
}

export default Index;
