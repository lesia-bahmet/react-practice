// Core
import { Parent } from './Parent';

const result = shallow(<Parent />);

describe('example-10', () => {
    test('test-1', () => {
        expect(result).toMatchSnapshot();
    });
});
