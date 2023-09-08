import { useParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import { useQuery } from "react-query";
import { Box, Container } from "@mui/material";

export default function SingleProduct() {
  const { id } = useParams();

  const productQuery = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products/" + id).then((res) =>
        res.json()
      ),
  });

  return (
    <Container maxWidth="sm">
      <Box display="flex">
        <CardProduct prod={productQuery.data} />
      </Box>
    </Container>
  );
}
