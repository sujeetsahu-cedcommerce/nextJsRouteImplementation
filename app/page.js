import Image from "next/image";
import RootLayout from "./layout";
import styles from "./page.module.css";
// `app/page.js` is the UI for the `/` URL
import Product1 from "@/component/Product1";
import Product2 from "@/component/Product2";
import Product3 from "@/component/Product3";
import Product4 from "@/component/Product4";
import User1 from "@/component/User1";
import User2 from "@/component/User2";
import User3 from "@/component/User3";
export default function Home() {
  return (
    <>
      <Product1 />
      <Product2 />
      <Product3 />
      <Product4 />
      <User1 id={1} />
      <User2 id={2} />
      <User3 id={3} />
    </>
  );
}
