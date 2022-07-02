import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <>
      <footer>
        <div className="container py-4">
          <p className="text-center text-white">
            © 2021 Uber Brands LLC | Built with ❤️ in Miami
            <br />
            <span
              onClick={() => {
                Navigate("Privacy");
              }}
              style={{ cursor: "pointer" }}
            >
              Privacy Policy |
            </span>
            <span
              onClick={() => {
                Navigate("Terms");
              }}
              style={{ cursor: "pointer" }}
            >
              &nbsp; Terms & Conditions |
            </span>
            <span
              onClick={() => {
                Navigate("Disclaimer");
              }}
              style={{ cursor: "pointer" }}
            >
              &nbsp; Disclaimer
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
