import {
  LineStyle,
  Storefront,
  DynamicFeed,
  WorkOutline,
} from "@mui/icons-material";

import "./sidebar.css";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Tooltip from "@mui/material/Tooltip";
import AlertComp from "../alertcomp/AlertComp";
import SkeletonComp from "../skeletoncomp/SkeletonComp";
import useSidebarApiCall from "../../hooks/useSidebarApiCall";
import useSTIClasses from "../../hooks/useSTIClasses";
import useIndicatorTypes from "../../hooks/useIndicatorTypes";
import useCountry from "../../hooks/useCountry";
import useIndicatorSingle from "../../hooks/useIndicatorSingle";
import useIndicatorMultiple from "../../hooks/useInidicatorMultiple";

export default function Sidebar({publicationData}) {
  const [activeLink, setActiveLink] = useState("");
  const [activeLink2, setActiveLink2] = useState("");
  const [activeLink3, setActiveLink3] = useState("");
  const [activeLink4, setActiveLink4] = useState("");
  const [activeLink5, setActiveLink5] = useState("");
  const [activeLink6, setActiveLink6] = useState("");
  const [activeLink7, setActiveLink7] = useState("");


  const [showDiv1, setShowDiv1] = useState(true);

  const [queryCountry, setQueryCountries] = useState({
    readinessId: null,
    categoryId: null,
    classId: null,
    indicatorType: "",
  });

  const [queryIndicator, setQueryInidicator] = useState({
    countryId: null,
    indicatorFormat: null,
  });

  const { data, isPending, error } = useFetch(
    "Dashboard/getstireadinessdropdownlist"
  );
  const { idata, ierror, iisPending } = useIndicatorTypes(
    "Dashboard/getindicatortypesdropdownlist"
  );

  const { sideData, loading, sideError, fetchData } = useSidebarApiCall();
  const {
    stiClassesData,
    stiClassesLoading,
    stiClassesError,
    stiClassesfetchData,
  } = useSTIClasses();

  const {
    countriesData,
    countriesLoading,
    countriesError,
    countriesfetchData,
  } = useCountry();

  const {
    sinIndicatorData,
    sinIndicatorDataLoading,
    sinIndicatorDataError,
    sinIndicatorDatafetchData,
  } = useIndicatorSingle();

  const {mulIndicatorData, mulIndicatorDataLoading, mulIndicatorDataError, mulIndicatorDatafetchData} = useIndicatorMultiple()

  const handleClickSTICAT = (text, query) => {
    fetchData("Dashboard/getsticategoriesropdownlist", query);
    setActiveLink(text);

    setQueryCountries((prev) => ({
      ...prev,
      ["readinessId"]: query["readinessId"],
    }));
  };

  const handleClickSTICLASS = (text, query) => {
    stiClassesfetchData("Dashboard/getsticlassesdropdownlist", query);
    setActiveLink2(text);

    setQueryCountries((prev) => ({
      ...prev,
      ["categoryId"]: query["categoryId"],
    }));
  };

  const handleClickSTIClasses = (text, query) => {
    setActiveLink3(text);
    setQueryCountries((prev) => ({
      ...prev,
      ["classId"]: query["classId"],
    }));
  };

  const handleIndicator = (text, query, param) => {
    setActiveLink4(text);
    setQueryCountries((prev) => ({
      ...prev,
      ["indicatorType"]: text,
    }));

    setQueryInidicator((prev) => ({
      ...prev,
      ["indicatorFormat"]: text,
    }));

    sinIndicatorDatafetchData("Dashboard/getstiindicatorsdropdownlist", param);
  };

  const handleIndicatorCountry = (text, id) => {
    setActiveLink6(text);
    setQueryInidicator((prev) => ({
      ...prev,
      ["countryId"]: id,
    }));
  };

  useEffect(() => {
    if (
      Object.values(queryCountry).every(
        (value) => value !== undefined && value !== null && value !== ""
      )
    ) {
      countriesfetchData("Dashboard/getcountriesdropdownlist", queryCountry);
    }
  }, [queryCountry]);

  useEffect(() => {
    if (
      Object.values(queryIndicator).every(
        (value) => value !== undefined && value !== null && value !== ""
      )
    ) {
      mulIndicatorDatafetchData("Dashboard/getstiindicatorsdropdownlist", queryIndicator)
    }
  }, [queryIndicator]);

  const handleToggle = () => {
    setShowDiv1(!showDiv1);
  };

  const handleIndicatorClick = (text, id) => {
    setActiveLink7(text)
    publicationData("Dashboard/getdashboardsummary", {publicationId: id})
  }

  const handleAnalysisClick = (text, id) => {
    setActiveLink5(text)
    publicationData("Dashboard/getdashboardsummary", {publicationId: id})
  }


  return (
    <div className="sidebar">
      <div className="radioButtons">
        <div className="single">
          <input
            type="radio"
            id="div1Radio"
            name="divToggle"
            value="div1"
            checked={showDiv1}
            onChange={handleToggle}
          />
          <label htmlFor="div1Radio" className="ind">
            Single
          </label>
        </div>
        <div className="analysis">
          <input
            type="radio"
            id="div2Radio"
            name="divToggle"
            value="div2"
            checked={!showDiv1}
            onChange={handleToggle}
          />
          <label htmlFor="div2Radio" className="ind">
            Analysis
          </label>
        </div>
      </div>

      <div className={`sidebarWrapper ${showDiv1 ? "aactive" : "inactive"}`}>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">STI Readiness</h3>
          <div className="scrollable-list">
            <ul className="sidebarList">
              {isPending ? (
                <SkeletonComp />
              ) : error != null ? (
                <div>
                  <SkeletonComp />
                  <AlertComp message={error} type="error" />
                </div>
              ) : (
                data?.map((value, index) => (
                  <Tooltip title={value.description} key={index}>
                    <li
                      className={
                        activeLink === `${value.name}`
                          ? "sidebarListItem1 active"
                          : "sidebarListItem1"
                      }
                      onClick={() =>
                        handleClickSTICAT(value.name, {
                          readinessId: value.id,
                        })
                      }
                      key={index}
                    >
                      <LineStyle className="sidebarIcon" />
                      {value.name}
                    </li>
                  </Tooltip>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">STI Category</h3>
          <div className="scrollable-list">
            <ul className="sidebarList">
              {loading ? (
                <SkeletonComp />
              ) : sideError != null ? (
                <>
                  <SkeletonComp />
                  <AlertComp message={sideError} type="error" />
                </>
              ) : (
                sideData?.map((value, index) => (
                  <Tooltip title={value.description} key={index}>
                    <li
                      className={
                        activeLink2 === `${value.name}`
                          ? "sidebarListItem2 active"
                          : "sidebarListItem2"
                      }
                      key={index}
                      onClick={() =>
                        handleClickSTICLASS(value.name, {
                          categoryId: value.id,
                        })
                      }
                    >
                      <Storefront className="sidebarIcon" />
                      {value.name}
                    </li>
                  </Tooltip>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">STI Classes</h3>
          <div className="scrollable-list">
            <ul className="sidebarList">
              {stiClassesLoading ? (
                <SkeletonComp />
              ) : stiClassesError != null ? (
                <>
                  <SkeletonComp />
                  <AlertComp message={stiClassesError} type="error" />
                </>
              ) : (
                stiClassesData?.map((value, index) => (
                  <Tooltip title={value.description} key={index}>
                    <li
                      className={
                        activeLink3 === `${value.name}`
                          ? "sidebarListItem3 active"
                          : "sidebarListItem3"
                      }
                      key={index}
                      onClick={() =>
                        handleClickSTIClasses(value.name, { classId: value.id })
                      }
                    >
                      <DynamicFeed className="sidebarIcon" />
                      {value.name}
                    </li>
                  </Tooltip>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Indicator Types</h3>
          <div className="scrollable-list">
            <ul className="sidebarList">
              {iisPending ? (
                <SkeletonComp />
              ) : ierror != null ? (
                <>
                  <SkeletonComp />
                  <AlertComp message={ierror} type="error" />
                </>
              ) : (
                idata?.map((value, index) => (
                  <Tooltip title={value.description} key={index}>
                    <li
                      className={
                        activeLink4 === `${value.name}`
                          ? "sidebarListItem4 active"
                          : "sidebarListItem4"
                      }
                      key={index}
                      onClick={() =>
                        handleIndicator(
                          value.name,
                          {
                            indicatorType: value.id,
                          },
                          { indicatorFormat: value.name }
                        )
                      }
                    >
                      <WorkOutline className="sidebarIcon" />
                      {value.name}
                    </li>
                  </Tooltip>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Country/Regional Block</h3>
          <div className="scrollable-list">
            <ul className="sidebarList">
              {countriesLoading ? (
                <SkeletonComp />
              ) : countriesError != null ? (
                <>
                  <SkeletonComp />
                  <AlertComp message={countriesError} type="error" />
                </>
              ) : (
                countriesData?.map((value, index) => (
                  <Tooltip title={value.description} key={index}>
                    <li
                      className={
                        activeLink6 === `${value.name}`
                          ? "sidebarListItem6 active"
                          : "sidebarListItem6"
                      }
                      key={index}
                      onClick={() =>
                        handleIndicatorCountry(value.name, value.id)
                      }
                    >
                      <WorkOutline className="sidebarIcon" />
                      {value.name}
                    </li>
                  </Tooltip>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Indicators</h3>
          <div className="scrollable-list">
            <ul className="sidebarList">
              {mulIndicatorDataLoading ? (
                <SkeletonComp />
              ) : mulIndicatorDataError != null ? (
                <>
                  <SkeletonComp />
                  <AlertComp message={countriesError} type="error" />
                </>
              ) : (
                mulIndicatorData?.map((value, index) => (
                  <Tooltip title={value.description} key={index}>
                    <li
                      className={
                        activeLink7 === `${value.name}`
                          ? "sidebarListItem7 active"
                          : "sidebarListItem7"
                      }
                      key={index}
                      onClick={() => {
                        handleIndicatorClick(value.name, value.id)
                      }}
                    >
                      <WorkOutline className="sidebarIcon" />
                      {value.name}
                    </li>
                  </Tooltip>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className={`sidebarWrapper ${!showDiv1 ? "aactive" : "inactive"}`}>
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Indicators</h2>
          <ul className="sidebarList">
            {sinIndicatorDataLoading ? (
              <SkeletonComp />
            ) : sinIndicatorDataError != null ? (
              <>
                <SkeletonComp />
                <AlertComp message={sinIndicatorDataError} type="error" />
              </>
            ) : sinIndicatorData.length > 0 ? (
              sinIndicatorData?.map((value, index) => (
                <Tooltip title={value.description} key={index}>
                  <li
                    className={
                      activeLink5 === `${value.name}`
                        ? "sidebarListItem5 active"
                        : "sidebarListItem5"
                    }
                    key={index}
                    onClick={() => handleAnalysisClick(value.name, value.id)}
                  >
                    <WorkOutline className="sidebarIcon" />
                    {value.name}
                  </li>
                </Tooltip>
              ))
            ) : (
              <li className="sidebarListItem5">
                Please Select An Indicator Type!!!
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
