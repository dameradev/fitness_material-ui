import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
// import { muscles } from "../../store";
// import Tab from "@material-ui/core/Tab";

const styles = {
  Tab: {
    minWidth: "70px",
  },
};

const Footer = ({ muscles, category, onSelect }) => {
  const index = category
    ? muscles.findIndex((group) => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? "" : muscles[index - 1]);

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        onChange={onIndexSelect}
        centered
      >
        <Tab label="All" style={styles.Tab} />
        {muscles.map((group) => (
          <Tab key={group} label={group} style={styles.Tab} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
