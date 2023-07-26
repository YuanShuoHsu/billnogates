import React from "react";
import styles from "./index.module.scss";

interface ContactProps {
  handleSave: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
}

export default function Contact({
  handleSave,
  lastName,
  firstName,
  email,
  phoneNumber,
}: ContactProps) {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__name}>
        <input
          onChange={(event) => handleSave(event, "lastName")}
          value={lastName}
          className={styles.contact__nameInput}
          type="text"
          placeholder="姓氏"
          maxLength={20}
          required
        />
        <input
          onChange={(event) => handleSave(event, "firstName")}
          value={firstName}
          className={styles.contact__nameInput}
          type="text"
          placeholder="名字"
          maxLength={20}
          required
        />
      </div>
      <div className={styles.contact__information}>
        <input
          onChange={(event) => handleSave(event, "email")}
          value={email}
          className={styles.contact__informationInput}
          type="text"
          placeholder="電子郵件"
          maxLength={40}
          required
        />
        <input
          onChange={(event) => handleSave(event, "phoneNumber")}
          value={phoneNumber}
          className={styles.contact__informationInput}
          type="text"
          placeholder="手機號碼"
          minLength={10}
          maxLength={10}
          required
        />
      </div>
    </div>
  );
}
