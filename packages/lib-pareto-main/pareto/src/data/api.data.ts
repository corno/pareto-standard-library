import * as pd from 'pareto-core-data'

import { algorithm, constructor } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createLogger": algorithm(constructor("this", {}, "CreateStringLogger")),
        "createErrorLogger": algorithm(constructor("this", {}, "CreateStringLogger")),
        "setExitCodeToFailed": algorithm(constructor("this", {}, "CreateSignaler")),
        "createStdErrWriter": algorithm(constructor("this", {}, "CreateStringLogger")),
        "createStdOutWriter": algorithm(constructor("this", {}, "CreateStringLogger")),
    }),
}