import { useState } from "react";

const AddPromotion = () => {
  const [form, setForm] = useState({
    promotion_id: "",
    name: "",
    discount: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/promotions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Promotion added");
  };

  return (
    <form onSubmit={submit}>
      <h3>Add Promotion</h3>
      <input placeholder="ID" onChange={e => setForm({...form, promotion_id: e.target.value})} />
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Discount" onChange={e => setForm({...form, discount: e.target.value})} />
      <button>Add</button>
    </form>
  );
};

export default AddPromotion;
