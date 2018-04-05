/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

import React from 'react';
import loadable from 'react-loadable';

/**
 *
 * @param {object} opts
 * @param {object} opts.loader
 * @param {object} opts.loading
 * @param {function} opts.render
 * @returns {*}
 */
export default (opts) => {
  if (!opts.render) {
    opts.render = (loaded, props) => { // eslint-disable-line no-param-reassign
      const Component = loaded.default;
      return (
        <Component {...props} />
      );
    };
  }
  return loadable(opts);
};
