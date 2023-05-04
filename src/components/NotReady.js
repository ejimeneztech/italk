import React from "react";
import Textbox from "./TextBox";

import Container from "./Container";

import Filter from "./Filter";

export default function Ready() {
  return (
    <div>
      <br></br>
      <Textbox text="" />

      <br></br>

      <Filter />

      <Container></Container>
      <br></br>
      <br></br>
    </div>
  );
}
