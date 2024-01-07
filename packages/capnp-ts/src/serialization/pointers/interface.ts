/**
 * @author jdiaz5513
 */

import { MAX_DEPTH } from "../../constants.js";
import { NOT_IMPLEMENTED } from "../../errors.js";
import { format } from "../../util.js";
import { Segment } from "../segment.js";
import { Pointer } from "./pointer.js";

export class Interface extends Pointer {
  constructor(segment: Segment, byteOffset: number, depthLimit = MAX_DEPTH) {
    super(segment, byteOffset, depthLimit);

    throw new Error(format(NOT_IMPLEMENTED, "new Interface"));
  }
}
