import AppBar from "@mui/material/AppBar";
/* import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase"; */
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
/* import SearchIcon from "@mui/icons-material/Search"; */
import { PropTypes } from "prop-types";

/* const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
})); */

ButtonAppBar.propTypes = {
  handleSearch: PropTypes.func,
};
export default function ButtonAppBar(/* { handleSearch } */) {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "15 px",
            backgroundColor: "#121212",
          }}
        >
          <Button
            color="inherit"
            onClick={() => {
              nav("products");
            }}
            sx={{
              backgroundColor: pathname == "/products" ? "rgba(0,0,0,.7)" : "",
            }}
          >
            Productos
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              nav("carts");
            }}
            sx={{
              backgroundColor: pathname == "/carts" ? "rgba(0,0,0,.7)" : "",
            }}
          >
            Carritos
          </Button>

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
