import { createContext } from "react";

import SECTIONS_DATA from "./directory.data";

const DirectoryContext = createContext(SECTIONS_DATA);

export default DirectoryContext;