import React, { useRef, useState } from "react";
import { Layout, Typography, Drawer, Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Overview from "./Overview";
import Scorecard from "./Scorecard";
import Statstable from "./Stats";
import Commentary from "./Commentary";
import Morematches from "./Morematches";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import "./App.css";

const { Text } = Typography;
const { Header, Content, Footer } = Layout;

const Clayout: React.FC = () => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const commentaryRef = useRef<HTMLDivElement>(null);
  const scorecardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const matchesRef = useRef<HTMLDivElement>(null);

  const screens = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      const topOffset = document.querySelector('header')?.clientHeight || 0; // Get the height of the fixed header
      const scrollToPosition = ref.current.offsetTop - topOffset; // Calculate the correct scroll position
      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
      ref.current.style.backgroundColor = "#E3FEF6";
      setTimeout(() => {
        time(ref);
      }, 1000);
    }
    function time(ref: React.RefObject<HTMLDivElement>) {
      if (ref.current) {
        ref.current.style.backgroundColor = "transparent";
      }
    }
  };

  const handleDrawerClose = () => {
    setDrawerVisible(false);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleMenuClick = (key: string) => {
    const ref = getRef(key);
    scrollToSection(ref);
    setDrawerVisible(false);
  };

  const getRef = (key: string): React.RefObject<HTMLDivElement> | null => {
    switch (key) {
      case 'overview':
        return overviewRef;
      case 'scorecard':
        return scorecardRef;
      case 'commentary':
        return commentaryRef;
      case 'stats':
        return statsRef;
      case 'matches':
        return matchesRef;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%", backgroundColor: "black" }}>
        <div className="top-menu">
          <div className="left-menu">
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{ color: "white" }}
            />
            <Text style={{ color: "black", padding: "0 20px" }}>CricPulse</Text>
          </div>
          {screens.md ? (
            <Menu mode="horizontal" theme="dark">
              <Menu.Item key="overview" onClick={() => handleMenuClick('overview')}>
                <Text style={{ color: "white", backgroundColor: "black" }}>Overview</Text>
              </Menu.Item>
              <Menu.Item key="scorecard" onClick={() => handleMenuClick('scorecard')}>
                <Text style={{ color: "white", backgroundColor: "black" }}>Scorecard</Text>
              </Menu.Item>
              <Menu.Item key="commentary" onClick={() => handleMenuClick('commentary')}>
                <Text style={{ color: "white", backgroundColor: "black" }}>Commentary</Text>
              </Menu.Item>
              <Menu.Item key="stats" onClick={() => handleMenuClick('stats')}>
                <Text style={{ color: "white", backgroundColor: "black" }}>Stats</Text>
              </Menu.Item>
              <Menu.Item key="matches" onClick={() => handleMenuClick('matches')}>
                <Text style={{ color: "white", backgroundColor: "black" }}>More Matches</Text>
              </Menu.Item>
            </Menu>
          ) : null}
        </div>
        <Drawer
          title="Navigation"
          placement="right"
          onClose={handleDrawerClose}
          visible={drawerVisible}
          bodyStyle={{ padding: 0 }}
        >
          <Menu mode="vertical" theme="dark">
            <Menu.Item key="overview" onClick={() => handleMenuClick('overview')}>
              <Text style={{ color: "black" }}>Overview</Text>
            </Menu.Item>
            <Menu.Item key="scorecard" onClick={() => handleMenuClick('scorecard')}>
              <Text style={{ color: "black" }}>Scorecard</Text>
            </Menu.Item>
            <Menu.Item key="commentary" onClick={() => handleMenuClick('commentary')}>
              <Text style={{ color: "black" }}>Commentary</Text>
            </Menu.Item>
            <Menu.Item key="stats" onClick={() => handleMenuClick('stats')}>
              <Text style={{ color: "black" }}>Stats</Text>
            </Menu.Item>
            <Menu.Item key="matches" onClick={() => handleMenuClick('matches')}>
              <Text style={{ color: "black" }}>More Matches</Text>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div ref={overviewRef}>
          <Overview />
        </div>
        <div ref={scorecardRef}>
          <Scorecard />
        </div>
        <div ref={commentaryRef}>
          <Commentary />
        </div>
        <div ref={statsRef}>
          <Statstable />
        </div>
        <div ref={matchesRef}>
          <Morematches />
        </div>
      </Content>
      <Footer style={{ textAlign: "center", marginTop: 20, color:"black",backgroundColor: "white" }}>
        <Text>CopyRights@kaviyaNagu..</Text>
      </Footer>
    </Layout>
  );
};

export default Clayout;
