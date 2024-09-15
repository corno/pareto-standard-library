import * as pd from 'pareto-core-data'

import { algorithm, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "getLastElement": algorithm(sfunction("this", {}, "GetLastElement")),
        "getElementAt": algorithm(sfunction("this", {}, "GetElementAt")),
        "getLength": algorithm(sfunction("this", {}, "GetLength")),
        "merge": algorithm(sfunction("this", {}, "Merge")),
        "push": algorithm(sfunction("this", {}, "Push")),
    }),
}