// @flow

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.configure({ name: 'My News' })
  .useReactNative()
  .use(reactotronRedux())
  .connect();
