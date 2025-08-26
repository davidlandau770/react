import Footer from "./comps/Footer";
import ProfilCard from "./comps/profilCard";
import Title from "./comps/title";

export default function App() {
  return (
    <>
      <Title />
      <div id="container">
        <ProfilCard name="Friend" />
        <ProfilCard name="Teacher" />
        <ProfilCard name="Student" />
        <ProfilCard name="Friend" />
        <ProfilCard name="Teacher" />
        <ProfilCard name="Student" />
      </div>
        <Footer />
    </>
  )
}
