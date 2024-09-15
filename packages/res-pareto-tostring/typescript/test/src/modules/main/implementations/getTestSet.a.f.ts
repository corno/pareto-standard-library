
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-dev'

import * as g_test from "lib-pareto-test"

import * as g_pub from "../../../../../pub"

import { A } from "../api.generated"

export const $$: A.getTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            type: ['test', {
                type: ['short string', {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    createTest("foo", "sasdfas", "asdfaer")
    pd.logDebugMessage("HIER")

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}
