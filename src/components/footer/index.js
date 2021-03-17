import React from "react";
// import { Link } from 'react-router-dom';
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import "./footer.css";
import logofooter from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer text-light text-center col-12">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img src={logofooter} width="145px" height="145px" alt="" />
          </div>
          <div className="col-sm">
            <div className="icons">
              <a
                href="https://www.facebook.com/augustoebarrosadv/"
                target="_blank"
              >
                <FacebookFilled
                  style={{
                    fontSize: "50px",
                    color: "#C6AC8F",
                    padding: "10px",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/augustoebarros/"
                target="_blank"
              >
                <InstagramFilled
                  style={{
                    fontSize: "50px",
                    color: "#C6AC8F",
                    padding: "10px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="copy" style={{ marginTop: "30px" }}>
          <span>
            © 2021 Augusto & Barros - Sociedade de Advogados. Todos os Direitos
            Reservados. Desenvolvido por Bruno Silva Development in Technology.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
