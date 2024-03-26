import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cotizacion.module.css";

const Cotizacion = () => {
  const navigate = useNavigate();

  const onFrameContainer15Click = useCallback(() => {
    navigate("/pagos-y-resumen-del-proyecto");
  }, [navigate]);

  return (
    <div className={styles.cotizacion}>
      <div className={styles.fondoGeneral} />
      <div className={styles.frame}>
        <div className={styles.ecabezado}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.constructoraAlianzaSasContainer}>
            <p className={styles.constructora}>CONSTRUCTORA</p>
            <p className={styles.constructora}>ALIANZA S.A.S</p>
          </div>
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.mailfilled}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <div className={styles.frame2}>
        <div className={styles.personal}>
          <b className={styles.documentosRequeridos}>Metales</b>
          <img className={styles.filefilledIcon} alt="" src="/filefilled.svg" />
        </div>
      </div>
      <div className={styles.frame3}>
        <div className={styles.personal}>
          <b className={styles.documentosRequeridos}>Madera</b>
          <img className={styles.filefilledIcon} alt="" src="/filefilled.svg" />
        </div>
      </div>
      <div className={styles.frame4}>
        <div className={styles.personal}>
          <b className={styles.documentosRequeridos}>Construcción</b>
          <img className={styles.filefilledIcon} alt="" src="/filefilled.svg" />
        </div>
      </div>
      <div className={styles.frame5}>
        <div className={styles.personal}>
          <b className={styles.documentosRequeridos}>Otros</b>
          <img className={styles.filefilledIcon} alt="" src="/filefilled.svg" />
        </div>
      </div>
      <div className={styles.frame6}>
        <div className={styles.personal}>
          <b className={styles.documentosRequeridos}>Ferreteria</b>
          <img className={styles.filefilledIcon} alt="" src="/filefilled.svg" />
        </div>
      </div>
      <div className={styles.frame7}>
        <div className={styles.personal}>
          <b className={styles.documentosRequeridos}>Transporte</b>
          <img className={styles.filefilledIcon} alt="" src="/filefilled.svg" />
        </div>
      </div>
      <div className={styles.frame8}>
        <div className={styles.cuerpo}>
          <div className={styles.component121}>
            <div className={styles.component12Child} />
            <div className={styles.component12Item} />
          </div>
          <div className={styles.frame9}>
            <div className={styles.component25}>
              <i className={styles.id}>ID</i>
              <i className={styles.costo}>Costo</i>
              <i className={styles.cantidad}>Cantidad</i>
              <i className={styles.nombre}>Nombre</i>
              <i className={styles.descripcion}>Descripcion</i>
              <i className={styles.unidad}>Unidad</i>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.frameChild1} />
            <div className={styles.frameChild2} />
            <div className={styles.component4}>
              <div className={styles.component4Child} />
              <b className={styles.aprobado}>Aprobado</b>
              <b className={styles.unidad1}>unidad</b>
              <b className={styles.b}>00000</b>
              <b className={styles.pppppppppppppppppppppppppppppp}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad2}>unidad</b>
            </div>
            <div className={styles.component16}>
              <div className={styles.component161}>
                <div className={styles.component4Child} />
                <b className={styles.b1}>00000</b>
                <b className={styles.aprobado1}>Aprobado</b>
                <b className={styles.aprobado1}>Aprobado</b>
                <b className={styles.pppppppppppppppppppppppppppppp1}>
                  ppppppppppppppppppppppppppppppppppppppppp
                </b>
                <b className={styles.unidad3}>unidad</b>
                <b className={styles.unidad4}>unidad</b>
              </div>
            </div>
            <div className={styles.component14}>
              <div className={styles.component4Child} />
              <b className={styles.aprobado3}>Aprobado</b>
              <b className={styles.unidad5}>unidad</b>
              <b className={styles.b2}>00000</b>
              <b className={styles.pppppppppppppppppppppppppppppp2}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad6}>unidad</b>
            </div>
            <div className={styles.component15}>
              <div className={styles.component4Child} />
              <b className={styles.aprobado3}>Aprobado</b>
              <img
                className={styles.fileaddfilledIcon}
                alt=""
                src="/fileaddfilled.svg"
              />
              <b className={styles.b2}>00000</b>
              <b className={styles.pppppppppppppppppppppppppppppp3}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad5}>unidad</b>
              <b className={styles.unidad6}>unidad</b>
            </div>
            <div className={styles.component27}>
              <div className={styles.component4Child} />
              <b className={styles.aprobado3}>Aprobado</b>
              <img
                className={styles.fileaddfilledIcon}
                alt=""
                src="/fileaddfilled.svg"
              />
              <b className={styles.b2}>00000</b>
              <b className={styles.pppppppppppppppppppppppppppppp3}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad5}>unidad</b>
              <b className={styles.unidad6}>unidad</b>
            </div>
            <div className={styles.component26}>
              <div className={styles.component4Child} />
              <b className={styles.aprobado3}>Aprobado</b>
              <img
                className={styles.fileaddfilledIcon}
                alt=""
                src="/fileaddfilled.svg"
              />
              <b className={styles.b2}>00000</b>
              <b className={styles.pppppppppppppppppppppppppppppp3}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad5}>unidad</b>
              <b className={styles.unidad6}>unidad</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame10}>
        <div className={styles.cuerpo}>
          <div className={styles.component251}>
            <i className={styles.id}>ID</i>
            <i className={styles.costo}>Costo</i>
            <i className={styles.cantidad}>Cantidad</i>
            <i className={styles.nombre}>Nombre</i>
            <i className={styles.descripcion}>Descripcion</i>
            <i className={styles.unidad}>Unidad</i>
          </div>
          <div className={styles.cuerpoChild} />
          <div className={styles.cuerpoItem} />
          <div className={styles.cuerpoInner} />
          <div className={styles.cuerpoChild1} />
          <div className={styles.cuerpoChild2} />
          <div className={styles.cuerpoChild3} />
          <div className={styles.component42}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado}>Aprobado</b>
            <b className={styles.unidad1}>unidad</b>
            <b className={styles.b}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad2}>unidad</b>
          </div>
          <div className={styles.component162}>
            <div className={styles.component161}>
              <div className={styles.component4Child} />
              <b className={styles.b1}>00000</b>
              <b className={styles.aprobado1}>Aprobado</b>
              <b className={styles.aprobado1}>Aprobado</b>
              <b className={styles.pppppppppppppppppppppppppppppp1}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad3}>unidad</b>
              <b className={styles.unidad4}>unidad</b>
            </div>
          </div>
          <div className={styles.component141}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp2}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component151}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component271}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component261}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component121}>
            <div className={styles.component12Child} />
            <div className={styles.component12Item} />
          </div>
        </div>
      </div>
      <div className={styles.frame11}>
        <div className={styles.cuerpo2}>
          <div className={styles.component251}>
            <i className={styles.id}>ID</i>
            <i className={styles.costo}>Costo</i>
            <i className={styles.cantidad}>Cantidad</i>
            <i className={styles.nombre}>Nombre</i>
            <i className={styles.descripcion}>Descripcion</i>
            <i className={styles.unidad}>Unidad</i>
          </div>
          <div className={styles.cuerpoChild} />
          <div className={styles.cuerpoItem} />
          <div className={styles.cuerpoInner} />
          <div className={styles.cuerpoChild1} />
          <div className={styles.cuerpoChild2} />
          <div className={styles.cuerpoChild3} />
          <div className={styles.component42}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado}>Aprobado</b>
            <b className={styles.unidad1}>unidad</b>
            <b className={styles.b}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad2}>unidad</b>
          </div>
          <div className={styles.component162}>
            <div className={styles.component161}>
              <div className={styles.component4Child} />
              <b className={styles.b1}>00000</b>
              <b className={styles.aprobado1}>Aprobado</b>
              <b className={styles.aprobado1}>Aprobado</b>
              <b className={styles.pppppppppppppppppppppppppppppp1}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad3}>unidad</b>
              <b className={styles.unidad4}>unidad</b>
            </div>
          </div>
          <div className={styles.component141}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp2}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component151}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component271}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component261}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component121}>
            <div className={styles.component12Child} />
            <div className={styles.component12Item} />
          </div>
        </div>
      </div>
      <div className={styles.frame12}>
        <div className={styles.cuerpo3}>
          <div className={styles.component251}>
            <i className={styles.id}>ID</i>
            <i className={styles.costo}>Costo</i>
            <i className={styles.cantidad}>Cantidad</i>
            <i className={styles.nombre}>Nombre</i>
            <i className={styles.descripcion}>Descripcion</i>
            <i className={styles.unidad}>Unidad</i>
          </div>
          <div className={styles.cuerpoChild} />
          <div className={styles.cuerpoItem} />
          <div className={styles.cuerpoInner} />
          <div className={styles.cuerpoChild1} />
          <div className={styles.cuerpoChild2} />
          <div className={styles.cuerpoChild3} />
          <div className={styles.component42}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado}>Aprobado</b>
            <b className={styles.unidad1}>unidad</b>
            <b className={styles.b}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad2}>unidad</b>
          </div>
          <div className={styles.component162}>
            <div className={styles.component161}>
              <div className={styles.component4Child} />
              <b className={styles.b1}>00000</b>
              <b className={styles.aprobado1}>Aprobado</b>
              <b className={styles.aprobado1}>Aprobado</b>
              <b className={styles.pppppppppppppppppppppppppppppp1}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad3}>unidad</b>
              <b className={styles.unidad4}>unidad</b>
            </div>
          </div>
          <div className={styles.component141}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp2}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component151}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component271}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component261}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component121}>
            <div className={styles.component12Child} />
            <div className={styles.component12Item} />
          </div>
        </div>
      </div>
      <div className={styles.frame13}>
        <div className={styles.cuerpo}>
          <div className={styles.component251}>
            <i className={styles.id}>ID</i>
            <i className={styles.costo}>Costo</i>
            <i className={styles.cantidad}>Cantidad</i>
            <i className={styles.nombre}>Nombre</i>
            <i className={styles.descripcion}>Descripcion</i>
            <i className={styles.unidad}>Unidad</i>
          </div>
          <div className={styles.cuerpoChild} />
          <div className={styles.cuerpoItem} />
          <div className={styles.cuerpoInner} />
          <div className={styles.cuerpoChild1} />
          <div className={styles.cuerpoChild2} />
          <div className={styles.cuerpoChild3} />
          <div className={styles.component42}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado}>Aprobado</b>
            <b className={styles.unidad1}>unidad</b>
            <b className={styles.b}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad2}>unidad</b>
          </div>
          <div className={styles.component162}>
            <div className={styles.component161}>
              <div className={styles.component4Child} />
              <b className={styles.b1}>00000</b>
              <b className={styles.aprobado1}>Aprobado</b>
              <b className={styles.aprobado1}>Aprobado</b>
              <b className={styles.pppppppppppppppppppppppppppppp1}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad3}>unidad</b>
              <b className={styles.unidad4}>unidad</b>
            </div>
          </div>
          <div className={styles.component141}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp2}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component151}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component271}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component261}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component121}>
            <div className={styles.component12Child} />
            <div className={styles.component12Item} />
          </div>
        </div>
      </div>
      <div className={styles.frame14}>
        <div className={styles.cabecera}>
          <div className={styles.documentacion}>
            <div className={styles.documentacionChild} />
            <div className={styles.documentacin}>Documentación</div>
          </div>
          <div className={styles.evaluacionPreliminar}>
            <div className={styles.documentacionChild} />
            <div className={styles.evaluacinPreliminar}>
              Evaluación Preliminar
            </div>
          </div>
          <div className={styles.cuerpo5}>
            <div className={styles.component251}>
              <i className={styles.id}>ID</i>
              <i className={styles.costo}>Costo</i>
              <i className={styles.cantidad}>Cantidad</i>
              <i className={styles.nombre}>Nombre</i>
              <i className={styles.descripcion}>Descripcion</i>
              <i className={styles.unidad}>Unidad</i>
            </div>
            <div className={styles.cuerpoChild} />
            <div className={styles.cuerpoItem} />
            <div className={styles.cuerpoInner} />
            <div className={styles.cuerpoChild1} />
            <div className={styles.cuerpoChild2} />
            <div className={styles.cuerpoChild3} />
            <div className={styles.component42}>
              <div className={styles.component4Child} />
              <b className={styles.aprobado}>Aprobado</b>
              <b className={styles.unidad1}>unidad</b>
              <b className={styles.b}>00000</b>
              <b className={styles.pppppppppppppppppppppppppppppp}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad2}>unidad</b>
            </div>
            <div className={styles.component162}>
              <div className={styles.component161}>
                <div className={styles.component4Child} />
                <b className={styles.b1}>00000</b>
                <b className={styles.aprobado1}>Aprobado</b>
                <b className={styles.aprobado1}>Aprobado</b>
                <b className={styles.pppppppppppppppppppppppppppppp1}>
                  ppppppppppppppppppppppppppppppppppppppppp
                </b>
                <b className={styles.unidad3}>unidad</b>
                <b className={styles.unidad4}>unidad</b>
              </div>
            </div>
            <div className={styles.component141}>
              <div className={styles.component4Child} />
              <b className={styles.aprobado3}>Aprobado</b>
              <b className={styles.unidad5}>unidad</b>
              <b className={styles.b2}>00000</b>
              <b className={styles.pppppppppppppppppppppppppppppp2}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad6}>unidad</b>
            </div>
            <div className={styles.component151}>
              <div className={styles.component4Child} />
              <b className={styles.aprobado3}>Aprobado</b>
              <img
                className={styles.fileaddfilledIcon}
                alt=""
                src="/fileaddfilled.svg"
              />
              <b className={styles.b2}>00000</b>
              <b className={styles.pppppppppppppppppppppppppppppp3}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad5}>unidad</b>
              <b className={styles.unidad6}>unidad</b>
            </div>
            <div className={styles.component271}>
              <div className={styles.component4Child} />
              <b className={styles.aprobado3}>Aprobado</b>
              <img
                className={styles.fileaddfilledIcon}
                alt=""
                src="/fileaddfilled.svg"
              />
              <b className={styles.b2}>00000</b>
              <b className={styles.pppppppppppppppppppppppppppppp3}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad5}>unidad</b>
              <b className={styles.unidad6}>unidad</b>
            </div>
            <div className={styles.component261}>
              <div className={styles.component4Child} />
              <b className={styles.aprobado3}>Aprobado</b>
              <img
                className={styles.fileaddfilledIcon}
                alt=""
                src="/fileaddfilled.svg"
              />
              <b className={styles.b2}>00000</b>
              <b className={styles.pppppppppppppppppppppppppppppp3}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad5}>unidad</b>
              <b className={styles.unidad6}>unidad</b>
            </div>
            <div className={styles.component121}>
              <div className={styles.component12Child} />
              <div className={styles.component12Item} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame15}>
        <div className={styles.cuerpo6}>
          <div className={styles.cuerpoChild28} />
          <div className={styles.component251}>
            <i className={styles.id}>ID</i>
            <i className={styles.costo}>Costo</i>
            <i className={styles.cantidad}>Cantidad</i>
            <i className={styles.nombre}>Nombre</i>
            <i className={styles.descripcion}>Descripcion</i>
            <i className={styles.unidad}>Unidad</i>
          </div>
          <div className={styles.cuerpoChild} />
          <div className={styles.cuerpoItem} />
          <div className={styles.cuerpoInner} />
          <div className={styles.cuerpoChild1} />
          <div className={styles.cuerpoChild2} />
          <div className={styles.cuerpoChild3} />
          <div className={styles.component42}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado}>Aprobado</b>
            <b className={styles.unidad1}>unidad</b>
            <b className={styles.b}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad2}>unidad</b>
          </div>
          <div className={styles.component162}>
            <div className={styles.component161}>
              <div className={styles.component4Child} />
              <b className={styles.b1}>00000</b>
              <b className={styles.aprobado1}>Aprobado</b>
              <b className={styles.aprobado1}>Aprobado</b>
              <b className={styles.pppppppppppppppppppppppppppppp1}>
                ppppppppppppppppppppppppppppppppppppppppp
              </b>
              <b className={styles.unidad3}>unidad</b>
              <b className={styles.unidad4}>unidad</b>
            </div>
          </div>
          <div className={styles.component141}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp2}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component151}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component271}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component261}>
            <div className={styles.component4Child} />
            <b className={styles.aprobado3}>Aprobado</b>
            <img
              className={styles.fileaddfilledIcon}
              alt=""
              src="/fileaddfilled.svg"
            />
            <b className={styles.b2}>00000</b>
            <b className={styles.pppppppppppppppppppppppppppppp3}>
              ppppppppppppppppppppppppppppppppppppppppp
            </b>
            <b className={styles.unidad5}>unidad</b>
            <b className={styles.unidad6}>unidad</b>
          </div>
          <div className={styles.component121}>
            <div className={styles.component12Child} />
            <div className={styles.component12Item} />
          </div>
        </div>
      </div>
      <div className={styles.frame16} onClick={onFrameContainer15Click}>
        <div className={styles.cotizacion1}>
          <div className={styles.documentacionChild} />
          <div className={styles.cotizacin}>Cotización</div>
        </div>
        <div className={styles.pagos}>
          <div className={styles.documentacionChild} />
          <div className={styles.documentacin}>
            <p className={styles.constructora}>Pagos y Resumen del proyecto</p>
          </div>
        </div>
      </div>
      <div className={styles.frame17}>
        <div className={styles.personal}>
          <b className={styles.documentosRequeridos}>Personal</b>
          <img className={styles.filefilledIcon} alt="" src="/filefilled.svg" />
        </div>
      </div>
    </div>
  );
};

export default Cotizacion;
