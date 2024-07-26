import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../../utils/firebase";

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

const CollapsibleTable: React.FC = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<Record<string, HistoryItem[]>>({});

  useEffect(() => {
    const userState = onAuthStateChanged(auth, async () => {
      const collectionRef = collection(db, "purchase");
      const querySnapshot = await getDocs(collectionRef);
      const historyData: Record<string, HistoryItem[]> = {};

      for (const userDoc of querySnapshot.docs) {
        const userId = userDoc.id;
        const userHistoryData = userDoc.data().history as HistoryItem[];
        historyData[userId] = userHistoryData;
      }

      setHistory(historyData);
    });
    return () => userState();
  }, [navigate]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>用戶 ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(history).map(([userId, orders], index) => (
            <CollapsibleTableRow key={index} userId={userId} orders={orders} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable