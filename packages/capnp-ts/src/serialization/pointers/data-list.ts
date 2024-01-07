/**
 * @author jdiaz5513
 */

import { Data } from "./data.js";
import { ListCtor } from "./list.js";
import { PointerList } from "./pointer-list.js";

export const DataList: ListCtor<Data> = PointerList(Data);
