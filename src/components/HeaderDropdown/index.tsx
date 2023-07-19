import React, { ReactNode } from "react";
import styles from "./index.module.scss";

interface HeaderDropdownProps {
  handleEnter: React.MouseEventHandler<HTMLDivElement>;
  handleLeave: React.MouseEventHandler<HTMLDivElement>;
  condition: boolean;
  children: ReactNode;
}

export default function HeaderDropdown({
  handleEnter,
  handleLeave,
  condition,
  children,
}: HeaderDropdownProps) {
  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`${styles.headerDropdown} ${
        condition ? styles["headerDropdown--active"] : ""
      }`}
    >
      <div className={styles.headerDropdown__space} />
      {children}
    </div>
  );
}
