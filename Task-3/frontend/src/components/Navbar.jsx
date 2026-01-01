import { useState } from "react";

export default function Navbar({ account, onConnect, onDisconnect, children }) {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-left">
        <h1>LendFlow</h1>

        <div className="subtext">
          {account ? (
            <>
              {show ? account : "**************"}
              <button className="eye-btn" onClick={() => setShow(!show)}>
                👁
              </button>
            </>
          ) : (
            "DeFi Lending Dashboard"
          )}
        </div>
      </div>

      <div className="nav-right">
        {children}

        {account ? (
          <button className="nav-btn gold" onClick={onDisconnect}>
            Connected
          </button>
        ) : (
          <button className="nav-btn silver" onClick={onConnect}>
            Connect MetaMask
          </button>
        )}
      </div>
    </div>
  );
}
