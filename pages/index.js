import Head from "next/head";
import Image from "next/image";
import BannerPage from "../components/HomePage/BannerPage";
import BoostPage from "../components/HomePage/BoostPage";
import BrowserPage from "../components/HomePage/BrowserPage";
import CodePage from "../components/HomePage/CodePage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="max-w-6xl m-auto ">
      <BannerPage />
      <BrowserPage />
      <CodePage />
      <BoostPage />
    </div>
  );
}
