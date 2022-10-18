// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import CheckIcon from 'Component/CheckIcon';

import './ProgressBar.style';

export class ProgressBar extends PureComponent {
    state = {activeStep:1}

    render() {
        
        console.log(this.props)
        const stepsArray= Object.values(this.props.stepsArray)
        return (
            <div block="ProBar">
               {stepsArray.map((step, i) => {
            return (
              <div
                key={i}
                index={i}
                className={`indicator-wrapper ${
                  i < this.props.activeStep ? "active" : null
                }`}
              >
                <div className="pbar-width">
                  <div className="active-pbwidth" />
                </div>
                {stepsArray.length - 1 !== i && (
                  <div className="pbStep-wrapper">
                    <div className="pbStep">
                      {this.props.activeStep - i > 1 ? <CheckIcon /> : i+1}
                      
                    </div>
                    <span className="pbStep-name">{step.title}</span>
                  </div>
                )}
              </div>
            );
          })}
            </div>
        );
    }
}


export default ProgressBar










