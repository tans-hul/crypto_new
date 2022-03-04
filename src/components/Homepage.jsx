import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
// import { News } from '.';
import { Cryptocurrencies } from '.';



const { Title } = Typography;



const Hoempage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);// this is a Hook

  if (isFetching) return 'Loading:>:);>:]';
  const GlobalStats = data?.data?.stats;

  // console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrecies" value={GlobalStats.totalCoins} /></Col>
        <Col span={12}><Statistic title="Total Excahnges" value={millify(GlobalStats.totalExchanges)} /> </Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(GlobalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24Hrs" value={millify(GlobalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total market" value={millify(GlobalStats.totalMarkets)} /></Col>
      </Row>

      <div className='home-heding-container'>
        <Title level={2} className="home-title">Top 10 Cyptos in World</Title>
        <Title level={2} className="show-more">
          <Link to="/Cryptocurrecies">Show more</Link>
        </Title>


      </div>
      <Cryptocurrencies simplified={true} />

      <div className='home-heding-container'>
        <Title level={2} className="home-title">Latest News</Title>
        <Title level={2} className="show-more">
          {/* <Link to="/News">Show more</Link> */}
        </Title>


      </div>
      {/* <News simplified /> */}


    </>
  )
}

export default Hoempage