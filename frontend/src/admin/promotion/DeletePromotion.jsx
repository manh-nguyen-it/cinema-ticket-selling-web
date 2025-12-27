const DeletePromotion = ({ id, onDeleted }) => {
  const remove = async () => {
    await fetch(`http://localhost:8000/api/promotions/${id}`, {
      method: "DELETE"
    });
    onDeleted && onDeleted();
  };

  return <button onClick={remove}>Delete</button>;
};

export default DeletePromotion;
