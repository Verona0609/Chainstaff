import css from './About.module.css';
import man from '../../assets/img/man.png';
const About = () => {
  return (
    <section className={css.background}>
      <h2 className={css.text}>Know someone great?</h2>
      <img src={man} alt="man-hero" className={css.img} />
    </section>
  );
};

export default About;
