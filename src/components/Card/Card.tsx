import * as React from "react";
import Card, { CardProps } from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";

import { red } from "@mui/material/colors";
import { Typography } from "antd";
import { CardContainerStyled } from "./CardStyles";

const ReviewCard: React.FC<CardProps> = ({name, date, time, keyword,notebook}) => {
  return (
    <CardContainerStyled>
      <Card >
        <CardContent>
          <Typography>
            {date}
            <br />
            {keyword}
            <br />
            {notebook}
            <br />
          </Typography>
        </CardContent>
        <CardHeader
          avatar={
            <div className="AvatarStyle">
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                src="src/assets/Avatar/img_avatar.png"
              >
                S
              </Avatar>

              <div className="HeaderDetailStyle">
                <Typography>{name || " "}</Typography>
                <Typography>{time || " "}</Typography>
              </div>
            </div>
          }
        />
      </Card>
    </CardContainerStyled>
  );
};

export default ReviewCard;
