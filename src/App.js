///////
import logo from "./assets/img/descarga.jpeg";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CampoTexto from "./CampoTexto";
function App() {
  const [loader, setLoader] = useState(false);

  const [numeroDeParte, setNumeroDeParte] = useState("");
  const [piezas, setPiezas] = useState("");
  const [proveedor, setProveedor] = useState("");

  const [piezasOk, setPiezasOk] = useState(0);
  const [piezasNG, setPiezasNG] = useState(0);

  const totales = () => {
    return parseInt(piezasOk) + parseInt(piezasNG);
  };

  const handleNumeroDeParteChange = (event) => {
    setNumeroDeParte(event.target.value);
  };
  const handlepiezasChange = (event) => {
    setPiezas(event.target.value);
  };
  const handleproveedorChange = (event) => {
    setProveedor(event.target.value);
  };
  const handlePiezasOkChange = (event) => {
    setPiezasOk(event.target.value);
  };
  const handlepiezasNGChange = (event) => {
    setPiezasNG(event.target.value);
  };

  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };

  return (
    //<CampoTexto/>
    <div className="wrapper">
      <div className="receipt-box">
        {/* actual receipt */}
        <div className="actual-receipt">
          {/* organization logo */}
          <div className="receipt-organization-logo">
            <img alt="Logo" src={logo} />
          </div>

          {/* organization name */}
          <h5>QMG</h5>

          {/* street address and unit number */}
          <h6>Reporte de contencion</h6>

          {/* city province postal code */}
          <h6>DATAVAULTPR0 </h6>

          {/* email-phone-and-website */}
          <div className="phone-and-website">
            <p>
              <a href={`mailto:anwarhamza919@gmail.com`}>
                sortingservicesqmg@gmail.com
              </a>
            </p>
            <p>+52 722 512 2075</p>

           
          </div>

          <div className="colored-row first">
            <span>Numero de Parte</span>
            <span></span>
          </div>

          <div className="data-row, center">
            <span>
              <input
                type="text"
                className={numeroDeParte ? "bigFont" : "inputs"}
                value={numeroDeParte}
                onChange={handleNumeroDeParteChange}
                placeholder=""
              />
            </span>
          </div>

          <div className="colored-row">
            <span>Piezas inspeccionadas</span>
            <span></span>
          </div>

          <div className="data-row, center">
            <span>
              <input
                type="number"           
                className={piezas ? "bigFont" : "inputs"}
                value={piezas}
                onChange={handlepiezasChange}
                placeholder=""
              />
            </span>
          </div>

          <div className="colored-row">
            <span>Proveedor</span>
            <span />
          </div>
          <div className="data-row, center">
            <span className="font-weight">
              {" "}
              <input
                type="text"
                className={proveedor ? "bigFont" : "inputs"}
                value={proveedor}
                onChange={handleproveedorChange}
                placeholder=""
              />
            </span>
            <span></span>
          </div>

          <div className="data-row border-bottom">
            <span>
              <span className="font-weight">Piezas OK #:</span>
            </span>
            <span>
              {/* <span className="font-weight">:</span>{" "} */}
              <input
                type="number"
                className={piezasOk ? "inputsNoLines" : "inputs"}
                value={piezasOk}
                onChange={handlePiezasOkChange}
                placeholder=""
              />
            </span>
          </div>
          <div className="data-row border-bottom">
            <span>
              <span className="font-weight">Piezas NG #:</span>
            </span>
            <span>
              <input
                type="number"
                className={piezasNG ? "inputsNoLines" : "inputs"}
                value={piezasNG}
                onChange={handlepiezasNGChange}
                placeholder=""
              />
            </span>
          </div>
          <div className="data-row border-bottom">
            <span className="font-weight">Totales</span>
            <span>
            <input
                type="number"
                className={piezasOk != "" && piezasNG != ""  ? "inputsNoLines" : "inputs2"}
                value= { piezasOk != "" && piezasNG != ""  ? totales() : ""}
                disabled
                placeholder=""
              />
             
           
            </span>
          </div>
          <div className="colored-row">
            <span>Reporte realizado</span>
            <span />
          </div>
        </div>
        {/* end of actual receipt */}

        {/* receipt action */}
        <div className="receipt-actions-div">
          <div className="actions-right">
            <button
              className="receipt-modal-download-button"
              onClick={downloadPDF}
              disabled={!(loader === false)}
            >
              {loader ? <span>Downloading</span> : <span>Download</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
