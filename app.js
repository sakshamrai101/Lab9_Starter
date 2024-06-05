document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        let output = document.querySelector('output');
        let firstNum = document.querySelector('#first-num').value;
        let secondNum = document.querySelector('#second-num').value;
        let operator = document.querySelector('#operator').value;
        try {
            output.textContent = eval(`${firstNum} ${operator} ${secondNum}`);
        } catch (e) {
            console.error('Calculation failed:', e);
            output.textContent = 'Error in calculation';
        }
    });

    let errorBtns = document.querySelectorAll('#error-btns > button');

    errorBtns.forEach(button => {
        button.addEventListener('click', () => {
            switch (button.textContent) {
                case 'Console Log':
                    console.log('This is a log message.');
                    break;
                case 'Console Error':
                    console.error('This is an error message.');
                    break;
                case 'Console Count':
                    console.count('Counter');
                    break;
                case 'Console Warn':
                    console.warn('This is a warning message.');
                    break;
                case 'Console Assert':
                    console.assert(false, 'This is an assert message where condition is false.');
                    break;
                case 'Console Clear':
                    console.clear();
                    break;
                case 'Console Dir':
                    console.dir(document.head);
                    break;
                case 'Console dirxml':
                    console.dirxml(document);
                    break;
                case 'Console Group Start':
                    console.group('Demo Group');
                    console.log('Inside group');
                    break;
                case 'Console Group End':
                    console.groupEnd();
                    break;
                case 'Console Table':
                    console.table(['Apple', 'Banana', 'Cherry']);
                    break;
                case 'Start Timer':
                    console.time('Timer');
                    break;
                case 'End Timer':
                    console.timeEnd('Timer');
                    break;
                case 'Console Trace':
                    console.trace('Trace Example');
                    break;
                case 'Trigger a Global Error':
                    throw new Error('Triggered Global Error');
            }
        });
    });

    window.onerror = function (message, source, lineno, colno, error) {
        console.log(`Error caught in global handler: ${message}`);
    };

    // Custom error class example
    class CustomError extends Error {
        constructor(message) {
            super(message);
            this.name = "CustomError";
        }
    }

    try {
        throw new CustomError("This is a custom error!");
    } catch (e) {
        console.error(e.name + ': ' + e.message);
    }
});
