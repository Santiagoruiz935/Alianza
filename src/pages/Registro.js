import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Registro.module.css";

const Registro = () => {
  const navigate = useNavigate();

  const onRegistrarseTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.registro}>
      <div className={styles.fondoGeneral} />
      <div className={styles.logoAmarilloDeLaEmpresa}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.constructoraAlianzaSasContainer}>
          <p className={styles.constructora}>CONSTRUCTORA</p>
          <p className={styles.constructora}>ALIANZA S.A.S</p>
        </div>
      </div>
      <div className={styles.registroChild} />
      <div className={styles.correoElectronico}>Correo Electronico</div>
      <div className={styles.telfono}>Teléfono</div>
      <div className={styles.correoElectronico1}>Correo Electronico</div>
      <b className={styles.yaTienesUna}>¿Ya Tienes Una Cuenta?</b>
      <b className={styles.entrar}>Entrar</b>
      <div className={styles.usuario}>Usuario</div>
      <div className={styles.contrasea}>{`Contraseña `}</div>
      <div className={styles.registroItem} />
      <div className={styles.contactanos}>Contactanos</div>
      <div className={styles.informacin}>Información</div>
      <div className={styles.blog}>Blog</div>
      <div className={styles.ayuda}>Ayuda</div>
      <div className={styles.privacidad}>Privacidad</div>
      <div className={styles.terminos}>Terminos</div>
      <div className={styles.api}>API</div>
    
      <div className={styles.rectanguloAmarillo} />
      <div className={styles.botonRegistrarse}>
        <div className={styles.botonRegistrarseChild} />
        <b className={styles.registrarse} onClick={onRegistrarseTextClick}>
          Registrarse
        </b>
      </div>
      <div className={styles.cuadro5} />
      <div className={styles.cuadro4} />
      <div className={styles.cuadro3} />
      <div className={styles.cuadro2} />
      <div className={styles.cuadro1} />
    </div>
  );
};

export default Registro;
