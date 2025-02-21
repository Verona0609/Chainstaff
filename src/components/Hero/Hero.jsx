import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className="container">
      <section className={css.hero}>
        <div className={css.content}>
          <h1>
            Supecharge your <span>hiring strategy</span> through personal
            networks
          </h1>
          <button className={css.btn}>POST JOB AD</button>
        </div>
        {/*  <img src={man} alt="man-hero" className={css.img} /> */}
      </section>
    </div>
  );
};

export default Hero;
