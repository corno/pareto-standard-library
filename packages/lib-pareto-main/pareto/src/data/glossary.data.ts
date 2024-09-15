import * as pd from 'pareto-core-data'

import {
    constructor, aInterfaceMethod, aInterfaceReference, array, externalTypeReference, group, imp, member, ref,
    sInterfaceReference, streamconsumer, string, type, typeReference, aInterface
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters':d({}),
    'imports': d({
        "common": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Arguments": type(array(string())),
            "MainData": type(group({
                "arguments": member(ref(typeReference("Arguments"))),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({
            "Log": aInterface(streamconsumer(
                aInterfaceMethod(externalTypeReference("common", "String")),
                aInterfaceMethod(null),
            )),
            "Signal": aInterface(streamconsumer(
                aInterfaceMethod(null),
                aInterfaceMethod(null),
            )),
            "Main": aInterface(aInterfaceMethod(typeReference("MainData"))),
        }),
        'algorithms': d({
            "CreateSignaler": constructor(aInterfaceReference("Signal"), {}),
            "CreateStringLogger": constructor(aInterfaceReference("Log"), {}),
            "CreateMain": constructor(aInterfaceReference("Main"), {}),
        }),
    },
    'synchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },
}