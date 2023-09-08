import Grid from "@mui/material/Grid";
/* import Grid from '@mui/material/Unstable_Grid2'; */
import { PropTypes } from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

Cart.propTypes = {
  cart: PropTypes.object,
};

function Cart({ cart }) {
  const totalProducts = () =>
    cart.products.reduce((sum, curr) => sum + curr.quantity, 0);
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "grey", padding: "20px" }}
    >
      <Grid xs={6}>
        <Typography variant="h3" component="h3">
          {new Date(cart.date).toLocaleDateString()}
        </Typography>
      </Grid>
      <Grid xs={6} display="flex" justifyContent="space-evenly">
        <Typography variant="h3" component="h3">
          Total:
        </Typography>
        <Typography variant="h3" component="h3">
          {totalProducts()}
        </Typography>
      </Grid>
      <Grid xs={12}>
        <BasicTable products={cart.products} />
      </Grid>
    </Grid>
  );
}

const BasicTable = ({ products }) => {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#ccc6" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.productId}
              sx={{
                "td, th": { borderColor: "#000" },
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                {product.productId}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {product.quantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

BasicTable.propTypes = {
  products: PropTypes.array,
};

export default Cart;
