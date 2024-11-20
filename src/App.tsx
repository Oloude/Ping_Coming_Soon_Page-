import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";
import Input from "./components/Input";

export default function App() {
  return <main className="font-Libre_Franklin min-h-screen flex justify-center items-center p-6">
    <section className="max-w-3xl mx-auto flex flex-col">
      <Header/>
      <Input/>
      <Image/>
      <Footer/>
    </section>
  </main>
}
