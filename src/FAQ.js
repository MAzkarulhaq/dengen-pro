import React from "react";
import "./FAQ.css";
const FAQ = () => {
  return (
    <>
      <div className="container">
        <br />
        <br />
        <h1 className="text-center blue-text">FAQ</h1>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <table class="table mt-5">
              <tbody>
                <tr class="green" data-toggle="collapse" data-target="#demo1">
                  <td class="center">+</td>
                  <td>
                    What is the mint price for Degen Santas, Degen Elves, and
                    Degen Reindeer?
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                  <td
                    colspan="6"
                    class="collapse acco"
                    id="demo1"
                    style={{ border: "2px solid #07345d" }}
                  >
                    <div class="accordian-body" id="demo1">
                      Free. This is a free mint from the Alpha Access private
                      community.
                    </div>
                  </td>
                </tr>
                <tr class="green" data-toggle="collapse" data-target="#demo2">
                  <td class="center">+</td>
                  <td>What is the total supply for each collection?</td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                  <td
                    colspan="6"
                    class="collapse acco"
                    id="demo2"
                    style={{ border: "2px solid #07345d" }}
                  >
                    <div id="demo2" class="accordian-body collapse">
                      Each collection features 10,000 unique NFTs. No two are
                      the same!
                    </div>
                  </td>
                </tr>
                <tr class="green" data-toggle="collapse" data-target="#demo3">
                  <td class="center">+</td>
                  <td>Why were these collections created?</td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                  <td
                    colspan="6"
                    class="collapse"
                    id="demo3"
                    style={{ border: "2px solid #07345d" }}
                  >
                    <div id="demo3" class="accordian-body collapse">
                      To give NFT collectors and enthusiasts some fun
                      holiday-themed profile pictures to mint. The holiday
                      season is a happy time of the year and it deserves some
                      fun NFTs.
                    </div>
                  </td>
                </tr>
                <tr class="green" data-toggle="collapse" data-target="#demo4">
                  <td class="center">+</td>
                  <td>
                    What will the SANTA, ELF, and REIN tokens provide access to
                    in the future?
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                  <td
                    colspan="6"
                    class="collapse"
                    id="demo4"
                    style={{ border: "2px solid #07345d" }}
                  >
                    <div id="demo4" class="accordian-body collapse">
                      Be sure to follow &nbsp;
                      <a href="https://twitter.com/long" target="_blank">
                        @long
                      </a>
                      &nbsp; on Twitter for future announcements. These tokens
                      will provide whitelist early access minting for a massive
                      NFT project launching in 2022.
                    </div>
                  </td>
                </tr>
                <tr class="green" data-toggle="collapse" data-target="#demo5">
                  <td class="center">+</td>
                  <td>Do owners receive full commercial rights?</td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                  <td
                    colspan="6"
                    class="collapse"
                    id="demo5"
                    style={{ border: "2px solid #07345d" }}
                  >
                    <div id="demo5" class="accordian-body collapse">
                      Yes! Every Santa, Elf, and Reindeer grants its holder full
                      commercial rights. You own the IP.
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
