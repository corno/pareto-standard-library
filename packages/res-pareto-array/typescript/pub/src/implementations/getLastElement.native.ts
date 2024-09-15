import * as pi from 'pareto-core-internals'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.getLastElement = () => {
    return <T>($: g_this.T.Array<T>) => {
        const length = $.__getLength()
        if (length === 0) {
            return [false]
        }
        return [true, $.__getElementAt(length - 1)]
    }
}