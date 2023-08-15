import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SendSms from "./components/SendSms";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <SendSms />
      <Cart />
      <Footer />
    </>
  );
}

export default App;
