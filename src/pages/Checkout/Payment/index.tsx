import React from "react";
import RadioInput from "../RadioInput";

import styles from "./index.module.scss";

interface PaymentProps {
  handleSave: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  pay: string;
  afterFiveYards: string;
}

export default function Payment({
  handleSave,
  pay,
  afterFiveYards,
}: PaymentProps) {
  const renderSwitchPay = (pay: string) => {
    switch (pay) {
      case "銀行轉帳":
        return (
          <div className={styles.content}>
            <input
              onChange={(event) => handleSave(event, "afterFiveYards")}
              value={afterFiveYards}
              className={styles.input}
              type="text"
              placeholder="帳號末五碼"
              minLength={5}
              maxLength={5}
              required
            />
          </div>
        );
      default:
        return;
    }
  };

  return (
    <div className={styles.payment}>
      <div className={styles.box}>
        <RadioInput
          onChange={(event) => handleSave(event, "pay")}
          name={"pay"}
          value={"銀行轉帳"}
          id={"銀行轉帳"}
          checked={pay === "銀行轉帳"}
          imgSrc={
            require("../../../images/checkout/piggy-bank-solid.svg").default
          }
          label={"銀行轉帳"}
        />
      </div>
      {renderSwitchPay(pay)}
    </div>
  );
}
