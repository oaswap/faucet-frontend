import { SyncOutlined } from "@ant-design/icons";
import { utils } from "ethers";
import { Button, Card, DatePicker, Divider, Input, Progress, Slider, Spin, Switch } from "antd";
import React, { useState } from "react";
import { Address, Balance, Events } from "../components";

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

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 64 }}>
      <div
        style={{
          border: "1px solid #cccccc",
          padding: 16,
          width: 400,
          backgroundImage: "linear-gradient(rgb(118, 69, 217), rgb(69, 42, 122))",
          borderRadius: 32,
          borderColor: "transparent",
          borderBottom: "none",
          margin: "0 15px",
        }}
      >
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