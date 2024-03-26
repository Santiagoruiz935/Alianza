import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PagosYResumenDelProyecto.module.css";

const PagosYResumenDelProyecto = () => {
  const navigate = useNavigate();

  const onEvaluacionPreliminarContainerClick = useCallback(() => {
    navigate("/documentos");
  }, [navigate]);

  return (
    <div className={styles.pagosYResumenDelProyecto}>
      <div className={styles.fondoGeneral} />
      <div className={styles.ecabezado}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.constructoraAlianzaSasContainer}>
          <p className={styles.constructora}>CONSTRUCTORA</p>
          <p className={styles.constructora}>ALIANZA S.A.S</p>
        </div>
      </div>
      <img className={styles.mailfilledIcon} alt="" src="/mailfilled.svg" />
      <img
        className={styles.basiluserSolidIcon}
        alt=""
        src="/basilusersolid.svg"
      />
      <div className={styles.cotizacion}>
        <div className={styles.cotizacionChild} />
        <div className={styles.cotizacin}>Cotización</div>
      </div>
      <div className={styles.pagosYResumenDelProyectoChild} />
      <i className={styles.etapa}>Etapa</i>
      <i className={styles.descripcion}>Descripcion</i>
      <i className={styles.fechaDeInicio}>Fecha De Inicio</i>
      <i className={styles.fechaDeFinalizacin}>Fecha De Finalización</i>
      <i className={styles.estado}>Estado</i>
      <div className={styles.component1}>
        <div className={styles.component1Child} />
        <b className={styles.nombreetapa}>NombreEtapa</b>
        <b className={styles.descripcionetapa}>DescripcionEtapa</b>
        <b className={styles.b}>00-00-00</b>
        <b className={styles.b1}>00-00-00</b>
        <b className={styles.completa}>Completa</b>
      </div>
      <div className={styles.component20}>
        <div className={styles.component1Child} />
        <b className={styles.nombreetapa}>NombreEtapa</b>
        <b className={styles.descripcionetapa}>DescripcionEtapa</b>
        <b className={styles.b}>00-00-00</b>
        <b className={styles.b1}>00-00-00</b>
        <b className={styles.completa}>Completa</b>
      </div>
      <div className={styles.component21}>
        <div className={styles.component1Child} />
        <b className={styles.nombreetapa}>NombreEtapa</b>
        <b className={styles.descripcionetapa}>DescripcionEtapa</b>
        <b className={styles.b}>00-00-00</b>
        <b className={styles.b1}>00-00-00</b>
        <b className={styles.completa}>Completa</b>
      </div>
      <div className={styles.component22}>
        <div className={styles.component1Child} />
        <b className={styles.nombreetapa}>NombreEtapa</b>
        <b className={styles.descripcionetapa}>DescripcionEtapa</b>
        <b className={styles.b}>00-00-00</b>
        <b className={styles.b1}>00-00-00</b>
        <b className={styles.completa}>Completa</b>
      </div>
      <div className={styles.pagosYResumenDelProyectoItem} />
      <div className={styles.component17}>
        <div className={styles.component171}>
          <div className={styles.component1Child} />
          <b className={styles.datosTcnicos}>
            Descripcion general del proyecto, una piscina vacacional para una
            familia de 4, con una tematica del viejo oeste, algo asi un resumen
            del proyecto
          </b>
          <b className={styles.nombreProyecto}>Nombre Proyecto</b>
        </div>
      </div>
      <div className={styles.component15}>
        <div className={styles.component1Child} />
        <b className={styles.datosTcnicos}>Datos técnicos</b>
        <b className={styles.nombreProyecto}>Nombre Proyecto</b>
      </div>
      <div className={styles.cabecera}>
        <div className={styles.documentacion}>
          <div className={styles.cotizacionChild} />
          <div className={styles.documentacin}>Documentación</div>
        </div>
        <div
          className={styles.evaluacionPreliminar}
          onClick={onEvaluacionPreliminarContainerClick}
        >
          <div className={styles.cotizacionChild} />
          <div className={styles.evaluacinPreliminar}>
            Evaluación Preliminar
          </div>
        </div>
        <div className={styles.pagos}>
          <div className={styles.cotizacionChild} />
          <div className={styles.documentacin}>
            <p className={styles.constructora}>Pagos y Resumen del proyecto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagosYResumenDelProyecto;
