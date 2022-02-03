// IMPORT MODULES under test here:
import { renderGoblin } from '../utils.js';

const test = QUnit.test;

test('render a goblin', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="goblin"><h4>timmy</h4><img src="apple"><p>HP - 3</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGoblin({
        name: 'timmy',
        img: 'apple',
        hp: 3
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
