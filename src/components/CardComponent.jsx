import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';


function CardComponent({data}) {
  return (
       <>
      <div className='cards'>
      {
        data.length && (
          data.map(item => {
            return(
              <Card className="card" style={{ width: '17rem' }}>
                <Card.Img className="profileImg" variant="round" src={item.avatar_url} />
                <Card.Body>
                <Card.Title>{item.login}</Card.Title>
                </Card.Body>
                <Card.Body>
                <Card.Link className="viewProfileContainer" href={item.html_url}>View Profile</Card.Link>
                </Card.Body>
                </Card>
            )
          })
     )}
    </div>
    </>
  );
  }


export default CardComponent;