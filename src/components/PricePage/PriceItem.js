import React from 'react';
import {
    MDBCol, MDBIcon, MDBBtn
} from "mdbreact";
import PriceItemOptionPlus from './PriceIttemOptionPlus';
import PriceItemOptionX from '././PriceItemOptionX';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './locales/en-US';
import ru from './locales/ru-Ru';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ru', ru);
export default class PriceItem extends React.Component {
    render() {
        return (
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                <div className="card card-cascade wider">
                    <div className="price header white-text bg-primary rounded-top text-center">
                        <h2 className="card-header-title mb-3 h2-responsive font-weight-bold text-white pt-2"><strong>Student</strong></h2>
                        <p className="mb-2"><MDBIcon icon="dollar-sign" /><span className="number">10</span>/month</p>
                    </div>
                    <div className="card-body card-body-cascade text-center">
                        <ul className="list-unstyled">
                            <PriceItemOptionPlus>20 GB Of Storage</PriceItemOptionPlus>
                            <PriceItemOptionPlus>Accounts</PriceItemOptionPlus>
                            <PriceItemOptionX>24h Tech Support</PriceItemOptionX>
                            <PriceItemOptionX>300 GB Bandwidth</PriceItemOptionX>
                            <PriceItemOptionX>User Management{" "}</PriceItemOptionX>
                        </ul>
                        <MDBBtn color="primary"><Translate content="buyNow" /></MDBBtn>
                    </div>
                </div>
            </MDBCol>
        );
    };
}