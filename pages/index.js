import * as React from "react";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import SearchAppBar from "../components/searchAppBar";
import NewBetForm from "../components/newBetForm";
import Header from "../components/header";

function Page() {
  return (
    <>
      <Header />
      <Container>
        <SearchAppBar />
        <Grid2 container spacing={2}>
          <div>
            <h1>Welcome to the FFF</h1>
            <Link href={"/bet-list"}>Click here to view bets</Link>
            <NewBetForm />
          </div>
        </Grid2>
      </Container>
    </>
  );
}
export default Page;
