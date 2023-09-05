import React, { useRef, useState, useCallback } from "react";
import QRCode from "react-qr-code";

const Home = () => {
  const [qrCodeUrl, changeQrCodeUrl] = useState("");
  const qrCode = useRef("");
  const qrCodeElem = useRef();
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [fgColor, setFgColor] = useState("#000000");
  const generateQrCode = () => {
    changeQrCodeUrl(qrCode.current.value);
  };
  // const downloadQrCode = useCallback(() => {
  //   const svg = qrCodeElem.current.innerHTML;
  //   const blob = new Blob([svg], { type: "image/svg+xml" });
  //   const filename = `myimage.svg`;
  //   const objectUrl = URL.createObjectURL(blob);

  //   const link = document.createElement("a");
  //   link.href = objectUrl;
  //   link.download = filename;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }, []);

  return (
    <div className="container">
      <div id="Generate">
        <div className="col align-self-center">
          <div className="row m-auto mt-5 mb-5" id="qrcode">
            {qrCodeUrl?.length != 0 && (
              <QRCode
                ref={qrCodeElem}
                size={256}
                style={{
                  height: "auto",
                  maxWidth: "100%",
                  width: "100%",
                  border: "2px solid black",
                  backgroundColor: "#FFFFFF",
                }}
                value={qrCodeUrl}
                bgColor={bgColor}
                fgColor={fgColor}
                viewBox={`0 0 256 256`}
              />
            )}
          </div>
          <div className="row ">
            <div className="input-group mb-3 w-sm-100 w-md-75 generate-text-input mx-auto">
              <input
                type="text"
                className="form-control"
                id="qrCodeData"
                placeholder="Enter text or url"
                aria-label="text or url"
                aria-describedby="button-generate"
                ref={qrCode}
                required
              />
              <button
                className="btn btn-second"
                type="button"
                id="button-generate"
                onClick={generateQrCode}
              >
                Generate
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-evenly">
            <div className="d-flex flex-column align-items-center">
              <input
                type="color"
                className="form-control form-control-color"
                id="colorInput1"
                value={bgColor}
                onChange={(e) => {
                  setBgColor(e.target.value);
                }}
                title="Choose your Background Color"
              />
              <label htmlFor="colorInput1" className="form-label">
                Background Color
              </label>
            </div>
            <div className="d-flex flex-column align-items-center">
              <input
                type="color"
                className="form-control form-control-color"
                id="colorInput2"
                value={fgColor}
                onChange={(e) => {
                  setFgColor(e.target.value);
                }}
                title="Choose your Foreground Color"
              />
              <label htmlFor="colorInput2" className="form-label">
                Foreground Color
              </label>
            </div>
            {/* <span className="align-self-center">
              <button
                className="btn btn-second"
                type="button"
                id="button-download"
                disabled={qrCodeUrl?.length == 0}
                onClick={downloadQrCode}
              >
                Download
              </button>
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
