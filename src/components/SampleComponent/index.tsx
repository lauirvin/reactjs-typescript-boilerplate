import { memo } from 'react';
import styles from './styles.module.scss';

interface Props {
  foo?: string;
}

export const SampleComponent = memo<Props>(({ foo }) => <p>SampleComponent</p>);

SampleComponent.displayName = 'SampleComponent';

export default SampleComponent;
