import React, { useEffect } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Typography } from 'antd';
import { useState } from 'react';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { SmileFilled } from '@ant-design/icons';
const Title = Typography;


const Cryptocurrencies = ({ simplified }) => {

  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    setCryptos(filteredData);
  }
    , [cryptosList, searchTerm])


  console.log(cryptosList);
  console.log(cryptos);

  if (isFetching) return 'Loading....';

  return (
    // <div>Crypto Currencies</div>
    <>
      {!simplified && (
        <div className='search-crypto'>
          <Input placeholder='Search Crypto' onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      )}
      ;



      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (

          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}.${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} />} hoverable >
                "{currency.uuid}"
                <p> Price: {millify(currency.price)}</p>
                <p> Market Cap: {millify(currency.marketCap)}</p>
                <p> Change: {millify(currency.change)}%</p>

              </Card>
            </Link>
          </Col>
        ))
        }
      </Row>
    </>
  )
}

export default Cryptocurrencies