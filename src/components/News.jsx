import React, { useState } from 'react'

// import { Option } from 'rc-select';
import { Select, Typography, Card, Row, Col, Avatar } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';


const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  console.log(cryptoNews?.value);
  // console.log(cryptoNews.queryContext);


  if (!cryptoNews?.value) return 'Loading...';

  return (


    <>
      <Row gutter={[24, 2]}>
        {!simplified &&(
        <Col span={24}>
        
        <Select
        showSearch
        className='select-news'
        paceholder='select a crypto'
        optionFileterProp = 'children'
        onChange ={(value)=>setNewsCategory(value)}
        filterOption = {(input,option)=> option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
        >
          <Option value = "Cryptocurrency">Cryptocueency</Option>
          {data?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}
        </Select>
        
        </Col>

      )}
        {cryptoNews?.value.map((news, i)=>(
            <Col xs ={24} sm ={12} lg ={8} key={i}>
              <Card hoverable className="news-card">
                <a href={news.url} target = "_blank" rel = "noreferrer"></a>
                <div className="news-image-container">
                  <Title className='news-title' level={4}>{news.name}</Title>
                  <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl } ></img>
                </div>
              <p>
                {news.description > 100
                ? `${news.description.substring(0,100)}...`
                : news.description
                }
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl } alt="news" />
                  <Text className='provider-name'>{news.provider?.name}</Text>
                </div>
                  <Text> {moment(news.dataPublished).startOf('ss').fromNow()}</Text>

              </div>
              </Card>


            </Col>
          ))}
        {/* {cryptoNews?.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <p></p>

          </Col>
        ))} */}
      </Row>
    </>
  )
}

export default News