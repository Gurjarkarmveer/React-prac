import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'D:/ksj/React/hostel/src/dabbopatani.jpg';
import Image1 from 'D:/ksj/React/hostel/src/dayanita.jpg';
import Image2 from 'D:/ksj/React/hostel/src/sudhir.jpg';
function CardExam() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Dabboo patnani</Card.Title>
          <Card.Text>
            Dabboo Ratnani is an Indian fashion and commercial photographer, known for his annual calendar, first published in 1999. He has shot cover photographs for magazines including Better Homes and Gardens.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Famous fashion photographer</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Dayanita Singh</Card.Title>
          <Card.Text>
            Dayanita Singh is an Indian photographer whose primary format is the book. She has published fourteen books.

                           Singh's art reflects and expands on the ways in which people relate to photographic images. Her later works, drawn from her extensive photographic oeuvre, are a series of mobile museums allowing her images to be endlessly edited, sequenced, archived and displayed.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Black white best photographer</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image2} />
        <Card.Body>
          <Card.Title>Sudhir Shivram</Card.Title>
          <Card.Text>
            Shivaram grew up in Karnataka and became interested in wildlife photography in 1993 whilst studying engineering in Malnad College of Engineering in Hassan, Karnataka.
            After graduation, he worked for Hewlett-Packard as an engineer and later at APC. Currently, he is a full-time wildlife photography teacher. He was named Sanctuary Asia's "Wildlife Photographer of the Year" for 2012.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Famous Wildlife photographer</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardExam;