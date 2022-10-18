import { STORE_IN_PICK_UP_METHOD_CODE } from 'Component/StoreInPickUp/StoreInPickUp.config';

import {
    CheckoutBilling as SourceCheckoutBilling,
} from 'SourceComponent/CheckoutBilling/CheckoutBilling.component';

export class CheckoutBilling extends SourceCheckoutBilling {
    renderActions() {
        const {
            isOrderButtonVisible,
            isOrderButtonEnabled,
            isTermsAndConditionsAccepted
        } = this.state;

        const { termsAreEnabled } = this.props;

        if (!isOrderButtonVisible) {
            return null;
        }

        // if terms and conditions are enabled, validate for acceptance
        const isDisabled = termsAreEnabled
            ? !isOrderButtonEnabled || !isTermsAndConditionsAccepted
            : !isOrderButtonEnabled;

        return (
            <div block="Checkout" elem="StickyButtonWrapper">
                { this.renderOrderTotal() }
                <button
                  type="submit"
                  block="Button"
                  disabled={ isDisabled }
                  mix={ { block: 'CheckoutBilling', elem: 'Button' } }
                  onClick={this.props.nextHandler}
                >
                    { __('Complete order') }
                </button>
            </div>
        );
    }
};

export default CheckoutBilling
