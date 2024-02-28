import React, { useState } from "react";
import decoration_img from "../../assets/Decoration.svg";
import fb from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import "../../scss/_Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function validateEmail(email) {
    const [namePart, domainPart] = email.split("@");
    const domainRegex =
      /^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isDomainValid = domainRegex.test(domainPart);
    return isDomainValid;
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Przed wysłaniem żądania API");

    const isNameValid = name.length >= 3 && !name.includes(" ");
    const isEmailValid = validateEmail(email);
    const isMessageValid = message.length >= 120;

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (isNameValid && isEmailValid && isMessageValid) {
      fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
            setSuccessMessage("Wiadomość została wysłana!");
            setErrorMessage("");
          } else {
            setSuccessMessage("");
            setErrorMessage("Wystąpił błąd podczas wysyłania zgłoszenia!");
          }
        })
        .catch((error) => {
          console.error(error);
          setSuccessMessage("");
          setErrorMessage("Wystąpił błąd podczas wysyłania zgłoszenia!");
        });
        console.log("Po wysłaniu żądania API");
    }
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Skontaktuj się z nami</h1>
          <img
            src={decoration_img}
            alt="decoration icon"
            className="decoration_img"
          />
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="name_mail">
            <label>
              Wpisz swoje imię
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Andrzej"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {nameError ? (
                <p className="invalid_data">
                  Niepoprawny format podanego imienia!
                </p>
              ) : (
                <p></p>
              )}
            </label>
            <label>
              Wpisz swój email
              <input
                type="email"
                id="email"
                name="email"
                placeholder="twojmail@xyz.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {emailError ? (
                <p className="invalid_data">
                  Niepoprawny format podanego e-maila!
                </p>
              ) : (
                <p></p>
              )}
            </label>
          </div>
          <label className="text-msg">
            Wpisz swoją wiadomość
            <textarea
              id="text-message"
              name="text-message"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic labore minus officiis reiciendis soluta. Accusantium alias aliquam blanditiis consectetur cumque deleniti distinctio eaque minus nam necessitatibus nobis officiis perspiciatis quae, quidem quisquam quo quos repellat velit voluptas voluptatum."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            {messageError ? (
              <p className="invalid_data">
                Wiadomość musi zawierać co najmniej 120 znaków!
              </p>
            ) : (
              <p></p>
            )}
          </label>
          <div className="btn-container">
            <button>Wyślij</button>
          </div>
          <div className="footer-icons">
            <a href="https://www.facebook.com">
              <img src={fb} alt="facebook icon" className="icon-fb" />
            </a>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="instagram icon" className="icon-ig" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
