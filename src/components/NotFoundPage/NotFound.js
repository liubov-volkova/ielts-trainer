import React from 'react';
import PageNotFoundImg from '../../assets/imgs/PageNotFound404.png';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './locales/en-US';
import ru from './locales/ru-Ru';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ru', ru);

class NotFoundPage extends React.Component {
    render(){
        return (
            <div>
                <h3 className="mt-4 mb-2 text-center">
                    <Translate content="notFoundTxt"/> <code>{this.props.location}</code>
                </h3>
                <div className="text-center">
                    <img src={PageNotFoundImg} className="img-fluid mt-3" alt="Page not found"/>
                </div>
            </div>          
            );
        }
}

export default NotFoundPage;