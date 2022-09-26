import Carousel from 'react-bootstrap/Carousel';
import Image from 'D:/ksj/React/hostel/src/photo.jpg';
import Image2 from 'D:/ksj/React/hostel/src/deer.jpg';
import Image3 from 'D:/ksj/React/hostel/src/nature.jpg';
import Image4 from 'D:/ksj/React/hostel/src/bird.jpg';
import Image5 from 'D:/ksj/React/hostel/src/horse.jpg';

function Mycarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img sizes=''width={1000} height={600}
          className="d-block w-100"
          src={Image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2><i>photographer</i></h2>
          <h3><p><b><i>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.”</i></b></p></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img sizes=''width={900} height={600}
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Wildlife Photography</h2>
          <h3><p><b><i>“When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.”</i></b></p></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img sizes=''width={900} height={600}
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Landscape Photography</h2>
        <h3><p>
            <b><i>“When looking at an extraordinary landscape, there are no questions, no answers, no desires, no plans, no worries, no past, no present, no future; there is only a deep silence, only a glance!”</i></b>
          </p></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img sizes=''width={900} height={600}
                className="d-block w-100"
                src={Image4}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h2>Nature Photography</h2>
              <h3><p>
                  <b><i>“There is only you and your camera. The limitations in your photography are in yourself, for what we see is what we are.”</i></b>
                </p></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img sizes=''width={900} height={600}
                      className="d-block w-100"
                      src={Image5}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h2>Horse Photography</h2>
                    <h3><p>
                       <b><i> “In my mind, I visualize how a particular… sight will appear on a print. If it excites me, there is a good chance it will make a good photograph. It is an intuitive sense, an ability that comes from a lot of practice.”</i></b>
                      </p></h3>
                    </Carousel.Caption>
                  </Carousel.Item>
    </Carousel>
  );
}

export default Mycarousel;