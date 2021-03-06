/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @summary Name of the test series
  *
 */
class TestSeriesNameModel {
  /**
   * Create a TestSeriesNameModel.
   * @property {string} name Name of the new test series
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestSeriesNameModel
   *
   * @returns {object} metadata of TestSeriesNameModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'testSeriesName',
      type: {
        name: 'Composite',
        className: 'TestSeriesNameModel',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TestSeriesNameModel;
