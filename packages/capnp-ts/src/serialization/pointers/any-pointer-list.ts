/**
 * @author jdiaz5513
 */

import { ListCtor } from "./list.js";
import { Pointer } from "./pointer.js";
import { PointerList } from "./pointer-list.js";

export const AnyPointerList: ListCtor<Pointer> = PointerList(Pointer);
