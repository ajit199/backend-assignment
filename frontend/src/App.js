import "./App.css";
import Header from "./components/Header/Header";
// import Register from "./pages/Register/Register";
// import Login from "./pages/Login/Login";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
function App() {
  return (
    <>
      <Header />
      {/* <Login /> */}
      <VerifyOtp />
    </>
  );
}

export default App;
