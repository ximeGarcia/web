
///////
import logo from './assets/img/descarga.jpeg';
import {useState} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CampoTexto from './CampoTexto';
function App() {

  const [loader, setLoader] = useState(false);

  const downloadPDF = () =>{
    const capture = document.querySelector('.actual-receipt');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }

  return (
//<CampoTexto/>
<div className="wrapper">

<div className="receipt-box">

    {/* actual receipt */}
    <div className="actual-receipt">

      {/* organization logo */}
      <div className="receipt-organization-logo">
      <img alt="Logo" src={logo} 
       />
      </div>

      {/* organization name */}
      <h5>QMG</h5>

      {/* street address and unit number */}
      <h6>
        Reporte de
        {' '}
        contencion
      </h6>

      {/* city province postal code */}
      <h6>
        DATAVAULTPR0
        {' '}
        
      </h6>

      {/* email-phone-and-website */}
      <div className="phone-and-website">
        <p>
          <a href={`mailto:anwarhamza919@gmail.com`}>
            ximenaag37@gmail.com
          </a>
        </p>
        <p>01234567890</p>
            
        <p>
          <a
            href="https://www.youtube.com/@jsSolutions"
            target="blank"
          >
            https://www.youtube.com/@jsSolutions
          </a>
        </p>
            
      </div>

      <div className="colored-row first">
        <span>Numero de Parte</span>
        <span></span>
      </div>

      <div className="data-row">
        <span className="font-weight">BDTS</span>
        <span></span>
      </div>

      <div className="colored-row">
        <span>Piezas inspeccionadas</span>
        <span></span>
      </div>

      <div className="data-row">
        <span className="font-weight">330</span>
        <span>
          
          {' '}
        
        </span>
      </div>

      <div className="colored-row">
        <span>Proveedor</span>
        <span />
      </div>
      <div className="data-row">
        <span className="font-weight">Katayama</span>
        <span></span>
      </div>

      <div className="data-row border-bottom">
        <span>
          <span className="font-weight">
            Piezas OK
            {' '}
            #:
          </span>
          {' '}
          328
        </span>
        <span>
          <span className="font-weight">
            
            :
          </span>
          {' '}
          
        </span>
      </div>
      <div className="data-row border-bottom">
        <span>
          <span className="font-weight">
            Piezas NG
            {' '}
            #:
          </span>
          {' '}
          3
        </span>
        <span>
          
        </span>
      </div>
      <div className="data-row border-bottom">
        <span className="font-weight">
          Totales
          {' '}
          327
        </span>
        <span />
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
          disabled={!(loader===false)}
        >
          {loader?(
            <span>Downloading</span>
          ):(
            <span>Download</span>
          )}

        </button> 
      </div>
    </div>

</div>

</div>

);
}

export default App;
    
 