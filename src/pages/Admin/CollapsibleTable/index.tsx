import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CollapsibleTableRow from "./CollapsibleTableRow";

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

export default function CollapsibleTable() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const userState = onAuthStateChanged(auth, async (user) => {
      const collectionRef = collection(db, "purchase");
      const querySnapshot = await getDocs(collectionRef);
      const historyData: HistoryItem[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data().history as HistoryItem[];
        historyData.push(...data);
      });

      setHistory(historyData);
    });
    return () => userState();
  }, [navigate]);

  const groupedHistory = history.reduce(
    (acc, item) => {
      const customer = `${item.information.lastName} ${item.information.firstName}`;
      if (!acc[customer]) {
        acc[customer] = [];
      }
      acc[customer].push(item);
      return acc;
    },
    {} as Record<string, HistoryItem[]>,
  );

  const rows = Object.entries(groupedHistory).map(([customer, orders]) => ({
    customer,
    orders,
  }));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Customer</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <CollapsibleTableRow key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
