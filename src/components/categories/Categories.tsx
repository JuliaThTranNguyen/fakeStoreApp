import { Box, Container, Typography, useTheme } from "@mui/material";

import StyledAnimatedTag from "../../commons/styles/categories/StyledAnimatedTags";
import Title from "../../commons/styles/layout/Title";
import defaultBackgroundColor from "../../commons/styles/layout/defaultBackgroundColor";
import CategoriesList from "./CategoriesList";

export default function Categories() {
  const theme = useTheme();
  return (
    <Container sx={{ marginY: 8 }}>
      <Box padding={4} bgcolor={defaultBackgroundColor(theme)} borderRadius={4}>
        <Title variant="h3" sx={{ mb: 4 }}>
          Welcome to our{" "}
          <StyledAnimatedTag> online web-store app </StyledAnimatedTag>
        </Title>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Welcome to our virtual storefront! Explore our range of products and
          enjoy a seamless shopping experience. From trendy fashion to essential
          gadgets, we've got something for everyone. Start browsing now and
          discover the perfect items for you!
        </Typography>
        <CategoriesList />
      </Box>
    </Container>
  );
}
