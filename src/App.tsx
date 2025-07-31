import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import Bar from "./pages/bar/Bar";
import Geography from "./pages/Geography/Geography";
import Faq from "./pages/faq/Faq";
import Pie from "./pages/pie/Pie";
import Line from "./pages/line/Line";
import Form from "./pages/form/Form";
import Calendar from "./pages/calendar/Calendar";
import MySidebar from "./pages/global/Sidebar";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { Box } from "@mui/system";
import { useState } from "react";

const App = () => {
  const [theme, colorMode] = useMode();
  const [toggle, setToggle] = useState(false);
  // Create RTL cache
  const cacheRtl = createCache({
    key: colorMode.direction === "rtl" ? "muirtl" : "muiltr",
    stylisPlugins:
      colorMode.direction === "rtl" ? [prefixer, rtlPlugin] : [prefixer],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app" dir={colorMode.direction}>
            <MySidebar toggle={toggle} setToggle={setToggle} />
            <Box role="main" px={2} py={0.5} className="content">
              <Topbar setToggle={setToggle} toggle={toggle} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/form" element={<Form />} />
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contact />} />
              </Routes>
            </Box>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
};

export default App;
