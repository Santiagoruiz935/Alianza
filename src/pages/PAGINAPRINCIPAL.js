import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PAGINAPRINCIPAL.module.css";

const PAGINAPRINCIPAL = () => {
  const navigate = useNavigate();

  const onRegistrarseTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRegistrarseText2Click = useCallback(() => {
    navigate("/registro");
  }, [navigate]);

  return (
    <div className={styles.paginaPrincipal1}>
      <div className={styles.fondoGeneral} />
      <div className={styles.ecabezado}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.constructoraAlianzaSasContainer}>
          <p className={styles.constructora}>CONSTRUCTORA</p>
          <p className={styles.constructora}>ALIANZA S.A.S</p>
        </div>
      </div>
      <div className={styles.proyectos}>Proyectos</div>
      <div className={styles.oficinaVirtual}>Oficina Virtual</div>
      <div className={styles.contactanos}>Contactanos</div>
      <div className={styles.pieDePaguinaParent}>
        <div className={styles.pieDePaguina}>
          <div className={styles.pieDePaguinaChild} />
          <div className={styles.proyectosActivos}>Proyectos Activos</div>
          <div className={styles.pieDePaguinaItem} />
          <div className={styles.numerosDeContactoContainer}>
            <p className={styles.constructora}>
              +34 (408) 102-1436 +69 (062) 056-5831 +18 (727) 732-0913 +49 (231)
              144-3329 +36 (459) 727-5318 +34 (408) 102-1436 +69 (062)
              056-5831 +18 (727) 732-0913 +49 (231) 144-3329 +36 (459) 727-5318 
            </p>
          </div>
          <div className={styles.contactanos1}>Contactanos</div>
          <div className={styles.pieDePaguinaInner} />
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ipsum ipsum, varius at iaculis at, sagittis ac eros. Aenean viverra
            varius enim ac aliquam. Proin ac dui non orci dapibus egestas in
            congue ero
          </div>
          <div className={styles.nuestrasOficinas}>Nuestras Oficinas</div>
          <div className={styles.encabezadoEstetic} />
          <div className={styles.loremIpsumDolorContainer}>
            <ul className={styles.loremIpsumDolorSitAmetI}>
              <li
                className={styles.inCommodoEst}
              >{`Lorem ipsum dolor sit amet, `}</li>
              <li className={styles.inCommodoEst}>{`In commodo est in ex `}</li>
              <li className={styles.inCommodoEst}>
                Sed gravida felis nec est bibendum blandit.
              </li>
              <li className={styles.inCommodoEst}>
                Integer sit amet lacus non lacus semper laoreet.
              </li>
              <li className={styles.inCommodoEst}>
                Maecenas aliquam leo non dui condimentum lacinia.
              </li>
              <li className={styles.inCommodoEst}>
                Phasellus id tortor iaculis,
              </li>
              <li className={styles.inCommodoEst}>
                consectetur adipiscing elit.
              </li>
              <li className={styles.inCommodoEst}>maximus blandit.</li>
              <li className={styles.inCommodoEst}>bibendum blandit.</li>
              <li className={styles.inCommodoEst}>lacus semper laoreet.</li>
              <li className={styles.inCommodoEst}>dui condimentum lacinia.</li>
              <li>dui condimentum lacinia.</li>
            </ul>
          </div>
        </div>
        <div className={styles.alianzasYSubsidios}>
          <div className={styles.alianzasYSubsidiosChild} />
          <div className={styles.alianzasYSubsidiosItem} />
          <div className={styles.alianzasYSubsidiosInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.alianzasYSubsidiosChild1} />
          <div className={styles.alianzasYSubsidiosChild2} />
          <div className={styles.empresasAliadas}>EMPRESAS ALIADAS</div>
          <div className={styles.alianzasYSubsidiosChild3} />
        </div>
        <div className={styles.cifras}>
          <div className={styles.loremIpsumDolor2}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </div>
          <div className={styles.div}>#</div>
          <img className={styles.vectorSavIcon} alt="" src="/vector-sav.svg" />
          <div className={styles.loremIpsumDolor3}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </div>
          <div className={styles.div1}>#</div>
          <img className={styles.vectorFamIcon} alt="" src="/vector-fam.svg" />
          <div className={styles.loremIpsumDolor4}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </div>
          <div className={styles.div2}>#</div>
          <img
            className={styles.vectorBuildIcon}
            alt=""
            src="/vector-build.svg"
          />
          <div className={styles.cifras1}>CIFRAS</div>
        </div>
        <div className={styles.quienesSomos}>
          <img
            className={styles.icbaselineAlarmOnIcon}
            alt=""
            src="/icbaselinealarmon.svg"
          />
          <img
            className={styles.carbondataQualityDefinitionIcon}
            alt=""
            src="/carbondataqualitydefinition.svg"
          />
          <img
            className={styles.mdiarchitectureIcon}
            alt=""
            src="/mdiarchitecture.svg"
          />
          <img
            className={styles.gameIconscargoCrane}
            alt=""
            src="/gameiconscargocrane.svg"
          />
          <div className={styles.quienesSomos1}>QUIENES SOMOS</div>
          <div className={styles.loremIpsumDolor5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ipsum ipsum, varius at iaculis at, sagittis ac eros. Aenean viverra
            varius enim ac aliquam. Proin ac dui non orci dapibus egestas in
            congue eros. Ut lorem massa, finibus non nisl eu, blandit aliquam
            nibh. Morbi mattis tempor condimentum. Suspendisse vulputate est at
            tortor tristique, a vestibulum odio feugiat. Nullam vitae viverra
            justo. Vestibulum ullamcorper accumsan nisi nec vulputate. Sed
            sagittis libero sit amet justo pellentesque dictum. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Duis euismod sit amet erat id fermentum. Nunc feugiat finibus
            libero, at aliquam turpis malesuada et. Ut a ante nisl. Nam aliquet
            tincidunt posuere.
          </div>
        </div>
        <div className={styles.principal}>
          <img
            className={styles.principalChild}
            alt=""
            src="/rectangle-71.svg"
          />
          <div className={styles.iniciaTuProyecto}>
            INICIA TU PROYECTO CON NOSOTROS
          </div>
          <div className={styles.espacioParaEjemploDeRender} />
          <img
            className={styles.sampleProyecto1Icon}
            alt=""
            src="/sample-proyecto-1@2x.png"
          />
          <div className={styles.principalItem} />
          <div className={styles.nombreProyecto}>Nombre Proyecto</div>
          <div className={styles.descripcionCortaDelContainer}>
            <p className={styles.constructora}>{`Descripcion corta `}</p>
            <p className={styles.constructora}>del proyecto</p>
          </div>
          <img
            className={styles.claritycircleArrowLineIcon}
            alt=""
            src="/claritycirclearrowline.svg"
          />
          <img
            className={styles.claritycircleArrowLineIcon1}
            alt=""
            src="/claritycirclearrowline@2x.png"
          />
        </div>
        <div className={styles.component32}>
          <b className={styles.registrarse} onClick={onRegistrarseTextClick}>
            Iniciar Sesión
          </b>
        </div>
      </div>
      <b className={styles.registrarse1} onClick={onRegistrarseText2Click}>
        Registrarse
      </b>
    </div>
  );
};

export default PAGINAPRINCIPAL;
