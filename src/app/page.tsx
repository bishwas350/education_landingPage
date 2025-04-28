import Image from "next/image";
import Header from "./component/Header";
import HeroPart from "./component/HeroPart";
import Exprience from "./component/Exprience";

export default function Home() {
  return (
    <main>
      <Header/>
      <HeroPart/>
      <Exprience/>
    </main>
  );
}
