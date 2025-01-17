import css from './Hero.module.css';
const Hero = () => {
  return (
    <section className={css.hero}>
      <h1>Discover the power of community-driven hiring</h1>
      <button className={css.btn}>POST JOB AD</button>
    </section>
  );
};

export default Hero;
