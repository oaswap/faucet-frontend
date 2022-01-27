import React, { useRef, useState } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { utils } from "ethers";
import { Button, Card, DatePicker, Divider, Input, Progress, Slider, Spin, Switch } from "antd";
import { Address, Balance, Events } from "../components";
import { callRelayer } from "../helpers/callRelayer";

export default function ExampleUI({
  purpose,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
  blockExplorer,
  roseSentEther,
  winnerCheck,
}) {
  const [newPurpose, setNewPurpose] = useState("loading...");
  const walletInput = useRef(null);
  const [submitting, setSubmitting] = useState(false);

  const callFaucetRelay = async event => {
    event.preventDefault();
    const walletAddress = walletInput.current.value;
    setSubmitting(true);

    try {
      const response = await callRelayer(mainnetProvider, walletAddress);
      // const hash = response.hash;
      // toast('Transaction sent!', { type: 'info', onClick });
      walletInput.current.value = "";
    } catch (err) {
      // toast(err.message || err, { type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 64 }}>
      <div
        style={{
          border: "1px solid #cccccc",
          padding: 16,
          width: 800,
          backgroundImage: "linear-gradient(rgb(118, 69, 217), rgb(69, 42, 122))",
          borderRadius: 32,
          borderColor: "transparent",
          borderBottom: "none",
          margin: "0 15px",
        }}
      >
        <form onSubmit={callFaucetRelay}>
          <input required={true} placeholder="Ex: 0x807c81042A1fgaC78F46799a401d809fd40813CD" ref={walletInput}></input>
          <Button id="send-rose-button" htmlType="submit" disabled={submitting}>
            {submitting ? "Requesting..." : "Request"}
          </Button>
        </form>
        <Divider />
        <h2 style={{ fontSize: 30, margin: 0 }}>
          {winnerCheck === undefined ? (
            <Spin />
          ) : winnerCheck ? (
            "Congratulations!"
          ) : (
            <span style={{}}>Wallet: Not Selected</span>
          )}
        </h2>
        <Divider />
        Your Address:
        <br />
        <Address address={address} ensProvider={mainnetProvider} blockExplorer={blockExplorer} fontSize={16} />
        <Divider />
        <h2>
          <span>Total ROSE Sent: </span>
          {roseSentEther ? (
            <span className="orange-color">{roseSentEther}</span>
          ) : (
            <div style={{ display: "inline-block" }}>
              <Spin />
            </div>
          )}
        </h2>
        <Divider />
        <h2>
          Your Balance:
          <br />
          <span className="orange-color">{yourLocalBalance ? utils.formatEther(yourLocalBalance) : "..."}</span>
          <br />
          ROSE
        </h2>
        <Divider />
        <span style={{ fontSize: 21 }}>Presale Contract Address:</span>
        <br />
        <div className="presale-contract">
          <Address
            address={readContracts && readContracts.PRESALE ? readContracts.PRESALE.address : null}
            ensProvider={mainnetProvider}
            fontSize={16}
            blockExplorer={blockExplorer}
          />
        </div>
        <Divider />
        <div style={{ margin: 8 }}>
          {winnerCheck ? (
            <Button
              id="send-rose-button"
              style={{}}
              onClick={() => {
                tx(
                  writeContracts.PRESALE.sendRose(address, {
                    value: utils.parseEther("2000"),
                  }),
                );
              }}
            >
              Send 2000 ROSE
            </Button>
          ) : (
            <Button id="send-rose-button" style={{}}>
              Disabled
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
