import React, { useEffect, useState } from "react";
import { supabase } from "../createClient";
import "./Countyo.css";

export function Countryo() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const loadCountries = async () => {
    const { data, error } = await supabase.from("countries").select("*");
    if (error) {
      console.log("Error fetching countries:", error.message);
    } else {
      setCountries(data);
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  
  const addCountry = async () => {
    const name = input.trim();
    if (name === "") return;

    const { error } = await supabase.from("countries").insert([{ name }]);
    if (error) {
      console.log("Insert error:", error.message);
    } else {
      setInput("");
      loadCountries();
    }
  };

  const deleteCountry = async (id) => {
    const { error } = await supabase.from("countries").delete().eq("id", id);
    if (error) {
      console.log("Delete error:", error.message);
    } else {
      loadCountries();
    }
  };

  const startEditing = (id, name) => {
    setEditingId(id);
    setEditingValue(name);
  };

  const updateCountry = async () => {
    const newName = editingValue.trim();
    if (newName === "") return;

    const { error } = await supabase
      .from("countries")
      .update({ name: newName })
      .eq("id", editingId);

    if (error) {
      console.log("Update error:", error.message);
    } else {
      setEditingId(null);
      setEditingValue("");
      loadCountries();
    }
  };


  const clearAll = async () => {
    for (const country of countries) {
      await supabase.from("countries").delete().eq("id", country.id);
    }
    loadCountries();
  };

  return (
    <div className="country-container">
      <h2> List your fav Country </h2>

      <div className="input-box">
        <input
          type="text"
          placeholder="Add country name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-btn" onClick={addCountry}>+</button>
      </div>

      <ul className="country-list">
        {countries.map((country) => (
          <li key={country.id}>
            {editingId === country.id ? (
              <>
                <input
              value={editingValue}
             onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={updateCountry}>DONE</button>
              </>
            ) : (
              <>
                {country.name}
                <button onClick={() => startEditing(country.id, country.name)}>UPDATE</button>
                <button onClick={() => deleteCountry(country.id)}>DELETE</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className="footer">
        <span style={{ color: "black" }}>You have {countries.length} countries</span>
        {countries.length > 0 && (
          <button className="clear-btn" onClick={clearAll}>
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
