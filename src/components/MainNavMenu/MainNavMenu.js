import React from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import * as ROUTES from '../../constants/routes';
import logo from '../../assets/imgs/IELTSTrainerTimeLogo.png';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './locales/en-US';
import ru from './locales/ru-Ru';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ru', ru);
const INITIAL_STATE = {
    email: 'user@mail.ru',
    username:'Ivanov Ivan'
};

class MainNavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <MDBNavbar color="default-color" dark expand="md" >
                <MDBNavbarBrand>
                    <img src={logo} alt="IELTS Trainer. Time"/>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarMain" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to={ROUTES.HOME}><Translate content="home" /></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret href={ROUTES.EXERCISES}>
                                    <div className="d-none d-md-inline"><Translate content="exercises" /></div>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem href={ROUTES.EXERCISES}><Translate content="allExerciseList" /></MDBDropdownItem>
                                    <MDBDropdownItem href={ROUTES.AM_PM}><Translate content="ampm" /></MDBDropdownItem>
                                    <MDBDropdownItem href={ROUTES.TIME_GENERAL_SPELLING}><Translate content="gspelling" /></MDBDropdownItem>
                                    <MDBDropdownItem href={ROUTES.TIME_TV_SPELLING}><Translate content="tvspelling" /></MDBDropdownItem>
                                    <MDBDropdownItem href={ROUTES.TIME_BY_SPELLING}><Translate content="byspelling" /></MDBDropdownItem>
                                    <MDBDropdownItem href={ROUTES.VOCABULARY_TRAINING}><Translate content="vocabularyTrain" /></MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <div className="d-none d-md-inline"><Translate content="help" /></div>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem href={ROUTES.THEORY}><Translate content="theory" /></MDBDropdownItem>
                                    <MDBDropdownItem href={ROUTES.ABOUT_APP}><Translate content="aboutApp" /></MDBDropdownItem>
                                    <MDBDropdownItem href={ROUTES.VOCABULARY}><Translate content="vocabulary" /></MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to={ROUTES.PRICE}><Translate content="price" /></MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>                     
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to={ROUTES.CONTACTS}>
                                <span className="mr-2"><Translate content="contacts" /></span><MDBIcon far icon="envelope" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <MDBIcon icon="user" /><div className="d-none d-md-inline pl-2">{this.state.username}</div>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem href={ROUTES.PRICE}><Translate content="price" /></MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
                </MDBNavbar>
        );
    }
}

export default MainNavMenu;