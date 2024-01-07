/**
 * Why would anyone **SANE** ever use this!?
 *
 * @author jdiaz5513
 */

import { ListCtor } from "./list.js";
import { PointerList } from "./pointer-list.js";
import { Void } from "./void.js";

export const VoidList: ListCtor<Void> = PointerList(Void);
