import Carousel from 'react-bootstrap/Carousel';
import one from '../images/KikiTalk - Banner.png'
import two from '../images/KikiTalk - Banner2.png'
import three from '../images/three.png'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={one}
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={two}
          alt="First slide"
        />
        </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;