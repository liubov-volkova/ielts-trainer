import React from 'react';
class PageMainHeader extends React.Component {
    render() {
        return (
            <h1 className="text-center mt-4 mb-3">{this.props.children}</h1>
            );
    }
}
export default PageMainHeader;