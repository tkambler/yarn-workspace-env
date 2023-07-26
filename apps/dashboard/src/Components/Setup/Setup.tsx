import { compose } from 'lodash/fp';

import { withStrict } from './Strict';
import { withRouter } from './Router';
import { withRedux } from './Redux';

export const withSetup = compose(withStrict, withRedux, withRouter);
