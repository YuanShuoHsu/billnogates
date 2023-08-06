import { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { initialRecaptcha } from "../../../store/slice/recaptcha";

import styles from "./index.module.scss";

export default function Recaptcha() {
  const recaptcha = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialRecaptcha(recaptcha.current));
  }, [dispatch]);

  return <div className={styles.recaptcha} ref={recaptcha} />;
}
