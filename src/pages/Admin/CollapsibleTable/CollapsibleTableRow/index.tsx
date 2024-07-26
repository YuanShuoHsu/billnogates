import { useState, Fragment } from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import { formatDate, formatTime } from "../../../../utils/formatDateTime";

interface ProductItem {
  dimensions: { [key: string]: number };
  name: string;
  colors: { [key: string]: string };
  number: number;
  price: number;
  images: {
    description: { src: string; alt: string }[];
    gallery: { src: string; alt: string }[];
    main: { src: string; alt: string };
    information: { src: string; alt: string }[];
  };
  selectedSize: string;
  selectedColor: string;
  id: number;
}

interface HistoryItem {
  information: {
    sum: number;
    discount: number | null;
    deliveryFee: number;
    lastName: string;
    firstName: string;
    phoneNumber: string;
    email: string;
    send: string;
    address: string;
    pay: string;
    afterFiveYards: string;
    remark: string;
    timestamp: { seconds: number; nanoseconds: number };
  };
  product: ProductItem[];
}

interface CollapsibleTableRowProps {
  userId: string;
  orders: HistoryItem[];
}

const CollapsibleTableRow: React.FC<CollapsibleTableRowProps> = ({ userId, orders }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            onClick={() => setOpen(!open)}
            size="small"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{userId}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Orders
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Sum</TableCell>
                    <TableCell>Delivery Fee</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Remark</TableCell>
                    <TableCell>Payment</TableCell>
                    <TableCell>Send Method</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Discount</TableCell>
                    <TableCell>Products</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order, orderIdx) => (
                    <TableRow key={orderIdx}>
                      <TableCell>
                        {formatDate(
                          new Date(order.information.timestamp.seconds * 1000)
                        )}{" "}
                        {formatTime(
                          new Date(order.information.timestamp.seconds * 1000)
                        )}
                      </TableCell>
                      <TableCell>{order.information.sum}</TableCell>
                      <TableCell>{order.information.deliveryFee}</TableCell>
                      <TableCell>{order.information.address}</TableCell>
                      <TableCell>{order.information.remark}</TableCell>
                      <TableCell>{order.information.pay}</TableCell>
                      <TableCell>{order.information.send}</TableCell>
                      <TableCell>{order.information.lastName} {order.information.firstName}</TableCell>
                      <TableCell>{order.information.email}</TableCell>
                      <TableCell>{order.information.phoneNumber}</TableCell>
                      <TableCell>{order.information.discount ?? "N/A"}</TableCell>
                      <TableCell>
                        {order.product.map((product, productIdx) => (
                          <div key={productIdx} style={{ marginBottom: "10px" }}>
                            <Typography variant="body2">
                              {product.name}
                            </Typography>
                            <Typography variant="body2">
                              Size: {product.selectedSize}
                            </Typography>
                            <Typography variant="body2">
                              Color: {product.selectedColor}
                            </Typography>
                            <Typography variant="body2">
                              Quantity: {product.number}
                            </Typography>
                            <Typography variant="body2">
                              Price: ${product.price}
                            </Typography>
                            <img
                              src={product.images.main.src}
                              alt={product.images.main.alt}
                              width="50"
                            />
                          </div>
                        ))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

export default CollapsibleTableRow;
