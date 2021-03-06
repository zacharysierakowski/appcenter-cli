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
 * Class representing a AuthTenant.
 */
class AuthTenant {
  /**
   * Create a AuthTenant.
   * @property {uuid} id
   * @property {string} name
   */
  constructor() {
  }

  /**
   * Defines the metadata of AuthTenant
   *
   * @returns {object} metadata of AuthTenant
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AuthTenant',
      type: {
        name: 'Composite',
        className: 'AuthTenant',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
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

module.exports = AuthTenant;
