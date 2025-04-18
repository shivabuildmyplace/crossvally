import { useState } from "react";

import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    const store = "CrossValleyHomes";
    const API_name = "Store__c";
    const BMP_Categories__c = "CrossValleyHomes";
    let formDataObject = {
      name: name,
      email: email,
      textarea: textarea,
      store: store,
      API_name: API_name,
      BMP_Categories__c: BMP_Categories__c,
    };
    console.log(formDataObject);
    try {
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      };

      let fetchingdata = await fetch(
        "https://buildmyplace.my.salesforce-sites.com/services/apexrest/api/leadConversion",
        options
      );
      let response = await fetchingdata.json();
      console.log(response);
      setName("");
      setEmail("");
      setTextarea("");
    } catch (e) {
      console.log(e);
      setName("");
      setEmail("");
      setTextarea("");
    }
  };
  return (
    <>
      {" "}
      <div className="form-container">
        <h2>Contact Us</h2>
        <h3>Let's bring your dream home to life</h3>
        <p>
          Reach out to start your custom build journey, and we’ll guide you
          through every step — from initial ideas to the final touches.
        </p>
        <div className="form-section">
          <div className="form-image">
            <img src="/form2.webp" alt="form-image" loading="eager" />
          </div>
          <div className="form">
            <form onSubmit={handelSubmit}>
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="input-container">
                <label htmlFor="text-area">Message</label>
                <textarea
                  name="postContent"
                  rows={4}
                  cols={40}
                  className="text-are"
                  onChange={(e) => setTextarea(e.target.value)}
                  value={textarea}
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
