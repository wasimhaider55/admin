import React from 'react';
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { data } from '../../components/chart/dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

export const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        title="user Analytics"
        data={data}
        datakey="Active User"
        grid
      />
      <div className='homeWedget'>
          <WidgetSm/>
          <WidgetLg/>
      </div>
    </div>
  )
}
