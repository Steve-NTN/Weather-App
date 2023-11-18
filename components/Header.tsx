import Drawer from "@/components/Drawer";
import useHeader from "@/hooks/useHeader";
import { useAppDispatch, useAppSelector } from "@/store";
import { totalCartProductsSelector } from "@/store/cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./ui/Store/components/Cart";
import {
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { getUser, setUser } from "@/store/user";
import useRoute from "@/hooks/useRoute";
import { useState } from "react";

type Props = {
  hiddenCart?: boolean;
};

export default function Header(props: Props) {
  const { hiddenCart } = props;
  const totalProductQuantity = useAppSelector(totalCartProductsSelector);
  const user = useAppSelector(getUser);
  const { showCart, setshowCart, onClickCart, onClickLogo } = useHeader();
  const { router } = useRoute();
  const dispatch = useAppDispatch();
  const [menuConfigs, setMenuConfigs] = useState({
    open: false,
    anchorEl: null,
  });

  const onClickUser = (e: any) => {
    if (user) {
      setMenuConfigs({
        open: true,
        anchorEl: e?.currentTarget,
      });
    } else {
      router.push("/login");
    }
  };

  const formatUserName = (name = "") => {
    return name && name?.length > 0 && name[0];
  };

  const onCloseMenu = () => {
    setMenuConfigs({ ...menuConfigs, open: false });
  };

  const onClickLogout = () => {
    dispatch(setUser(undefined));
    router.push("/login");
  };

  return (
    <StyledHeader
      direction="row"
      spacing={2}
      className="p-4 justify-between items-center border-b"
    >
      <Typography
        className="font-bold text-white text-3xl md:text-4xl cursor-pointer"
        onClick={onClickLogo}
      >
        NTN Store
      </Typography>

      <Stack spacing={2} direction="row" className="align-center">
        {!hiddenCart && (
          <IconButton onClick={onClickCart}>
            <Badge badgeContent={totalProductQuantity} color="primary">
              <AiOutlineShoppingCart className="cursor-pointer text-2xl text-white" />
            </Badge>
          </IconButton>
        )}

        <IconButton className="p-0" onClick={onClickUser}>
          <Avatar className="user_btn">
            {user && formatUserName(user?.fullname)}
          </Avatar>
        </IconButton>
      </Stack>

      <Menu
        open={menuConfigs.open}
        onClose={onCloseMenu}
        anchorEl={menuConfigs.anchorEl}
      >
        <MenuItem onClick={onClickLogout}>Logout</MenuItem>
      </Menu>

      {/* GIỎ HÀNG */}
      <Drawer isOpen={showCart} setIsOpen={setshowCart} title="Giỏ hàng">
        <Cart />
      </Drawer>
    </StyledHeader>
  );
}

const StyledHeader = styled(Stack)({
  backgroundColor: "var(--app-color)",
  ".user_btn": {
    backgroundColor: "#fff",
    color: "var(--app-color)",
  },
});
