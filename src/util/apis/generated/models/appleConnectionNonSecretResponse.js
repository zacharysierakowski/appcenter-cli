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

const models = require('./index');

/**
 * Apple connection secrets
 *
 * @extends models['SharedConnectionResponse']
 */
class AppleConnectionNonSecretResponse extends models['SharedConnectionResponse'] {
  /**
   * Create a AppleConnectionNonSecretResponse.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AppleConnectionNonSecretResponse
   *
   * @returns {object} metadata of AppleConnectionNonSecretResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppleConnectionNonSecretResponse',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'serviceType',
          clientName: 'serviceType'
        },
        uberParent: 'SharedConnectionResponse',
        className: 'AppleConnectionNonSecretResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          credentialType: {
            required: true,
            serializedName: 'credentialType',
            type: {
              name: 'String'
            }
          },
          isValid: {
            required: false,
            serializedName: 'isValid',
            type: {
              name: 'Boolean'
            }
          },
          is2FA: {
            required: false,
            serializedName: 'is2FA',
            type: {
              name: 'Boolean'
            }
          },
          serviceType: {
            required: true,
            serializedName: 'serviceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppleConnectionNonSecretResponse;
