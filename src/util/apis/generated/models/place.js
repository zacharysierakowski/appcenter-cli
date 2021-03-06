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
 * The place code and the count.
 *
 */
class Place {
  /**
   * Create a Place.
   * @property {string} [code] The place code.
   * @property {number} [count] The count of the this place.
   * @property {number} [previousCount] The count of previous time range of the
   * place.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Place
   *
   * @returns {object} metadata of Place
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Place',
      type: {
        name: 'Composite',
        className: 'Place',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          previousCount: {
            required: false,
            serializedName: 'previous_count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Place;
