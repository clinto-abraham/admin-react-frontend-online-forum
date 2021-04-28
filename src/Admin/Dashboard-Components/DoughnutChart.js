import React from "react";
import { CChartDoughnut } from "@coreui/react-chartjs";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";

const DoughnutChart = (props) => (
  <>
    <CCard>
      <CCardHeader>Module Chart</CCardHeader>
      <CCardBody>
        <CChartDoughnut
          datasets={[
            {
              backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
              data: [40, 20, 80, 10],
            },
          ]}
          labels={["Reading", "Listening", "Speaking", "Writing"]}
          options={{
            tooltips: {
              enabled: true,
            },
          }}
        />
      </CCardBody>
    </CCard>
  </>
);

export default DoughnutChart;
