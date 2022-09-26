import Alert from 'react-bootstrap/Alert';

function Box() {
  return (
    <>
      {[

        'danger',

      ].map((variant) => (
        <Alert key={variant} variant={variant}>
        <b><i> “Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.”</i></b>
        </Alert>
      ))}
    </>
  );
}

export default Box;