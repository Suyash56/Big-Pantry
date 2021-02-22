import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div class="column">
            <ul>
              <li class="title">BIG PANTRY</li>
              <li>
                We allows you to walk away from the drudgery of grocery shopping
                and welcome an easy relaxed way of browsing and shopping for
                groceries.
              </li>
            </ul>
          </div>

          <div class="column">
            <ul>
              <li class="title">OTHER LINKS</li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div class="column">
            <ul>
              <li class="title">SHORT CUT</li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>

          <div class="column">
            <ul>
              <li class="title">CONTACT US</li>
              <li>
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    maxlength="80"
                    required
                  />
                  <button class="btn1">
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </form>
              </li>
              <li>
                <a href="#" title="Address,State,Country,Pincode">
                  <i class="fa fa-map-marker"></i>
                </a>
                <a href="#">
                  <i class="fa fa-phone"></i>
                </a>
                <a href="#">
                  <i class="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div class="sub-footer">
        BIG PANTRY Copyright © 2021 BIG PANTRY - All rights reserved || Designed
        By: Suyash
      </div>
    </>
  );
}

export default Footer;
