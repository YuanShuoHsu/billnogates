import { useState, useRef, useEffect } from "react";

import HeaderSearch from "./HeaderSearch";

import styles from "./index.module.scss";

export default function SearchButton() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsSearchVisible(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleToggleHeaderSearch = () => setIsSearchVisible(prevState => !prevState);

    return (
        <div ref={containerRef}>
            <button
                onClick={handleToggleHeaderSearch}
                aria-label="show Search"
                className={`${styles.button} ${styles.search}`}
            >
                <div className={styles.svgBox}>
                    <svg
                        className={styles.svg}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                    </svg>
                </div>
            </button>
            <HeaderSearch isSearchVisible={isSearchVisible} />
        </div>
    );
}
