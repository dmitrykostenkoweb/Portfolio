import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material/";

import Services from "../../../Services/Services";

const PortfolioNav = ({ matches, darkMode, navValue, setNavValue }) => {
  const resources = new Services();

  const navigation = resources.getData().map((item) => {
    const { title, id } = item;

    return (
      <BottomNavigationAction
        label={title}
        key={id}
        style={{ color: darkMode ? "#fff" : "#000", fontWeight: 600 }}
      />
    );
  });

  return (
    <BottomNavigation
      showLabels
      value={navValue}
      onChange={(event, newValue) => {
        setNavValue(newValue);
      }}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: matches ? "row" : "column",
      }}
    >
      {navigation}
    </BottomNavigation>
  );
};

export default PortfolioNav;
