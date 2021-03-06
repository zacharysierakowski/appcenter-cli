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
 * Class representing a ListToolsetProjectsOKResponseJavascript.
 */
class ListToolsetProjectsOKResponseJavascript {
  /**
   * Create a ListToolsetProjectsOKResponseJavascript.
   * @property {array} packageJsonPaths Paths for detected package.json files
   * @property {array} [javascriptSolutions] The React Native solutions
   * detected
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListToolsetProjectsOKResponseJavascript
   *
   * @returns {object} metadata of ListToolsetProjectsOKResponseJavascript
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListToolsetProjectsOKResponse_javascript',
      type: {
        name: 'Composite',
        className: 'ListToolsetProjectsOKResponseJavascript',
        modelProperties: {
          packageJsonPaths: {
            required: true,
            serializedName: 'packageJsonPaths',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          javascriptSolutions: {
            required: false,
            serializedName: 'javascriptSolutions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ListToolsetProjectsOKResponseJavascriptJavascriptSolutionsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ListToolsetProjectsOKResponseJavascriptJavascriptSolutionsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ListToolsetProjectsOKResponseJavascript;
