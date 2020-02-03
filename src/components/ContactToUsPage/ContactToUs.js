import React from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBIcon } from 'mdbreact';
import PageMainHeader from '../UIControles/PageMainHeader/PageMainHeader';
import TranslatedLable from '../UIControles/TranslatedLable/TranslatedLable';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './locales/en-US';
import ru from './locales/ru-Ru';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ru', ru);

class ContactToUs extends React.Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <form>
                            <PageMainHeader><Translate content="contactToUsPageTitle"/></PageMainHeader>
                            <TranslatedLable htmlFor="defaultFormContactNameEx" className="grey-text">
                                nameLableTxt
                            </TranslatedLable>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" required />
                            <br />
                            <TranslatedLable htmlFor="defaultFormContactEmailEx" className="grey-text">
                                emailLableTxt
                            </TranslatedLable>
                            <input type="email" id="defaultFormContactEmailEx" className="form-control" required />
                            <br />
                            <TranslatedLable htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                subject
                            </TranslatedLable>
                            <select id="defaultFormContactSubjectEx" className="form-control mdb-select">
                                <Translate component="option" value="" disabled content="chooseOption" />
                                <Translate component="option" value="1" defaultValue content="feedback" />
                                <Translate component="option" value="2" content="bugReport" />
                                <Translate component="option" value="3" content="newFeatureRq" />
                                <Translate component="option" value="4" content="featureImprove" />
                            </select>
                            <br />
                            <TranslatedLable htmlFor="defaultFormContactMessageEx" className="grey-text" >
                                yourMessage
                            </TranslatedLable>
                            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" required />
                            <div className="text-center mt-4">
                                <MDBBtn color="default" outline type="submit">
                                    <Translate content="btnSendTxt"/>
                                <MDBIcon far icon="paper-plane" className="ml-2" />
                                </MDBBtn>
                            </div>
                        </form>
                    </div>
                </MDBRow>
            </MDBContainer>
        );
    }
};

export default ContactToUs;