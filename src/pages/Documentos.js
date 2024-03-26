import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Documentos.module.css";

const Documentos = () => {
  const navigate = useNavigate();

  const onDocumentacionContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='component11Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);
  
  const onCotizacionClick = useCallback(() => {
    navigate("/cotizacion");
  }, [navigate]);

  const onPagosContainerClick = useCallback(() => {
    navigate("/pagos-y-resumen-del-proyecto");
  }, [navigate]);

  return (
    <div className={styles.documentos}>
      <div className={styles.fondoGeneral} />
      <div className={styles.ecabezado}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.constructoraAlianzaSasContainer}>
          <p className={styles.constructora}>CONSTRUCTORA</p>
          <p className={styles.constructora}>ALIANZA S.A.S</p>
        </div>
      </div>
      <div className={styles.component26Parent}>
        <div className={styles.component26}>
          <b className={styles.documentosRequeridos}>Documentos aprobados</b>
          <div className={styles.filefilled}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
        <div className={styles.component12}>
          <b className={styles.documentosRequeridos}>
            Documentos esperando revisión
          </b>
          <img className={styles.filefilledIcon} alt="" src="/filefilled.svg" />
        </div>
        <div className={styles.component27}>
          <b className={styles.documentosRequeridos2}>Documentos rechazados</b>
          <div className={styles.filefilled}>
            <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
          </div>
        </div>
      </div>
      <div className={styles.component16}>
        <div className={styles.component16Child} />
        <i className={styles.nombre}>Nombre</i>
        <i className={styles.estado}>Estado</i>
        <i className={styles.fecha}>Fecha</i>
      </div>
      <div className={styles.component17}>
        <div className={styles.component16Child} />
        <i className={styles.nombre}>Nombre</i>
        <i className={styles.estado}>Estado</i>
        <i className={styles.fecha}>Fecha</i>
      </div>
      <div className={styles.component261}>
        <div className={styles.component16Child} />
        <i className={styles.nombre}>Nombre</i>
        <i className={styles.estado}>Estado</i>
        <i className={styles.fecha}>Fecha</i>
      </div>
      <div className={styles.component31}>
        <div className={styles.component16Child} />
        <i className={styles.nombre}>Nombre</i>
        <i className={styles.estado}>Estado</i>
        <i className={styles.fecha}>Fecha</i>
      </div>
      <div className={styles.component271}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <div className={styles.fileaddfilled} />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
      <div className={styles.component32}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <div className={styles.fileaddfilled} />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
      <div className={styles.component33}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <div className={styles.fileaddfilled} />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
      <div className={styles.component34}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <div className={styles.fileaddfilled} />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
      <div className={styles.component36}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <div className={styles.fileaddfilled} />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
      <div className={styles.component28}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <div className={styles.fileaddfilled} />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
      <div className={styles.component29}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <div className={styles.fileaddfilled} />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
      <div className={styles.component30}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <div className={styles.fileaddfilled} />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
      <div className={styles.evaluacionPreliminarParent}>
        <div className={styles.evaluacionPreliminar}>
          <div className={styles.evaluacionPreliminarChild} />
          <div className={styles.evaluacinPreliminar}>
            Evaluación Preliminar
          </div>
        </div>
        <div className={styles.cotizacion}>
          <div className={styles.evaluacionPreliminarChild} />
          <div className={styles.cotizacin}onClick={onCotizacionClick}>Cotización</div>
        </div>
      </div>
      <img className={styles.mailfilledIcon} alt="" src="/mailfilled.svg" />
      <img
        className={styles.basiluserSolidIcon}
        alt=""
        src="/basilusersolid.svg"
      />
      <div className={styles.component11} data-scroll-to="component11Container">
        <b className={styles.documentosRequeridos2}>Documentos Requeridos</b>
        <img className={styles.filefilledIcon1} alt="" src="/filefilled.svg" />
      </div>
      <div className={styles.component9Parent}>
        <div className={styles.component9}>
          <div className={styles.component16Child} />
          <i className={styles.nombre}>Nombre</i>
          <i className={styles.estado}>Estado</i>
          <i className={styles.fecha}>Fecha</i>
        </div>
        <div className={styles.component121}>
          <div className={styles.component12Child} />
          <div className={styles.component12Item} />
        </div>
      </div>
      <div className={styles.component1}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <div className={styles.fileaddfilled} />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
      <div className={styles.component18}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <div className={styles.fileaddfilled} />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
      <div className={styles.component22}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <div className={styles.fileaddfilled} />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
      <div className={styles.component2}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <img
          className={styles.fileaddfilledIcon}
          alt=""
          src="/fileaddfilled.svg"
        />
      </div>
      <div className={styles.component19}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <img
          className={styles.fileaddfilledIcon}
          alt=""
          src="/fileaddfilled.svg"
        />
      </div>
      <div className={styles.component23}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <img
          className={styles.fileaddfilledIcon}
          alt=""
          src="/fileaddfilled.svg"
        />
      </div>
      <div className={styles.component3}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <img
          className={styles.fileaddfilledIcon}
          alt=""
          src="/fileaddfilled.svg"
        />
      </div>
      <div className={styles.component21}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <img
          className={styles.fileaddfilledIcon}
          alt=""
          src="/fileaddfilled.svg"
        />
      </div>
      <div className={styles.component25}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <img
          className={styles.fileaddfilledIcon}
          alt=""
          src="/fileaddfilled.svg"
        />
      </div>
      <div className={styles.component20}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <img
          className={styles.fileaddfilledIcon}
          alt=""
          src="/fileaddfilled.svg"
        />
      </div>
      <div className={styles.component24}>
        <div className={styles.component27Child} />
        <b className={styles.nombredocumentox}>Nombredocumentox</b>
        <b className={styles.enviadopendiente}>Enviado/Pendiente</b>
        <b className={styles.fechaDeEnvionull}>Fecha de envio/Null</b>
        <img
          className={styles.fileaddfilledIcon}
          alt=""
          src="/fileaddfilled.svg"
        />
      </div>
      <div className={styles.component122}>
        <b className={styles.documentosRequeridos2}>Documentos Adicionales</b>
        <img className={styles.filefilledIcon1} alt="" src="/filefilled.svg" />
      </div>
      <div className={styles.component111}>
        <b className={styles.encuestaBsica}>{`Encuesta Básica `}</b>
        <img className={styles.filefilledIcon1} alt="" src="/filefilled.svg" />
      </div>
      <img className={styles.subFondoIcon} alt="" src="/sub-fondo.svg" />
      <img className={styles.component35Icon} alt="" src="/component-35.svg" />
      <div
        className={styles.documentacion}
        onClick={onDocumentacionContainerClick}
      >
        <div className={styles.evaluacionPreliminarChild} />
        <div className={styles.documentacin}>Documentación</div>
      </div>
      <div className={styles.deslizadorInterno}>
        <div className={styles.component123}>
          <div className={styles.component12Inner} />
          <div className={styles.rectangleDiv} />
        </div>
      </div>
      <div className={styles.pagos} onClick={onPagosContainerClick}>
        <div className={styles.evaluacionPreliminarChild} />
        <div className={styles.documentacin}>
          <p className={styles.constructora}>Pagos y Resumen del proyecto</p>
        </div>
      </div>
      <div className={styles.component361}>
        <b className={styles.encuestaBsica}>Agendar Cita</b>
        <img
          className={styles.zondiconscalendar}
          alt=""
          src="/zondiconscalendar.svg"
        />
      </div>
    </div>
  );
};

export default Documentos;
