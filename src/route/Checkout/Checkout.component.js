
import ProgressBar from 'Component/ProgressBar';
import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';
import CheckoutShipping from 'Component/CheckoutShipping';
import CheckoutBilling from 'Component/CheckoutBilling';

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
    state={activeStep:1}

    nextHandler = () => {
        console.log("i got clicked")
       
        const stepsArray = Object.values(this.stepMap)
      if (this.state.activeStep < stepsArray.length) {
        this.setState({activeStep:this.state.activeStep + 1});
      }
      console.log(stepsArray.length)
      console.log(this.state.activeStep)
    };
  
    // const prevHandler = () => {
    //   if (activeStep > 1) {
    //     setActiveStep(activeStep - 1);
    //   }
    // };
  

    
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

    renderShippingStep() {
        const {
            shippingMethods,
            onShippingEstimationFieldsChange,
            saveAddressInformation,
            isDeliveryOptionsLoading,
            onPasswordChange,
            onCreateUserChange,
            onEmailChange,
            isCreateUser,
            estimateAddress
        } = this.props;

        return (
            <CheckoutShipping
              isLoading={ isDeliveryOptionsLoading }
              shippingMethods={ shippingMethods }
              saveAddressInformation={ saveAddressInformation }
              onShippingEstimationFieldsChange={ onShippingEstimationFieldsChange }
              onPasswordChange={ onPasswordChange }
              onCreateUserChange={ onCreateUserChange }
              onEmailChange={ onEmailChange }
              isCreateUser={ isCreateUser }
              estimateAddress={ estimateAddress }
              nextHandler={this.nextHandler}
            />
        );
    }

    renderBillingStep() {
        const {
            setLoading,
            setDetailsStep,
            shippingAddress,
            paymentMethods = [],
            savePaymentInformation,
            selectedShippingMethod
        } = this.props;

        return (
            <CheckoutBilling
              setLoading={ setLoading }
              paymentMethods={ paymentMethods }
              setDetailsStep={ setDetailsStep }
              shippingAddress={ shippingAddress }
              savePaymentInformation={ savePaymentInformation }
              selectedShippingMethod={ selectedShippingMethod }
              nextHandler={this.nextHandler}
            />
        );
    }

    render() {

        console.log(this.state.activeStep)
        return (
            <main block="Checkout">
                <ProgressBar stepsArray= {this.stepMap} activeStep={this.state.activeStep}/>
                
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
