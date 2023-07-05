import React from 'react'

import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import logo from "../../images/story/品牌logo.jpg"
import headshot from "../../images/story/大頭照.jpg"

import styles from "./index.module.scss"

export default function Story() {
    return (
        <div className={styles.Story}>
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.picture}>
                        <img className={styles.image} src={logo} alt="billnogates" loading="lazy" />
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.phrase}>
                        <span className={styles.text}>沒有蓋子的腦 想像力泳池</span>
                        <span className={styles.text}>探索邊界的手 無邊際最美</span>
                    </div>
                    <div className={styles.phrase}>
                        <span className={styles.text}>「沒蓋子」是想像力沒有邊界的意思。</span>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.highlights}>
                        <span className={styles.text}>品牌理念</span>
                    </div>
                    <div className={styles.narration}>
                        <span className={styles.text}>&emsp;&emsp;『 billnogates比爾公主沒蓋子 』願成為一座纖維工藝的橋樑——品牌企圖跨域結合傳統工藝與數位自造，開創新的工藝視角，融入原生創意與多元媒材搭配。發展出獨有特色的創意生活品，讓纖維技術有更多被看見的方式！重新咀嚼纖維與日常的關係，輕快溫柔地推進纖維生活美學。</span>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.picture}>
                        <img className={styles.image} src={headshot} alt="許元馨" loading="lazy" />
                    </div>
                    <div className={styles.phrase}>
                        <span className={styles.text}>許元馨 / 品牌創辦人</span>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.highlights}>
                        <span className={styles.text}>創立契機</span>
                    </div>
                    <div className={styles.narration}>
                        <span className={styles.text}>&emsp;&emsp;藝術大學畢業後到雲林學了女裝，當了半年無業創作者。而後在2019進駐「南方創客基地」期間成立品牌「比爾公主沒蓋子」，原本只為滿足自己突如其來的織布慾望而製造的土炮織布工具，竟以有趣外表吸引朋友間的口耳相傳「那個可愛的企鵝鵝子可以織布！」。打造趣味創新工藝是品牌被賦予的使命！</span>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.highlights}>
                        <span className={styles.text}>不只是手作</span>
                    </div>
                    <div className={styles.narration}>
                        <span className={styles.text}>&emsp;&emsp;期望手作是不只療癒，還有教育推廣意義。在執行的小學美感教育推廣中，除了在手作中推廣各地纖維工藝特色，教學中也融合STEAM精神（科學、科技、工程、藝術、數學）建立課綱。</span>
                        <span className={styles.text}>&emsp;&emsp;2021開始挑戰青銀共創，與銀髮族長輩共創編織美好日常，也帶青年進入社區認識長輩。相信手作是可以拉近世代距離的語言；手作不只是手作，甚至可以串連世代的人。</span>
                        <span className={styles.text}>&emsp;&emsp;2022開始拍影片紀錄有趣的共創企劃、挖掘台灣角落的創新工藝、在家手作的學習影片。期待可以紀錄跨領於結合過程的艱辛與戰果，也想更跨地域地傳達更多創新工藝的價值。</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
