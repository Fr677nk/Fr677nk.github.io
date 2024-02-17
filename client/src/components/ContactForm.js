import { React, useEffect, useRef, useState } from "react";
import "../styles/contactform.css";

const ContactForm = (props) => {
  const [isVisable, setIsVisable] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        setIsVisable(entry[0].isIntersecting);
      },
      { rootMargin: "0px", threshold: 1 }
    );
    observer.observe(ref.current);
  }, []);
  useEffect(() => {
    if (isVisable) {
      props.setCurrPage();
    } else {
    }
  }, [isVisable]);

  return (
    <div id="borderholder">
      <div id="contactcontainer">
        <p>Contact Me</p>
        <form action="" ref={ref}>
          <div id="formtextinputs">
            <div id="nameemail">
              <label for="nameinput">NAME:</label>
              <input type="text" name="nameinput" required={true} /> <br />
              <label for="emailinput">EMAIL:</label>
              <input type="text" name="emailinput" required={true} />
            </div>
            <div id="inq">
              <label for="inqinput">INQUISITION:</label>
              <textarea
                name="inqinput"
                id="inqinput"
                required={true}
              ></textarea>
            </div>
          </div>
          <button type="submit" id="contactsubmit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
