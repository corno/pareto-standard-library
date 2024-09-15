import * as pd from 'pareto-core-data'

import {
    array, data, externalTypeReference, group, imp, member, number, optional, parametrizedType, ref, sfunction,
    type, typeParameter, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({}),
    'imports': d({
        "common": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Array": parametrizedType({ "Type": null }, array(ref(typeParameter("Type")))),
            "ArrayOfArrays": parametrizedType({ "Type": null }, array(ref(typeReference("Array",  { "Type": typeParameter("Type") })))),
            "GetElementAtData": parametrizedType({ "Type": null }, group({
                "array": member(ref(typeReference("Array", { "Type": typeParameter("Type") }))),
                "index": member(number()),
            })),
            "PushParameters": parametrizedType({ "Type": null }, group({
                "array": member(ref(typeReference("Array", { "Type": typeParameter("Type") }))),
                "element": member(ref(typeParameter("Type"))),
            })),
            "OptionalElement": parametrizedType({ "Type": null}, optional(ref(typeParameter("Type"))))
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "GetElementAt": sfunction(typeParameter("Type"), data(typeReference("GetElementAtData", { "Type": typeParameter("Type") })), { "Type": null }),
            "GetLastElement": sfunction(typeReference("OptionalElement", { "Type": typeParameter("Type") }), data(typeReference("Array", { "Type": typeParameter("Type") })), { "Type": null }),
            "GetLength": sfunction(externalTypeReference("common", "Number"), data(typeReference("Array", { "Type": typeParameter("Type") })), { "Type": null }),
            "Merge": sfunction(typeReference("Array",  { "Type": typeParameter("Type") }), data(typeReference("ArrayOfArrays",  { "Type": typeParameter("Type") })), { "Type": null }),
            "Push": sfunction(typeReference("Array",  { "Type": typeParameter("Type") }), data(typeReference("PushParameters",  { "Type": typeParameter("Type") })), { "Type": null }),
        }),
    },
}