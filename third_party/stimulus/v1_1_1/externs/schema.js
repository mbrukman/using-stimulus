/**
 * @fileoverview Externs for `schema.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/schema.ts
 * @externs
 */

/** @const */
var Stimulus = {};

/**
 * @typedef {{controllerAttribute: !string, actionAttribute: !string, targetAttribute: !string}}
 */
Stimulus.Schema;

/** @type {!Stimulus.Schema} */
Stimulus.defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target"
};
