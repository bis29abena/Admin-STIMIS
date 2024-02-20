import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";

import "./sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("");
  const [activeLink2, setActiveLink2] = useState("");
  const [activeLink3, setActiveLink3] = useState("");
  const [activeLink4, setActiveLink4] = useState("");


  const [stiCat, setStiCat] = useState([]);
  const [stiClass, setStiClass] = useState([]);

  const menuData = {
    "Innovation Activities": ["Inovative Linkage"],
    "Innovation Impacts": ["Innovators"],
    "STI Investments": ["Intellectual Property", "Venture Capital"],
    Economy: [],
    "Combined Indicators": ["Combined Indicators"],
  };

  const menuSTICAT = {
    "Inovative Linkage": ["Commercialization Of Public Research", "Technology"],
    Innovators: ["Technology Hubs"],
    "Intellectual Property": [],
    "Venture Capital": [],
    "Combined Indicators": [],
  };

  const indicatorTypes = ["Input", "Output", "Outcomes", "Impacts"]

  const handleClickSTICAT = (text) => {
    const stis = menuData[`${text}`];
    setStiCat(stis);
    setStiClass([])
    setActiveLink(text);
  };

  const handleClickSTICLASS = (text) => {
    const stiCl = menuSTICAT[`${text}`];
    setStiClass(stiCl);
    setActiveLink2(text);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">STI Readiness</h3>
          <ul className="sidebarList">
            <li
              className={
                activeLink === "Innovation Activities"
                  ? "sidebarListItem1 active"
                  : "sidebarListItem1"
              }
              onClick={() => handleClickSTICAT("Innovation Activities")}
            >
              <LineStyle className="sidebarIcon" />
              Innovation Activities
            </li>

            <li
              className={
                activeLink === "Innovation Impacts"
                  ? "sidebarListItem1 active"
                  : "sidebarListItem1"
              }
              onClick={() => handleClickSTICAT("Innovation Impacts")}
            >
              <LineStyle className="sidebarIcon" />
              Innovation Impacts
            </li>
            <li
              className={
                activeLink === "STI Investments"
                  ? "sidebarListItem1 active"
                  : "sidebarListItem1"
              }
              onClick={() => handleClickSTICAT("STI Investments")}
            >
              <LineStyle className="sidebarIcon" />
              STI Investments
            </li>
            <li
              className={
                activeLink === "Economy"
                  ? "sidebarListItem1 active"
                  : "sidebarListItem1"
              }
              onClick={() => handleClickSTICAT("Economy")}
            >
              <LineStyle className="sidebarIcon" />
              Economy
            </li>
            <li
              className={
                activeLink === "Combined Indicators"
                  ? "sidebarListItem1 active"
                  : "sidebarListItem1"
              }
              onClick={() => handleClickSTICAT("Combined Indicators")}
            >
              <LineStyle className="sidebarIcon" />
              Combined Indicators
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">STI Category</h3>
          <ul className="sidebarList">
            {stiCat.map((value, index) => (
              <li
                className={
                  activeLink2 === `${value}`
                    ? "sidebarListItem2 active"
                    : "sidebarListItem2"
                }
                key={index}
                onClick={() => handleClickSTICLASS(value)}
              >
                <Storefront className="sidebarIcon" />
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">STI Classes</h3>
          <ul className="sidebarList">
            {stiClass.map((value, index) => (
              <li
                className={
                  activeLink3 === `${value}`
                    ? "sidebarListItem3 active"
                    : "sidebarListItem3"
                }
                key={index}
                onClick={() => setActiveLink3(value)}
              >
                <DynamicFeed className="sidebarIcon" />
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Indicator Types</h3>
          <ul className="sidebarList">
            {indicatorTypes.map((value, index) => (
              <li  className={
                activeLink4 === `${value}`
                  ? "sidebarListItem4 active"
                  : "sidebarListItem4"
              }
              key={index}
              onClick={() => setActiveLink4(value)}>
              <WorkOutline className="sidebarIcon" />
              {value}
            </li>
            ))}
            
           
          </ul>
        </div>
      </div>
    </div>
  );
}
