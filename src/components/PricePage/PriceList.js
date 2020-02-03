import React from 'react';
import PageMainHeader from '../UIControles/PageMainHeader/PageMainHeader';
import {
    MDBRow
} from "mdbreact";
import PriceItem from './PriceItem';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './locales/en-US';
import ru from './locales/ru-Ru';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ru', ru);
export default class PriceList extends React.Component {
    render() {
        return (
            <div>
                <PageMainHeader>
                    <Translate content="priceListPageTitle" />
                </PageMainHeader>
                <MDBRow className="mt-5">
                    <PriceItem />
                </MDBRow>
            </div>
        );
    };
}