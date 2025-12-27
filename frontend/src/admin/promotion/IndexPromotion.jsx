import { useEffect, useState } from "react";
import DeletePromotion from "./DeletePromotion";

const IndexPromotion = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 5;

  const load = async () => {
    const res = await fetch(
      `http://localhost:8000/api/promotions?offset=${offset}&limit=${limit}`
    );
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    load();
  }, [offset]);

  return (
    <div>
      <h3>Promotion List</h3>

      {data.map(p => (
        <div key={p.promotion_id}>
          {p.name} - {p.discount}%
          <DeletePromotion id={p.promotion_id} onDeleted={load} />
        </div>
      ))}

      <button disabled={offset === 0} onClick={() => setOffset(offset - limit)}>
        Prev
      </button>
      <button onClick={() => setOffset(offset + limit)}>
        Next
      </button>
    </div>
  );
};

export default IndexPromotion;
