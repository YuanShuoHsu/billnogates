import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  TextField as MuiTextField,
  Button as MuiButton,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CollapsibleTable from "./CollapsibleTable";
import styled from "@emotion/styled";
import "../../styles/themes.module.scss";

interface AdminData {
  account: string;
  password: string;
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: var(--primaryWhiteSmokeAlpha80);
`;

const Form = styled.form`
  width: 80%;
  max-width: 400px;
  background-color: var(--primarySilverAlpha20);
  border-radius: 4px;
`;

const TextField = styled(MuiTextField)`
  margin-bottom: 1rem;
  width: 100%;
`;

const Button = styled(MuiButton)`
  margin-top: 1rem;
`;

export default function Admin() {
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(false);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
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
  }, [navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const admin = adminData.find(
      (ad) => ad.account === account && ad.password === password,
    );
    if (admin) {
      setHasAccess(true);
      setError("");
    } else {
      setError("Invalid account or password");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (!hasAccess) {
    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Typography variant="h4" component="h1" gutterBottom>
            Admin Login
          </Typography>
          <TextField
            label="Account"
            value={account}
            onChange={(event) => setAccount(event.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary">
            登入
          </Button>
        </Form>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      <CollapsibleTable />
    </Container>
  );
}
