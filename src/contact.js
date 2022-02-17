import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAddressCard} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import './Herosection.css'

const Footer = () => {
  return (
      <div className="container bg-primary">
    <footer className="d-flex justify-content-between flex-wrap">
      <div>
        <div>Get In Touch</div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} /> : hebam1017@gmail.com
        </div>
        <div>
          <FontAwesomeIcon icon={faAddressCard} /> : 01023877993
        </div>
      </div>
      <div>
      <Button  type="button" className="btn btn-dark my=5 p=2 button" title="CONTACT ME"></Button>
      </div>
      <div className="copyRight">
        <div>CopyRight &copy; 2022</div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
