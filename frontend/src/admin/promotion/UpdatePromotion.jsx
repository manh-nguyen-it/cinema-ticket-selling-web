import { useState } from "react";

const UpdatePromotion = ({ promotion }) => {
  const [name, setName] = useState(promotion.name);
  const [discount, setDiscount] = useState(promotion.discount);

  const update = async () => {
    await fetch(`http://localhost:8000/api/promotions/${promotion.promotion_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, discount })
    });

    alert("Updated");
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={discount} onChange={e => setDiscount(e.target.value)} />
      <button onClick={update}>Update</button>
    </div>
  );
};

export default UpdatePromotion;
