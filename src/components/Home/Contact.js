import decoration_img from "../../assets/Decoration.svg";
import fb from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import "../../scss/_Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <form className="form">
          <h1>Skontaktuj się z nami</h1>
          <img
            src={decoration_img}
            alt="decoration icon"
            className="decoration_img"
          />
          <div className="name_mail">
            <label>
              Wpisz swoje imię
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Andrzej" />
            </label>
            <label>
              Wpisz swój email
              <input
                type="email"
                id="email"
                name="email"
                placeholder="twojmail@xyz.com"
              />
            </label>
          </div>
          <label className="text-msg">
            Wpisz swoją wiadomość
            <textarea
              id="text-message"
              name="text-message"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic labore minus officiis reiciendis soluta. Accusantium alias aliquam blanditiis consectetur cumque deleniti distinctio eaque minus nam necessitatibus nobis officiis perspiciatis quae, quidem quisquam quo quos repellat velit voluptas voluptatum."
            />
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
