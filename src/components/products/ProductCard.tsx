import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartControls from "../cart/CartControl";
import defaultBackgroundColor from "../../commons/styles/layout/defaultBackgroundColor";
import CategoryBadge from "../categories/CategoryBadge";
import { ProductType } from "../../types/product";
import { RootState } from "../../redux/store";
import { selectItemQuantityInCart } from "../../redux/reducers/cartSlice";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  const itemQty = useSelector((state: RootState) =>
    selectItemQuantityInCart(state.cart, product.id)
  );
  const theme = useTheme();

  return (
    <Card
      sx={{
        bgcolor: defaultBackgroundColor(theme),
        minHeight: 280,
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Box display="flex" sx={{ mb: 1 }}>
          <CategoryBadge size="small" category={product.category} />
        </Box>
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            color="primary"
            sx={{
              lineHeight: "125%",
              transition: "0.2s",
              my: 2,
              "&:hover": {
                color: theme.palette.text.primary,
              },
            }}
          >
            {product.title}
          </Typography>
        </Link>
        <Typography variant="body2">
          {product.description.length > 140
            ? `${product.description.slice(0, 140)}...`
            : product.description}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
          ${itemQty === 0 ? `${product.price}` : `${itemQty * product.price}`}
        </Typography>
        {itemQty > 1 && (
          <Typography variant="caption">
            – total of ${product.price} x {itemQty}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <CartControls product={product} />
      </CardActions>
    </Card>
  );
};

export const ProductCardSkeleton = () => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        bgcolor: defaultBackgroundColor(theme),
        height: 280,
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Skeleton height={24} width={80} />
        <Skeleton height={32} sx={{ my: 2 }} />
        <Skeleton height={16} width={200} />
        <Skeleton height={16} width={200} />
        <Skeleton height={16} width={200} />
        <Skeleton height={16} width={200} />
        <Skeleton height={44} width={120} />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
