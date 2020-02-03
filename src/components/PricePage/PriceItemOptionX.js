﻿import React from 'react';
import {
    MDBIcon
} from "mdbreact";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './locales/en-US';
import ru from './locales/ru-Ru';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ru', ru);
export default class PriceItemOptionX extends React.Component {
    render() {
        return (
            <li>
                <p className="mt-2">
                    <MDBIcon icon="times" className="red-text pr-2" />
                    {this.props.children}
                </p>
            </li>

        );
    };
}