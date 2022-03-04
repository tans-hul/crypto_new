import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, CryptoDetails, Cryptocurrencies, News, Homepage } from "./components";
import './App.css';


const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Switch>
                            <Route exact path='/'>
                                <Homepage />
                            </Route>
                            <Route exact path='/Excahnges'>
                                <Exchanges />
                            </Route>

                            <Route exact path='/Cryptocurrencies'>
                                <Cryptocurrencies />
                            </Route>

                            <Route exact path='/CryptoDetails/:coinId'>
                                <CryptoDetails />
                            </Route>
                            {/* <Route exact path='/News'>
                                <News />
                            </Route> */}

                        </Switch>

                    </div>
                </Layout>

                <div className='footer'>



                    <Typography.Title level={3} style={
                        { color: "white", textAlign: "center" }
                    }>
                        CryptoVerse <br />
                        All right reserved

                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/Excahnges">Exchanges</Link>
                        {/* <Link to="/News">News</Link> */}
                    </Space>
                </div>
            </div>

        </div>
    )
}

export default App