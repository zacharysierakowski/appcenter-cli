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
 * Class representing a LegacyCollaborators.
 */
class LegacyCollaborators {
  /**
   * Create a LegacyCollaborators.
   * @property {object} [collaborators]
   */
  constructor() {
  }

  /**
   * Defines the metadata of LegacyCollaborators
   *
   * @returns {object} metadata of LegacyCollaborators
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LegacyCollaborators',
      type: {
        name: 'Composite',
        className: 'LegacyCollaborators',
        modelProperties: {
          collaborators: {
            required: false,
            serializedName: 'collaborators',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'LegacyCollaboratorsCollaboratorsValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'LegacyCollaboratorsCollaboratorsValue'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = LegacyCollaborators;