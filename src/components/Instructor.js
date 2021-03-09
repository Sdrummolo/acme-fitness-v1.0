import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core";

import instructor from "../img/instructor.png";

const Instructor = () => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Instructor" src={instructor} />
        </ListItemAvatar>
        <ListItemText
          primary="Instructor Name"
          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default Instructor;
