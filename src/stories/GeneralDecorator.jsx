import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/sass/index.global.scss';
import '../../node_modules/normalize.css/normalize.css';
import '../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../../node_modules/@blueprintjs/core/lib/css/blueprint.css';

function GeneralDecorator({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

GeneralDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralDecorator;
