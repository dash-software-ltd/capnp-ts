/**
 * @author jdiaz5513
 */

import { Interface } from "./interface.js";
import { ListCtor } from "./list.js";
import { PointerList } from "./pointer-list.js";

export const InterfaceList: ListCtor<Interface> = PointerList(Interface);
