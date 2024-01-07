/**
 * @author jdiaz5513
 */

import initTrace from "debug";

import { ListElementSize } from "../list-element-size.js";
import { _ListCtor, List } from "./list.js";
import { getContent } from "./pointer.js";

const trace = initTrace("capnp:list:composite");
trace("load");

export class Uint16List extends List<number> {
  static readonly _capnp: _ListCtor = {
    displayName: "List<Uint16>",
    size: ListElementSize.BYTE_2
  };

  get(index: number): number {
    const c = getContent(this);
    return c.segment.getUint16(c.byteOffset + index * 2);
  }

  set(index: number, value: number): void {
    const c = getContent(this);

    c.segment.setUint16(c.byteOffset + index * 2, value);
  }

  toString(): string {
    return `Uint16_${super.toString()}`;
  }
}
