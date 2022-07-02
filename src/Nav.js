import React from "react";
import Web3 from "web3";
import abi from "./abi.json";
import { useState, useEffect } from "react";
import logo from "./Assets/Logo.png";
import btnbg from "./Assets/button.png";
import discord from "./Assets/discord.png";
import twitter from "./Assets/twitter.png";
import { useNavigate } from "react-router-dom";
require("dotenv").config();
const { REACT_APP_CONTRACT_ADDRESS } = process.env;

const Nav = ({ connecctstatus, setConnectedstatus }) => {
  const Navigate = useNavigate();
  const [connectedAccount, setConnectedAccount] = useState("Connect Wallet");
  const [contract, setContract] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [supply, setTokenSupply] = useState(null);
  const [price, setPrice] = useState();
  const [priceInEth, setPriceInEth] = useState(0.06);
  const [quantity, setQuantity] = useState(1);
  const [minted, setMinted] = useState(false);
  console.log("C", connecctstatus);

  useEffect(() => {
    loadWeb3();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      // await window.ethereum.enable();
      const web3 = window.web3;
      // creating contract instance
      const contractaddress = REACT_APP_CONTRACT_ADDRESS;
      const ct = new web3.eth.Contract(abi, contractaddress);
      setContract(ct);
      console.log("ct", ct);
      let price = await ct.methods.itemPricePresale().call();
      setContract(ct);
      setPrice(price);
      setPriceInEth(web3.utils.fromWei(price, "ether"));
      const totalSupply = await ct.methods.totalSupply().call();
      setTokenSupply(totalSupply);
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
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
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
                    <a className="nav-link" aria-current="page" href="#">
                      <img src={twitter} alt="" />
                    </a>
                  </div>
                  <div className="col-2 col-md-6 d-flex justify-content-start ">
                    <a className="nav-link" aria-current="page" href="#">
                      <img src={discord} alt="" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
