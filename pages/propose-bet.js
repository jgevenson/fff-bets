import * as React from "react";
import Container from "@mui/material/Container";
import SearchAppBar from "../components/searchAppBar";
import NewBetForm from "../components/newBetForm";
import Header from "../components/header";

export default function ProposeBetPage() {
  return (
    <>
      <Header />
      <SearchAppBar />
      <Container>
        <NewBetForm />
      </Container>
    </>
  );
}
