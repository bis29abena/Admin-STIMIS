import "./toolbar.css";
import DropDownMenu from "../../components/dropdownmenu/DropDownMenu";
import { useEffect, useState } from "react";
import { generateDates } from "../../utils/generatedate";
import SwitchMenu from "../switchmenu/SwitchMenu";
import ChartType from "../chartType/ChartType";
import DownloadIcon from "@mui/icons-material/Download";
import ToolTip from "../tootlip/ToolTip";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Toolbar({ type, setType, setChartType }) {
  const [startDate, starteSetDate] = useState(null);
  const [endDate, EndSetDate] = useState(null)

  var data = ["Line", "Bar", "Pie Chart", "Histogram", "Area"];
  return (
    <div className="toolbar">
      <div className="toolbarWrapper">
        <div className="toolbarLeft">
          <div className="dropdowns">
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker
                value={startDate}
                onChange={(newValue) => starteSetDate(newValue)}
                label = "Start Date"
              />
            </LocalizationProvider>
          </div>
          <div className="dropdowns">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={endDate}
                onChange={(newValue) => EndSetDate(newValue)}
                label = "End Date"
              />
            </LocalizationProvider>
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
