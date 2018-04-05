/*
 * @Copyright (C) 2015- 2018 Onny LLC - All Rights Reserved
 * @license
 * This file is part of onny-async-loader and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2018.4.4
 */

import React from 'react';
import loadable from 'react-loadable';
import Loading from './loading';

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

  if (!opts.loading) {
    opts.loading = Loading; // eslint-disable-line no-param-reassign
  }
  return loadable(opts);
};
