import React from "react";
import Switch from "@mui/material/Switch";

import "./switchmenu.css";


export default function SwitchMenu({type, setType}) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);

    if (checked) {
      setType("Table");
    } else {
      setType("Graph");
    }
  };

  return (
      <div className="switch">
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        {type}
      </div>
  );
}
