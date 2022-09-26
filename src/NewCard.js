import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'D:/ksj/React/hostel/src/vikram.jpg';
import Image2 from 'D:/ksj/React/hostel/src/Rathika.jpg';
import Image3 from 'D:/ksj/React/hostel/src/atul.jpg';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Vikram bawa</Card.Title>
          <Card.Text>
            Vikram Bawa (born 16 March 1970) is an Indian fashion, advertising and landscape photographer based in Mumbai.
            He was the first Indian photographer to promote and showcase 3D photography in the late 1990s.He has photographed all Bollywood celebrities
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Famous indian fashion photographer</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image2} />
        <Card.Body>
          <Card.Title>Rathika Ramasamy</Card.Title>
          <Card.Text>
            Rathika Ramasamy is an Indian wildlife photographer. She is based in Chennai and operates as a freelance photographer.
            She has received many accolades for her photographs and has been called the "first Indian woman to strike an international reputation as a wildlife photographer".
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Wildlife photographer</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image3} />
        <Card.Body>
          <Card.Title>Atul kabsbekar</Card.Title>
          <Card.Text>
            Atul Kasbekar (born 22 April 1965) is an Indian fashion photographer and Bollywood film producer. He is recognised for his Kingfisher Calendar shoots.
            He was also the honorary chairman of the Photographer's Guild of India.Kasbekar is known for shooting the nineteen editions of the Kingfisher Calendar from 2003 to 2021 which featured models clad in swimsuits.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Famous indian fashion photographer</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;