import { Provider } from 'react-redux';
import { store } from '../../store';

export const withRedux = (Component) => (props) =>
  (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
