
import ProgressBar from 'Component/ProgressBar';
import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';

import {
    BILLING_STEP,
    CHECKOUT_URL,
    DETAILS_STEP,
    SHIPPING_STEP
} from './Checkout.config';


import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';

import './Checkout.override.style';

/** @namespace ProgressBar/Route/Checkout/Component */
export class CheckoutComponent extends SourceCheckout {
    stepMap = {
        [SHIPPING_STEP]: {
            title: __('Shipping step'),
            url: '/shipping',
            render: this.renderShippingStep.bind(this),
            areTotalsVisible: true,
            renderCartCoupon: this.renderCartCoupon.bind(this)
        },
        [BILLING_STEP]: {
            title: __('Billing step'),
            url: '/billing',
            render: this.renderBillingStep.bind(this),
            areTotalsVisible: true,
            renderCartCoupon: this.renderCartCoupon.bind(this)
        },
        [DETAILS_STEP]: {
            title: __('Thank you for your purchase!'),
            url: '/success',
            render: this.renderDetailsStep.bind(this),
            areTotalsVisible: false
        }
    };

    render() {
        return (
            <main block="Checkout">
                <ProgressBar stepsArray= {this.stepMap}/>
                
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                    
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent
