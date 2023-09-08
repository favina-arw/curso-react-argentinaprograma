import { useMutation, useQuery } from "react-query";
import Cart from "../components/Cart";
import Service from "../Service";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Fragment } from "react";

export default function AllUserCarts() {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => Service.getUsers(),
  });

  const cartsMutation = useMutation((selectedUser) => {
    return Service.getUserCart(selectedUser);
  });

  const handleChange = (event) => {
    if (event.target.value) {
      cartsMutation.mutate(event.target.value);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        sx={{ marginBottom: "30px", marginTop: "30px" }}
      >
        <FormControl sx={{ width: "50%" }}>
          <InputLabel id="select-user">User</InputLabel>
          <Select
            labelId="select-user-label"
            id="select-user"
            label="User"
            onChange={handleChange}
            defaultValue={-1}
          >
            <MenuItem value={-1} sx={{ display: "none" }}></MenuItem>
            {usersQuery.data?.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name.firstname + " " + user.name.lastname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Stack spacing={2}>
        {cartsMutation.data?.map((cart, index, array) => (
          <Fragment key={cart.id}>
            <Cart cart={cart} />
            <Box>
              <Box
                sx={{
                  width: "50%",
                  minHeight: "10px",
                  backgroundColor: index < array.length - 1 ? "#888888" : "",
                  m: "auto",
                }}
              ></Box>
            </Box>
          </Fragment>
        ))}
      </Stack>
    </Container>
  );
}
