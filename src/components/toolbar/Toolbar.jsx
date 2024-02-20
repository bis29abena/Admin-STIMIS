import "./toolbar.css";
import DropDownMenu from "../../components/dropdownmenu/DropDownMenu";
import { useEffect, useState } from "react";
import { generateDates } from "../../utils/generatedate";
import SwitchMenu from "../switchmenu/SwitchMenu";
import ChartType from "../chartType/ChartType";
import DownloadIcon from "@mui/icons-material/Download";
import ToolTip from "../tootlip/ToolTip";

export default function Toolbar({ type, setType, setChartType }) {
  const [dates, setdate] = useState([]);

  useEffect(() => {
    const dates = generateDates();

    setdate(dates);
  }, []);

  var data = ["Line", "Bar", "Pie Chart", "Histogram", "Area"];
  return (
    <div className="toolbar">
      <div className="toolbarWrapper">
        <div className="toolbarLeft">
          <div className="dropdowns">
            <span className="date">Start / End Period:</span>
            <DropDownMenu title="Start Date" items={dates} key="m1" />
          </div>
          <div className="dropdowns">
            <DropDownMenu title="End Date" items={dates} key="m2" />
          </div>
          <div className="dropdowns">
            <ChartType
              title="Graph"
              items={data}
              key="m3"
              setChartType={setChartType}
            />
          </div>
        </div>
        <div className="toolbarRight">
          <SwitchMenu setType={setType} type={type} />
          <ToolTip text="Download">
            <button className="downbtn">
              <DownloadIcon />
            </button>
          </ToolTip>
        </div>
      </div>
    </div>
  );
}
