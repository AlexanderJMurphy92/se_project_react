import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default Name" />
      <p className="sidebar__username">Mr T.</p>
    </div>
  );
}
// const currentDate = new Date().toLocaleString("default", {
//   month: "long",
//   day: "numeric",
// });
// return (
//   <div className="sidebar">
//     <p className="sidebar__date-time">
//       {currentDate}, {weatherData.city}
//     </p>
//     <img className="sidebar__avatar" src={avatar} alt="Default Avatar" />
//     <p className="sidebar__username">Alexander Murphy</p>
//     <button type="button" className="sidebar__change-profile-info">
//       Change profile data
//     </button>
//     <button type="button" className="sidebar__log-out">
//       Log out
//     </button>
//   </div>
// }

export default SideBar;
