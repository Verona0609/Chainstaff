import { Icon } from '../Icon/Icon';
import css from './Steps.module.css';
import stepone from '../../assets/img/Step one.png';

const Steps = () => {
  return (
    <div className="container">
      <h3 className={css.title}>
        <span className={css.hire}>Hire smarter</span>, not harder.
      </h3>
      <p className={css.text}>Three easy steps to unlock your superpower.</p>
      <div className={css.stepWrapper}>
        <div className={css.stepbox}>
          <img className={css.imgStep} src={stepone} alt="step-one" />
          <p className={css.step}>Post job ads for free:</p>
          <p className={css.info}>
            Companies post job ads for free and set a bounty for successful
            recommendations.
          </p>
          <div className={css.iconBox}>
            <Icon className={css.icon} id="icon-left" size={28} />
            <Icon className={css.icon} id="icon-right" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
