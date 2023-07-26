import { compose } from 'lodash/fp';

import { withSetup } from '../Setup';

const Root = () => <></>;
const Composed = compose(withSetup)(Root);

export { Composed as Root };
