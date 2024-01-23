import React, { useEffect } from "react";
import styles from "./FormPage.module.css";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { datenschutzPATH } from "../../utils/constants";

function FormPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  
  const { hadleChangeUserData, userData } = useForm({
    name: "",
    email: "",
    phone: "",
    firmName: "",
    message: "",
  });

  const hadleSubmit = (e) => {
    e.preventDefault();
    // dispatch(fetchLoginThunk(userData.email,  userData.password));
  };

  const inputsFormPage = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "E-mail",
      required: true,
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Telefonnnummer",
      required: true,
    },
    {
      name: "firmName",
      type: "text",
      placeholder: "Unternehmen",
      required: true,
    },
  ];

  return (
    <section className={styles.main_container}>
      <h2 className={styles.title}>Nehmen Sie per Formular Kontakt mit uns auf oder rufen Sie uns an</h2>
      <div className={styles.button}>
          <a href="tel:0309302981916" className={styles.link}>
            T. 030 93 029 819 16
          </a>
      </div>
      <form className={styles.form} action="POST" onSubmit={hadleSubmit}>
        {inputsFormPage.map((input) => (
          <input
            className={styles.input}
            onChange={hadleChangeUserData}
            value={userData[input.name]}
            {...input}
          />
        ))}
        <textarea
          name="message"
          id="message"
          className={`${styles.input} ${styles.input__textarea}`}
          placeholder="Ihre Mitteilung an uns"
          rows={9}
        />
        <div className={styles.chekbox_container}>
          <input type="checkbox" name="" id="" />
          <p className={styles.checkbox__label}>Ja, ich stimme der <Link target="_blank" to={datenschutzPATH}>Datenschutzerklärung</Link> zu</p>       
        </div>
        <button className={styles.button_contact}>Abschicken</button>
      </form>
      <p className={styles.request_meassage}>
        Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen!
      </p>
    </section>
  );
}

export default FormPage;
