import { useDispatch } from "react-redux";

import { showSidebar } from "../../../../store/slice/sidebar";

import { ReactComponent as Bars } from "../../../../images/others/bars.svg";

import styles from "./index.module.scss";

export default function SidebarButton() {
    const dispatch = useDispatch();

    const handleShowSidebar = () => dispatch(showSidebar());

    return (
        <button
            aria-label="show Sidebar"
            onClick={handleShowSidebar}
            className={`${styles.button} ${styles.hamburger}`}
        >
            <div className={styles.svgBox}>
                <Bars className={styles.svg} />
            </div>
        </button>
    );
}
