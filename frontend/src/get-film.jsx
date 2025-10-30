import { useState, useEffect } from 'react';

function Film() {
    const [film, setFilm] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8000/api/film')
            .then((response) => response.json())
            .then((data) => {
               setFilm(data);
               setLoading(false);
            });
    }, []);
    if (loading) return (<></>);
    return (
        <>
            <div>Danh sách phim</div>
            <div>{film[0].name}</div>
            <div>{film[0].description}</div>
        </>
    );
}

export default Film;
