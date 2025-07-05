import "./Contact.css";
import { useState } from "react";
import { supabase } from "../createClient";
export const Contact=()=> {
 const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
  });

   const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
        ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("users").insert([formData]);

    if (error) {
      setMessage(" Error: " + error.message);
    } else {
      setFormData({ name: "", age: "", phone: "" });
    }
  };

  return (
    <section className="section-contact">
      <form onSubmit={handleSubmit}>
        <h2 className="container-title">contact</h2>
        <div className="container-wrapper container">

          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
             onChange={handleChange}
          />

          <input
            type="number"
            required
            autoComplete="off"
            placeholder="Enter your age"
            name="age"
             value={formData.age}
              onChange={handleChange}
          />
          <input
            type="tel"
            required
            autoComplete="off"
            placeholder="Enter your number"
            name="phone"
             value={formData.phone}
              onChange={handleChange}
          />

          <button type="submit">submit</button>
        </div>
      </form>
    </section>
  );
};
