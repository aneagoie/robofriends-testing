import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16'; // only use for React 16
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });