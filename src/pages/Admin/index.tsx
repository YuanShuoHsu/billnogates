import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../utils/firebase";

import CollapsibleTable from "./CollapsibleTable";
import AdminLogin from "./AdminLogin";

import Cartbar from "../../components/Cartbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Sidebar from "../../components/Sidebar";

import styles from "./index.module.scss"

interface AdminData {
  account: string;
  password: string;
}

export default function Admin() {
  const [hasAccess, setHasAccess] = useState(false);
  const [adminData, setAdminData] = useState<AdminData[]>([]);

  useEffect(() => {
    const userState = onAuthStateChanged(auth, async () => {
      const adminRef = collection(db, "admin");
      const querySnapshot = await getDocs(adminRef);
      const adminArray: AdminData[] = [];

      querySnapshot.forEach((doc) => {
        adminArray.push(doc.data() as AdminData);
      });

      setAdminData(adminArray);
    });
    return () => userState();
  }, []);

  return (
    <div className={styles.admin}>
      <Cartbar />
      <Sidebar />
      <ScrollToTopButton />
      <Header />
      <div className={styles.main}>
        {/* {!hasAccess ? */}
        {/* <AdminLogin setHasAccess={setHasAccess} adminData={adminData} /> :  */}
        <CollapsibleTable />
        {/* } */}
      </div>
      <Footer />
    </div>
  );
}
