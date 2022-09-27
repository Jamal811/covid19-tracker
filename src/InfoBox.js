import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const InfoBox = ({ title, cases, total }) => {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="textSecoundary">
          {title}
        </Typography>
        <h2 className="infoBox__cases">{cases}</h2>
        <Typography className="infoBox__total" color="textSecoundary">
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
