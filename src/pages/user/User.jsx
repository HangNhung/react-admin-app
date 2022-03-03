import {
  CalendarToday,
  LocationCity,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://i.pinimg.com/originals/6c/d4/52/6cd452737ec62bce1b3b0e0fb2dd8adf.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <div className="userShowUsername">Anna akkal</div>
              <div className="userShowUserTitle">Engineer</div>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">anna276</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.2003</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">084 390 190</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">anna276@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationCity className="userShowIcon" />
              <span className="userShowInfoTitle">HCM City</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="anna276"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="anna276"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="anna276@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="084 390 190"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="HCM City"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://i.pinimg.com/originals/6c/d4/52/6cd452737ec62bce1b3b0e0fb2dd8adf.jpg"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
