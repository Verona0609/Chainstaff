import { Icon } from '../Icon/Icon';
import css from './Steps.module.css';

const Steps = () => {
  return (
    <div className="container">
      <h3 className={css.title}>
        <span className={css.hire}>Hire smarter</span>, not harder.
      </h3>
      <p className={css.text}>Three easy steps to unlock your superpower.</p>
      <div className={css.stepbox}>
        <img src="" alt="" />
        <p>Post job ads for free:</p>
        <p>
          Companies post job ads for free and set a bounty for successful
          recommendations.
        </p>
        <Icon />
        <Icon />
      </div>
    </div>
  );
};

export default Steps;
