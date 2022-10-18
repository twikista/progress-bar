import { STORE_IN_PICK_UP_METHOD_CODE } from 'Component/StoreInPickUp/StoreInPickUp.config';

import {
    CheckoutShipping as SourceCheckoutShipping,
} from 'SourceComponent/CheckoutShipping/CheckoutShipping.component';

export class CheckoutShipping extends SourceCheckoutShipping {
    renderActions() {
        const { selectedShippingMethod, selectedStoreAddress } = this.props;
        const { method_code } = selectedShippingMethod;

        return (
            <div block="Checkout" elem="StickyButtonWrapper">
                { this.renderOrderTotal() }
                <button
                  type="submit"
                  block="Button"
                  disabled={ !selectedShippingMethod
                      || (method_code === STORE_IN_PICK_UP_METHOD_CODE && !Object.keys(selectedStoreAddress).length) }
                  mix={ { block: 'CheckoutShipping', elem: 'Button' } }
                  onClick={this.props.nextHandler}
                >
                    { __('Proceed to billing') }
                </button>
            </div>
        );
    }
};

export default CheckoutShipping
