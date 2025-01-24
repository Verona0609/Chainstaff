import css from './Hero.module.css';
import man from '../../../assets/img/man.png';

const Hero = () => {
  return (
    <div className="container">
      <section className={css.hero}>
        <div className={css.content}>
          <h1>
            Leverage professional networks to find and hire the best talent
          </h1>
          <button className={css.btn}>POST JOB AD</button>
        </div>
        {/*  <img src={man} alt="man-hero" className={css.img} /> */}
      </section>
    </div>
  );
};

export default Hero;
