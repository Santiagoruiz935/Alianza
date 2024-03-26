import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onRegistrarseTextClick = useCallback(() => {
    navigate("/registro");
  }, [navigate]);

  const onBotonEntrarContainerClick = useCallback(() => {
    navigate("/documentos");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.fondoGeneral} />
      <div className={styles.logoAmarilloDeLaEmpresa}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.constructoraAlianzaSasContainer}>
          <p className={styles.constructora}>CONSTRUCTORA</p>
          <p className={styles.constructora}>ALIANZA S.A.S</p>
        </div>
      </div>
      <div className={styles.loginChild} />
      <div className={styles.usuario}>Usuario</div>
      <div className={styles.contrasea}>Contraseña</div>
      <b className={styles.aunNoTienes}>¿Aun no tienes una cuenta?</b>
      <b className={styles.registrarse} onClick={onRegistrarseTextClick}>
        Registrarse
      </b>
      <div className={styles.loginItem} />
      <div className={styles.contactanos}>Contactanos</div>
      <div className={styles.informacin}>Información</div>
      <div className={styles.blog}>Blog</div>
      <div className={styles.ayuda}>Ayuda</div>
      <div className={styles.privacidad}>Privacidad</div>
      <div className={styles.terminos}>Terminos</div>
      <div className={styles.api}>API</div>
     
      <div className={styles.botonEntrar} onClick={onBotonEntrarContainerClick}>
        <div className={styles.botonEntrarChild} />
        <b className={styles.iniciar}>Iniciar</b>
      </div>
      
      <div className={styles.cuadro2} />
      <div className={styles.cuadro1} />
    </div>
  );
};

export default Login;
