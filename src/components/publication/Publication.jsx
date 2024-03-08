import React, { useEffect, useState } from "react";
import "./publication.css";

export default function Publication({ publicationDetails }) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(publicationDetails?.[0]);
  }, [publicationDetails]);

  return (
    <div className="publication">
      <div className="publicationWrapper">
        <div className="pub">
          <div className="title">{data?.title}</div>
          <div className="publicationData">
            <div className="label">
              Indicator Name :
              <span className="labelData">{data?.indicatorName}</span>
            </div>
            <div className="label">
              Description :
              <span className="labelData">{data?.description}</span>
            </div>
            <div className="label">
              Justification :
              <span className="labelData">{data?.justification}</span>
            </div>
            <div className="label">
              Data Source :<span className="labelData">{data?.dataSource}</span>
            </div>
            <div className="label">
              Unit Of Measure :
              <span className="labelData">{data?.unitOfMeasure}</span>
            </div>
            <div className="label">
              Country :<span className="labelData">{data?.country}</span>
            </div>
            <div className="label">
              Performance :
              <span className="labelData">{data?.performance}</span>
            </div>
            <div className="label">
              Casuality :<span className="labelData">{data?.causality}</span>
            </div>
            <div className="label">
              Forecasting :
              <span className="labelData">{data?.forcasting}</span>
            </div>
            <div className="label">
              Recomendation :
              <span className="labelData">{data?.recommendations}</span>
            </div>
            <div className="label">
              Start Date :<span className="labelData">{data?.startDate}</span>
            </div>
            <div className="label">
              End Date :<span className="labelData">{data?.endDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
