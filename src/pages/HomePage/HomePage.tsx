import React from "react";
import Header from "../../components/Header";
import DataTable from "../../components/Table/Table";
import ReviewCard from "../../components/Card/Card";
import { HomePageContainerStyled } from "./HomePageStyles";
// import GistList from "../components/GistList";

const HomePage: React.FC = () => {
  return (
    <HomePageContainerStyled>
      <Header />
      <DataTable />
      <div className="cards">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </HomePageContainerStyled>
  );
};

export default HomePage;
