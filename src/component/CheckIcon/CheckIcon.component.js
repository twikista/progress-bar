// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './CheckIcon.style';

export class CheckIcon extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill='white'>
                <path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z"/>
            </svg>
        );
    }
}

export default CheckIcon;
