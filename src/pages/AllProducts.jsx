import { useQuery } from "react-query";
/* import Service from "../Service"; */
/* import CardProduct from "../components/CardProduct"; */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid /* , Typography */,
  /*   Stack */ Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
/* import { Fragment } from "react"; */

export default function AllProducts() {
  const nav = useNavigate();
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  return (
    <Container maxWidth="x" /* sx={{ backgroundColor: "#121212" }} */>
      {/* <Typography color="common.white">Productos</Typography> */}
      <Grid container spacing={2}>
        {productsQuery.data?.map((prod, index) => (
          <Grid item key={index} xs={4}>
            {/* <Fragment key={prod.id}> */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={prod.title}
                height="140"
                image={prod.image}
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {prod.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    console.log(prod.id);
                    nav("/" + prod.id);
                  }}
                >
                  Ver más...
                </Button>
              </CardActions>
            </Card>
            {/* <CardProduct prod={prod} /> */}
            {/* </Fragment> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
