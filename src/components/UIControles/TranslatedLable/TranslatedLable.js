import React from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './locales/en-US';
import ru from './locales/ru-Ru';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ru', ru);
export default class TranslatedLable extends React.Component {
    render() {
        return (
            <label name={this.props.name} className={this.props.className} htmlFor={this.props.htmlFor}>
                <Translate content={this.props.children} />
            </label>
            );
    }
}