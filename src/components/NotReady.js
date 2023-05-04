import React from "react";
import Textbox from "./TextBox";
import Container from "./Container";
import Filter from "./Filter";
import ButtonLoading from "./ButtonLoading";

export default function Ready() {
  return (
    <div>
      <br></br>
      <Textbox text="" />
      <br></br>
      <Filter />
      <Container>
        <ButtonLoading />
      </Container>
      <br></br>
      <br></br>
    </div>
  );
}
