import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Actors Capability to Innovate</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyrate">
            -11.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Intelectual Property - 2022 22</span>
        <span className="featuredSub">Number of Parents 10</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Actors Interaction</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyrate">
            +11.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">industrial Design</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Human Capital</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyrate">
            -11.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        
        <span className="featuredSub">STEM Graduates - 2018/2019 405,985</span>
        <span className="featuredSub">Number of PHD Researchs 120</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Economy</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyrate">
            +11.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Ghana's GDP $72.84 Billion</span>
        <span className="featuredSub">Ghana's Population 2021 31 Milllion</span>
      </div>
    </div>
  );
}
