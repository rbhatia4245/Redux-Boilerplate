import React from 'react';
import Header from '../containers/header';
import Menu from '../containers/menu';
import Tabs from '../containers/Tabs';
import Tabcontent from '../containers/Tabcontent';
const App = () => (
    <div>
    <Header />
    <Menu />
    <Header />
    <Tabs />
    <Tabcontent />
    </div>
);

export default App;
