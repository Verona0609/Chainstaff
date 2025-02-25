import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className="container">
      <div className={css.content}>
        <h1 className={css.title}>
          Supecharge your <span className={css.highlight}>hiring strategy</span>{' '}
          through personal networks
        </h1>
        <p className={css.text}>
          Streamline your recruitment with chainstaff's referral-based hiring
          solutions. Discover top talent faster and reduce costs effortlessly.
        </p>
        <div className={css.buttonBox}>
          <button className={css.btnGet}>Get started</button>
          <button className={css.btnTalk}>Talk to us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
