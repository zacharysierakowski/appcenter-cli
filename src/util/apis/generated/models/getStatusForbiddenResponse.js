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
 * Class representing a GetStatusForbiddenResponse.
 */
class GetStatusForbiddenResponse {
  /**
   * Create a GetStatusForbiddenResponse.
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetStatusForbiddenResponse
   *
   * @returns {object} metadata of GetStatusForbiddenResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetStatusForbiddenResponse',
      type: {
        name: 'Composite',
        className: 'GetStatusForbiddenResponse',
        modelProperties: {
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetStatusForbiddenResponse;