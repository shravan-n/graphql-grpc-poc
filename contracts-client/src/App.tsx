import { Container, ThemeProvider } from "@mui/material";
import React from "react";
import "./styles.css";
import Homepage from "./components/pages/ContractsPage";
import Login from "./components/pages/LoginPage";
import { theme } from "./Themes/theme";
import AddContractPage from "./components/pages/AddContractPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Container fixed>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/contracts" element={<Homepage />} />
              <Route path="/addContract" element={<AddContractPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default App;
