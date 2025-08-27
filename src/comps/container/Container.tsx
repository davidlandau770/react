import ProfilCard from "../profilCard/ProfilCard";
import "./container.css";

export default function Container() {
    return (
        <div id="container">
            <ProfilCard name="Friend" />
            <ProfilCard name="Teacher" />
            <ProfilCard name="Student" />
            <ProfilCard name="Friend" />
            <ProfilCard name="Teacher" />
            <ProfilCard name="Student" />
        </div>
    )
}
