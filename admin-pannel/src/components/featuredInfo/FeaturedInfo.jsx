import React from 'react';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      {/* Revanue columan */}
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.15 </span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featureSub">compare to last month</span>
      </div>
      {/* Sale columan */}
      <div className="featuredItem">
        <span className="featuredTitle">Sale</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$22.5 </span>
          <span className="featuredMoneyRate">
            -13.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featureSub">compare to last month</span>
      </div>
      {/* Cost columan */}
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$12.5 </span>
          <span className="featuredMoneyRate">
            -9.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featureSub">compare to last month</span>
      </div>

    </div>
  )
}

export default FeaturedInfo