import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

CardProduct.propTypes = {
  prod: PropTypes.object,
};
export default function CardProduct({ prod }) {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          alt={prod.title}
          height="200"
          image={prod.image}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="right">
            {prod.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            align="right"
          >
            {prod.category}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            marginTop="20px"
            justifyContent="right"
            align="right"
          >
            {prod.description}
          </Typography>
          <Typography variant="h2" color="text.secondary" align="right">
            ${prod.price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
