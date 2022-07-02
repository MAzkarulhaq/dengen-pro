import React from "react";
import Web3 from "web3";
import abi from "./abi.json";
import { useEffect, useState } from "react";
import "./Hero.css";
import logo from "./Assets/Logo.png";
import btnbg from "./Assets/button.png";
import santa from "./Assets/SANTA.gif";
import elf from "./Assets/ELF.gif";
import randeer from "./Assets/REINDEER.gif";
import gifbg from "./Assets/gifbg.png";
import opensea from "./Assets/OpenSea.png";
import mintbtn from "./Assets/mint.png";
import discord from "./Assets/discord.png";
import twitter from "./Assets/twitter.png";
import { useNavigate } from "react-router-dom";

require("dotenv").config();
const {
  REACT_APP_CONTRACT_ADDRESS_SANTA,
  REACT_APP_CONTRACT_ADDRESS_ELVES,
  REACT_APP_CONTRACT_ADDRESS_REINDEER,
} = process.env;

const Hero = ({ connecctstatus, setConnectedstatus }) => {
  const Navigate = useNavigate();
  const [connectedAccount, setConnectedAccount] = useState("Connect Wallet");
  const [connected, setConnected] = useState(false);
  const [contractSanta, setContractSanta] = useState(null);
  const [contractReindeer, setContractReindeer] = useState(null);
  const [contractElves, setContractElves] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [supplySanta, setSupplySanta] = useState(0);
  const [supplyReindeer, setSupplyReindeer] = useState(0);
  const [supplyElves, setSupplyElves] = useState(0);
  const [price, setPrice] = useState();
  const [priceInEth, setPriceInEth] = useState(0.06);
  const [quantitysanta, setQuantitysanta] = useState(1);
  const [quantityreindeer, setQuantityreindeer] = useState(1);
  const [quantityelves, setQuantityelves] = useState(1);
  const [minted, setMinted] = useState(false);
  const [timesUp, setTimesUp] = useState(false);

  const x = setInterval(() => {
    const nowdate = new Date();
    const now_utc = Date.UTC(
      nowdate.getUTCFullYear(),
      nowdate.getUTCMonth(),
      26,
      nowdate.getUTCHours(),
      0,
      1
    );

    const endDate = new Date();
    const end_utc = Date.UTC(
      endDate.getUTCFullYear(),
      endDate.getUTCMonth(),
      26,
      20,
      0,
      0
    );

    let startingTime = new Date(now_utc);
    let endingTime = new Date(end_utc);

    let remainingTime = endingTime - startingTime / 60000;

    if (endingTime == startingTime || startingTime > endingTime) {
      clearInterval(x);
      setTimesUp(true);
    }
  }, 1000);

  useEffect(() => {
    loadWeb3();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      // await window.ethereum.enable();
      const web3 = window.web3;
      // creating contract instance
      const contractaddresssanta = REACT_APP_CONTRACT_ADDRESS_SANTA;
      const contractaddressreindeer = REACT_APP_CONTRACT_ADDRESS_REINDEER;
      const contractaddresselves = REACT_APP_CONTRACT_ADDRESS_ELVES;
      const santa = new web3.eth.Contract(abi, contractaddresssanta);
      const reindeer = new web3.eth.Contract(abi, contractaddressreindeer);
      const elves = new web3.eth.Contract(abi, contractaddresselves);
      setContractSanta(santa);
      setContractElves(elves);
      setContractReindeer(reindeer);
      const totalSupplySanta = await santa.methods.totalSupply().call();
      const totalSupplyReindeer = await reindeer.methods.totalSupply().call();
      const totalSupplyElves = await elves.methods.totalSupply().call();
      setSupplySanta(totalSupplySanta);
      setSupplyReindeer(totalSupplyReindeer);
      setSupplyElves(totalSupplyElves);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metaMaskAccount = await web3.eth.getAccounts();
      // setConnectedstatus(true);
      let splitedMetaMaskAddress;
      if (metaMaskAccount) {
        splitedMetaMaskAddress =
          metaMaskAccount[0].substring(0, 6) +
          "......" +
          metaMaskAccount[0].substring(
            metaMaskAccount[0].length - 4,
            metaMaskAccount[0].length
          );
      }
      setConnectedAccount(splitedMetaMaskAddress);
      setConnected(true);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async function Mintsanta() {
    console.log("private");
    const web3 = window.web3;
    const address = await web3.eth.getAccounts();

    await contractSanta.methods
      .preSalemint(quantitysanta)
      .send({ from: address.toString() });
    setMinted(true);
    const totalSupply = await contractSanta.methods.totalSupply().call();
    setSupplySanta(totalSupply);
  }
  async function Mintreindeer() {
    const web3 = window.web3;
    const address = await web3.eth.getAccounts();

    await contractReindeer.methods
      .preSalemint(quantityreindeer)
      .send({ from: address.toString() });
    setMinted(true);
    const totalSupply = await contractReindeer.methods.totalSupply().call();
    setSupplySanta(totalSupply);
  }
  async function Mintelves() {
    const web3 = window.web3;
    const address = await web3.eth.getAccounts();

    await contractElves.methods
      .preSalemint(quantityelves)
      .send({ from: address.toString() });
    setMinted(true);
    const totalSupply = await contractElves.methods.totalSupply().call();
    setSupplySanta(totalSupply);
  }
  async function MintSantaPublic() {
    console.log("public");
    const web3 = window.web3;
    const address = await web3.eth.getAccounts();

    await contractSanta.methods
      .mint(quantitysanta)
      .send({ from: address.toString() });
    setMinted(true);
    const totalSupply = await contractSanta.methods.totalSupply().call();
    setSupplySanta(totalSupply);
  }
  async function MintReindeerPublic() {
    const web3 = window.web3;
    const address = await web3.eth.getAccounts();

    await contractReindeer.methods
      .mint(quantityreindeer)
      .send({ from: address.toString() });
    setMinted(true);
    const totalSupply = await contractReindeer.methods.totalSupply().call();
    setSupplySanta(totalSupply);
  }
  async function MintElvesPublic() {
    const web3 = window.web3;
    const address = await web3.eth.getAccounts();

    await contractElves.methods
      .mint(quantityelves)
      .send({ from: address.toString() });
    setMinted(true);
    const totalSupply = await contractElves.methods.totalSupply().call();
    setSupplySanta(totalSupply);
  }
  return (
    <>
      <div className="wrapper">
        <div className="galaxy">
          <div className="stars"></div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a
              className="navbar-brand"
              onClick={() => {
                Navigate("/");
              }}
            >
              <img src={logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link btn-connect"
                    aria-current="page"
                    href="#"
                    onClick={async () => {
                      await connectWallet();
                    }}
                  >
                    <img src={btnbg} alt="" />
                    <span className="btn-text">{connectedAccount}</span>
                  </a>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-2 col-md-6 d-flex justify-content-end">
                      <a
                        className="nav-link"
                        aria-current="page"
                        href="https://twitter.com/long"
                        target="_blank"
                      >
                        <img src={twitter} alt="" />
                      </a>
                    </div>
                    <div className="col-2 col-md-6 d-flex justify-content-start ">
                      <a
                        className="nav-link"
                        aria-current="page"
                        href="https://discord.com/invite/long"
                        target="_blank"
                      >
                        <img src={discord} alt="" />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container py-5">
          <div>
            <h1 className="text-center text-white">
              Degen Santas. Degen Elves. Degen Reindeer.
              <br />
              Spreading Holiday Joy Throughout
              <br />
              the Ethereum Blockchain.
            </h1>
            <p className="text-center text-white fs-4">
              Mint Santa, his sidekick Elf, and his Reindeer now.
            </p>
          </div>
        </div>
        <div className="container py-5">
          <div className="row justify-content-around">
            <div className="col-md-3">
              <h5 className="text-center text-white">DEGEN SANTAS</h5>
              <div className="gif">
                <img src={santa} alt="" className="img-fluid" />
              </div>
              <p className="text-center text-white mt-4">Price = Free Mint</p>
              <p className="text-center py-2">
                <div class="btngroup">
                  <div
                    class="d-flex rounded btngroup justify-content-center "
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      class="btn bg-count text-black "
                      onClick={() => {
                        if (quantitysanta > 1) {
                          setQuantitysanta(quantitysanta - 1);
                        }
                      }}
                    >
                      -
                    </button>
                    <button type="button" class="btn text-white">
                      {quantitysanta}
                    </button>
                    <button
                      type="button"
                      class="btn bg-count text-black"
                      onClick={() => {
                        if (quantitysanta < 3) {
                          setQuantitysanta(quantitysanta + 1);
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </p>
              {/* {connected == false ? (
                <p
                  className="text-center position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={async () => {
                    connectWallet();
                  }}
                >
                  <img src={mintbtn} alt="" />
                  <span className="btn-text-mint">Connect</span>
                </p>
              ) : timesUp ? (
                <p
                  className="text-center position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={async () => {
                    MintSantaPublic();
                  }}
                >
                  <img src={mintbtn} alt="" />
                  <span className="btn-text-mint">MINT</span>
                </p>
              ) : (
                <p
                  className="text-center position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={async () => {
                    Mintsanta();
                  }}
                >
                  <img src={mintbtn} alt="" />
                  <span className="btn-text-mint">MINT</span>
                </p>
              )} */}
              {connected == false ? (
                <p
                  className="text-center position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={async () => {
                    connectWallet();
                  }}
                >
                  <img src={mintbtn} alt="" />
                  <span className="btn-text-mint">Connect</span>
                </p>
              ) : (
                <p
                  className="text-center position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={async () => {
                    MintSantaPublic();
                  }}
                >
                  <img src={mintbtn} alt="" />
                  <span className="btn-text-mint">MINT</span>
                </p>
              )}

              <p className="text-center text-white">
                {supplySanta}/10,000 Minted
              </p>
              <p className="text-center mt-2">
                <a
                  href="https://opensea.io/collection/degen-santas"
                  target="_blank"
                >
                  <img src={opensea} alt="" />
                </a>
              </p>
              <p className="text-center text-white mt-4 ct-link">
                <a
                  href="https://etherscan.io/address/0x0c2c62ddef57d86c21de3d6b279a69868a20bc57#code"
                  target="_blank"
                >
                  Degen Santas Smart Contract
                </a>
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="text-center text-white">DEGEN ELVES</h5>
              <img src={elf} alt="" className="img-fluid" />
              <p className="text-center text-white mt-4">Price = Free Mint</p>
              <p className="text-center py-2">
                <div class="btngroup">
                  <div
                    class="d-flex rounded btngroup justify-content-center "
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      class="btn bg-count text-black "
                      onClick={() => {
                        if (quantityelves > 1) {
                          setQuantityelves(quantityelves - 1);
                        }
                      }}
                    >
                      -
                    </button>
                    <button type="button" class="btn text-white">
                      {quantityelves}
                    </button>
                    <button
                      type="button"
                      class="btn bg-count text-black"
                      onClick={() => {
                        if (quantityelves < 3) {
                          setQuantityelves(quantityelves + 1);
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </p>
              {connected == false ? (
                <p
                  className="text-center position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={async () => {
                    connectWallet();
                  }}
                >
                  <img src={mintbtn} alt="" />
                  <span className="btn-text-mint">Connect</span>
                </p>
              ) : (
                <p
                  className="text-center position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={async () => {
                    MintElvesPublic();
                  }}
                >
                  <img src={mintbtn} alt="" />
                  <span className="btn-text-mint">MINT</span>
                </p>
              )}
              <p className="text-center text-white ">
                {supplyElves}/10,000 Minted
              </p>
              <p className="text-center mt-2">
                <a
                  href="https://opensea.io/collection/degen-elves"
                  target="_blank"
                >
                  <img src={opensea} alt="" />
                </a>
              </p>
              <p className="text-center text-white mt-4 ct-link">
                <a
                  href="https://etherscan.io/address/0x75c51f0ee60963454f27e196a8d9095eb47cb886#code"
                  target="_blank"
                >
                  Degen Elves Smart Contract
                </a>
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="text-center text-white">DEGEN REINDEER</h5>
              <img src={randeer} alt="" className="img-fluid" />
              <p className="text-center text-white mt-4">Price = Free Mint</p>
              <p className="text-center py-2">
                <div class="btngroup">
                  <div
                    class="d-flex rounded btngroup justify-content-center "
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      class="btn bg-count text-black "
                      onClick={() => {
                        if (quantityreindeer > 1) {
                          setQuantityreindeer(quantityreindeer - 1);
                        }
                      }}
                    >
                      -
                    </button>
                    <button type="button" class="btn text-white">
                      {quantityreindeer}
                    </button>
                    <button
                      type="button"
                      class="btn bg-count text-black"
                      onClick={() => {
                        if (quantityreindeer < 3) {
                          setQuantityreindeer(quantityreindeer + 1);
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </p>
              {connected == false ? (
                <p
                  className="text-center position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={async () => {
                    connectWallet();
                  }}
                >
                  <img src={mintbtn} alt="" />
                  <span className="btn-text-mint">Connect</span>
                </p>
              ) : (
                <p
                  className="text-center position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={async () => {
                    MintReindeerPublic();
                  }}
                >
                  <img src={mintbtn} alt="" />
                  <span className="btn-text-mint">MINT</span>
                </p>
              )}
              <p className="text-center text-white">
                {supplyReindeer}/10,000 Minted
              </p>
              <p className="text-center mt-2">
                <a
                  href="https://opensea.io/collection/degen-reindeer"
                  target="_blank"
                >
                  <img src={opensea} alt="" />
                </a>
              </p>
              <p className="text-center text-white mt-4 ct-link">
                <a
                  href="https://etherscan.io/address/0x59da3cae2d373b0e4ba6376dd0a1e1292cb9144d#code"
                  target="_blank"
                >
                  Degen Reindeer Smart Contract
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
