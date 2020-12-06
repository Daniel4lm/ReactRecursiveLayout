//import logo from './logo.svg';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { HamburgerButton} from './components/sidebar/Hamburger';

import { GlobalCSS, AppStyle } from './app-style/style';

import Context from './context/AppContext';

import dataList from './menuData/menuList';
import RenderRoutes from './routes/routing';

import ScreenSize from './Screen/ScreenSize';

function App() {

  const [selectedItems, setSelectedItems] = useState({});
  const [toggleBar, setToggleBar] = useState(true);

  const hambRef = useRef();

  const windowSize = ScreenSize();

  const toggleSideBar = (e) => {
    setToggleBar(toggleBar => !toggleBar);
    //e.stopPropagation();
    //e.nativeEvent.stopImmediatePropagation();
  }

  const hideSideBar = () => {
    setToggleBar(true);
  }

  useEffect(() => {
    console.log('Selected: ', selectedItems);
    console.log(hambRef.current)
  }, [selectedItems])

  const updateItems = (selected) => {
    //console.log('Old', selectedItems, 'new', selected)
    setSelectedItems({ ...selected });
  }

  return (
    <AppStyle.GridContainer>
      <GlobalCSS />

      <Context.AppContext.Provider value={{ dataList, selectedItems, updateItems, windowSize, toggleBar, hideSideBar, hambRef }}>
        <Router>

          <SideBar />
          <Header >
            <HamburgerButton ref={hambRef} toggleBar={toggleBar} toggleSideBar={toggleSideBar} />
          </Header>
          <Content />

        </Router>
      </Context.AppContext.Provider>

    </AppStyle.GridContainer>
  );
} // <RenderRoutes routes={dataList} container='header' />


export default App;
