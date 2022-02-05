import { memo, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './styles.module.scss';

interface Props {
  label: string;
  to?: string;
  disabled?: boolean;
  fill?: true;
  invert?: true;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  noBorder?: boolean;
}

export const CTAButton = memo<Props>(
  ({ type, label, to, disabled, fill, invert, className, onClick, noBorder }) => {
    const classes = cx(className, {
      [styles.ctaButton]: true,
      [styles.modFill]: fill,
      [styles.modInvert]: invert,
      [styles.modDisabled]: disabled,
      [styles.modNoBorder]: noBorder,
    });

    if (to) {
      return (
        <Link onClick={onClick} className={classes} to={to}>
          {label}
        </Link>
      );
    }

    return (
      <button
        disabled={disabled}
        type={type === 'submit' ? 'submit' : 'button'}
        onClick={onClick}
        className={classes}
      >
        {label}
      </button>
    );
  },
);

CTAButton.displayName = 'CTAButton';

export default CTAButton;
