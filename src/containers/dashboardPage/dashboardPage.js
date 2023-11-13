import { TileList } from "../../components/tileList/TileList";
import "./dashboard.modules.css";
import { Link } from "react-router-dom";

export const DashboardPage = ({
  appointments,
  contacts
}) => {
  return (
    <div className="containerDash">
      <section className="sec1">
        <h2>Appointments</h2>
        <Link to={"/appointments"} className="linkActions"> Add Appointment</Link>
        <div className="containerTiles">
            <TileList tiles={appointments} />
        </div>
      </section>
      <hr />
      <section className="sec2">
        <h2>Contacts</h2>
        <Link to={"/contacts"} className="linkActions"> Add New Contact</Link>
        <div className="containerTiles">
            <TileList tiles={contacts}/>
        </div>
      </section>
    </div>
  );
};