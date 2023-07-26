import styles from "./index.module.scss";

interface RemarkProps {
  handleSave: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  remark: string;
}

export default function Remark({ handleSave, remark }: RemarkProps) {
  return (
    <div className={styles.remark}>
      <input
        onChange={(event) => handleSave(event, "remark")}
        value={remark}
        className={styles.remark__input}
        type="text"
        placeholder="留言給賣家"
        maxLength={80}
      />
    </div>
  );
}
