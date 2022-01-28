import React, { useRef, useState } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { utils } from "ethers";
import { Alert, Button, Card, DatePicker, Divider, Input, Progress, Slider, Spin, Switch } from "antd";
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
  const [badAddress, setBadAddress] = useState("none");

  const callFaucetRelay = async event => {
    event.preventDefault();
    const walletAddress = walletInput.current.value;

    if (utils.isAddress(walletAddress)) {
      setSubmitting(true);

      try {
        const response = await callRelayer(mainnetProvider, walletAddress);
        console.log(response);
        // const hash = response.hash;
        // toast('Transaction sent!', { type: 'info', onClick });
        walletInput.current.value = "";
      } catch (err) {
        // toast(err.message || err, { type: 'error' });
        console.log("err", err);
      } finally {
        setSubmitting(false);
      }
    } else {
      setBadAddress("block");
    }
  };

  return (
    <>
      <div style={{ display: badAddress, zIndex: 2, position: "absolute", right: 0, top: 60, padding: 16 }}>
        <Alert
          message="⚠️ Invalid Address"
          description={
            <div>
              You have <b>chain id 1337</b> for localhost and you need to change it to <b>31337</b> to work with
              HardHat.
              <div>(MetaMask -&gt; Settings -&gt; Networks -&gt; Chain ID -&gt; 31337)</div>
            </div>
          }
          type="error"
          closable={false}
        />
      </div>

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
            <input
              required={true}
              placeholder="Ex: 0x807c81042A1fgaC78F46799a401d809fd40813CD"
              ref={walletInput}
            ></input>
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
    </>
  );
}
