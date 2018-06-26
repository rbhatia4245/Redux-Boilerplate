import React from 'react';
import Header from '../containers/header';
import Menu from '../containers/menu';
import Tabs from '../containers/Tabs';
import Tabcontent from '../containers/Tabcontent';
import Headerpri from '../containers/Headerpri';
const App = () => (
    <div>
    <Headerpri />
    <Menu />
    <Header />
    <Tabs />
    <Tabcontent />
    </div>
);

export default App;
