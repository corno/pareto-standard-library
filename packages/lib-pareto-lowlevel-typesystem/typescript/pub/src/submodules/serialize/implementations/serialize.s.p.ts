import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.serialize = () => {
    return ($) => {
        pd.implementMe(`IMPLEMENT serialize`)
    }
}