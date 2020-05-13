import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <section className="footer_Section">
      <div>© Yunju Lee</div>
      <div>
        아이콘 제작자{" "}
        <a
          href="https://www.flaticon.com/kr/authors/dinosoftlabs"
          title="DinosoftLabs"
        >
          DinosoftLabs
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/kr/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </div>
    </section>
  );
}

export default Footer;
