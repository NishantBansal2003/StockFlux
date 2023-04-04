import React from "react";
import "../styles/buyBitcoin.css";
function BuyBitcoin() {
  return (
    <div
      class="buyFlex"
      style={{
        backgroundImage: "url( https://source.unsplash.com/1600x500/?bitcoin)",
      }}
    >
      <div className="adjust-text">
        <p class="text-left small-text aboveheading">
          <span class="highlight  ">Bitcoin </span>
        </p>
        <h2 class="text-left section_header ">
          <span class="  ">Cryptocurrency</span>
        </h2>
        <p>
          <span
            style={{ color: "#ffffff", lineHeight: "1.6" }}
            className="styleSpan"
          >
            To buy Bitcoin, one needs to set up a digital wallet, choose a{" "}
            <br />
            reputable exchange, and place an order at the current market price.
          </span>
        </p>
        <div class="fw-divider-space " style={{ paddingTop: "10px" }}></div>
        <aside class="shortcode-widget-area">
          <div class="widget_text widget-theme-wrapper widget_no_background ">
            <div
              id="custom_html-2"
              class="widget_text widget widget_custom_html"
            >
              <div class="textwidget custom-html-widget">
                <script
                  type="text/javascript"
                  src="https://www.cryptonator.com/ui/js/widget/calc_widget.js"
                ></script>
              </div>
            </div>
          </div>
        </aside>
        <div class="fw-divider-space " style={{ paddingTop: "20px" }}></div>
        <a
          href="#0"
          target="_self"
          class="theme_button color1 min_width_button"
        >
          <span className="btnStyle">Buy now!</span>
        </a>
      </div>
    </div>
  );
}
export default BuyBitcoin;
