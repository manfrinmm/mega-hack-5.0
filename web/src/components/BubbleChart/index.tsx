import React from "react";
import "./styles.css";

import { Box } from "@material-ui/core";
import formatCurrency from "../../utils/formatCurrency";

interface BubbleChartProps {
  revenue: number;
  cost: number;
}

const BubbleChart: React.FC<BubbleChartProps> = (props) => {
  let total = props.revenue + Math.abs(props.cost);

  let revenuePercent = props.revenue / total;

  let costPercent = Math.abs(props.cost) / total;

  const bubbleRevenue = 250 * revenuePercent;

  const bubbleCost = 250 * costPercent;
  let zindex = "";

  if (props.revenue < Math.abs(props.cost)) {
    zindex = "zindex";
  } else {
    zindex = "";
  }

  return (
    <Box id="BubbleChart" display="flex">
      <Box
        id="revenue"
        className={`bubble white revenue ${zindex}`}
        width={`${bubbleRevenue}px`}
        height={`${bubbleRevenue}px`}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          {formatCurrency(props.revenue)}
        </Box>
      </Box>

      <Box
        className="bubble white cost"
        width={`${bubbleCost}px`}
        height={`${bubbleCost}px`}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          {formatCurrency(props.cost)}
        </Box>
      </Box>
    </Box>
  );
};

export default BubbleChart;
