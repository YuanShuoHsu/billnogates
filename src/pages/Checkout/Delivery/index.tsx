import RadioInput from "../RadioInput";

import styles from "./index.module.scss";

interface DeliveryProps {
  handleSave: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  send: string;
  address: string;
}

export default function Delivery({ handleSave, send, address }: DeliveryProps) {
  const renderSwitchSend = (send: string) => {
    switch (send) {
      case "郵局寄送":
        return (
          <div className={styles.content}>
            <input
              onChange={(event) => handleSave(event, "address")}
              value={address}
              className={styles.input}
              type="text"
              placeholder="地址"
              maxLength={40}
              required
            />
          </div>
        );
      case "7-ELEVEN":
        return (
          <div className={styles.content}>
            <div className={styles.href}>
              <a
                className={styles.link}
                href="https://emap.pcsc.com.tw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkText}>7-ELEVEN 門市查詢</span>
                <div className={styles.svgBox}>
                  <svg
                    className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                  </svg>
                </div>
              </a>
            </div>
            <input
              onChange={(event) => handleSave(event, "address")}
              value={address}
              className={styles.input}
              type="text"
              placeholder="門市名稱"
              maxLength={10}
              required
            />
          </div>
        );
      case "FamilyMart":
        return (
          <div className={styles.content}>
            <div className={styles.href}>
              <a
                className={styles.link}
                href="https://www.family.com.tw/Marketing/Map"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkText}>FamilyMart 門市查詢</span>
                <div className={styles.svgBox}>
                  <svg
                    className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                  </svg>
                </div>
              </a>
            </div>
            <input
              onChange={(event) => handleSave(event, "address")}
              value={address}
              className={styles.input}
              type="text"
              placeholder="店舖名"
              maxLength={10}
              required
            />
          </div>
        );
      default:
        return;
    }
  };

  return (
    <div className={styles.delivery}>
      <div className={styles.box}>
        <RadioInput
          onChange={(event) => handleSave(event, "send")}
          name={"send"}
          value={"郵局寄送"}
          id={"郵局寄送"}
          checked={send === "郵局寄送"}
          imgSrc={
            require("../../../images/checkout/Chunghwa_Post_Logo.svg").default
          }
          label={"郵局寄送"}
        />
        <RadioInput
          onChange={(event) => handleSave(event, "send")}
          name={"send"}
          value={"7-ELEVEN"}
          id={"7-ELEVEN"}
          checked={send === "7-ELEVEN"}
          imgSrc={require("../../../images/checkout/7-eleven_logo.svg").default}
          label={"7-ELEVEN"}
        />
        <RadioInput
          onChange={(event) => handleSave(event, "send")}
          name={"send"}
          value={"FamilyMart"}
          id={"FamilyMart"}
          checked={send === "FamilyMart"}
          imgSrc={
            require("../../../images/checkout/FamilyMart_Logo_(2016-).svg")
              .default
          }
          label={"FamilyMart"}
        />
      </div>
      {renderSwitchSend(send)}
    </div>
  );
}
