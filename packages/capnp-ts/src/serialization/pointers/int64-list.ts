/**
 * @author jdiaz5513
 */

import initTrace from "debug";

import { ListElementSize } from "../list-element-size.js";
import { _ListCtor, List } from "./list.js";
import { getContent } from "./pointer.js";

const trace = initTrace("capnp:list:composite");
trace("load");

export class Int64List extends List<bigint> {
  static readonly _capnp: _ListCtor = {
    displayName: "List<Int64>" as string,
    size: ListElementSize.BYTE_8,
  };

  get(index: number): bigint {
    const c = getContent(this);
    return c.segment.getInt64(c.byteOffset + index * 8);
  }

  set(index: number, value: bigint): void {
    const c = getContent(this);
    c.segment.setInt64(c.byteOffset + index * 8, value);
  }

  toString(): string {
    return `Int64_${super.toString()}`;
  }
}
