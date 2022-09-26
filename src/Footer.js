import Accordion from 'react-bootstrap/Accordion';

function Footer() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h2>Karmveer Singh</h2></Accordion.Header>
        <Accordion.Body>
          Submitted to=Prof Sachin Joshi sir
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default Footer;