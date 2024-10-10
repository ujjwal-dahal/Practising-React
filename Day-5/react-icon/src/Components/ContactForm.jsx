import Button from "./Button";
import InputBox from "./InputBox";
import SocialMedia from "./SocialMedia";
import "../Style/ContactForm.css";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

function ContactForm() {
  let [clicked, setClicked] = useState(false);

  function handleIcon() {
    setClicked(true);
  }
  return (
    <>
      <div className="whole-container">
        <div className="main-container">
          <div className="title">contact us</div>
          <div className="second-title">We will get back to you asap!</div>
          <div className="name-box">
            <div className="input-with-icon ">
              <IoPersonSharp className={clicked?"noIcon" : "icon"} />
              <InputBox
                type="text"
                className="input-box box1"
                placeholder="First Name"
                onChange={handleIcon}
              />
            </div>
            <div className="input-with-icon box1">
              <InputBox
                type="text"
                className="input-box box1"
                placeholder="Last Name"
                onChange={handleIcon}
              />
            </div>
          </div>
          <div className="input-with-icon ">
            <MdEmail className={clicked?"noIcon" : "icon"} />
            <InputBox
              type="text "
              className="input-box"
              placeholder="Email"
              onChange={handleIcon}
            />
          </div>
          <div className="input-with-icon ">
            <FaPhoneAlt className={clicked?"noIcon" : "icon"} />
            <InputBox
              type="number "
              className="input-box"
              placeholder="Phone"
              onChange={handleIcon}
            />
          </div>
          <Button btnName="Send" className="btn1" />
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default ContactForm;
