import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
  }, []);

  if (loading) return (
    <>
      <h1>Home</h1>
      <div>Chargement...</div>
    </>
  );


  if (error) return (
    <>
      <div>Erreur : {error}</div>
    </>
  );

  return (
    <>
      <h1>Home</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {data.map((anime, index) => (
          <Col key={index}>
            <Card className="card" key={anime.id}>
              <Card.Img
                variant="top"
                src={anime.image}
                alt={anime.title}
                className="card-img"
              />
              <Card.Body className="card-content">
                <Card.Title>{anime.title}</Card.Title>
                <Card.Text>
                  <strong>Date de sortie:</strong> {anime.releaseDate || 'Non disponible'}
                </Card.Text>
                <Card.Text>
                  <strong>Type:</strong> {anime.subOrDub === 'sub' ? 'Sous-titré' : 'Doublé'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );

}

export default Home;


