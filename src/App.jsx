import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { Box } from "@mui/material";

/* color de fondo = #000 */

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header handleSearch={(value) => console.log(value)} />
        <Box
          style={{
            height: "75px",
          }}
        ></Box>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
