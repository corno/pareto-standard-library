import * as pa from 'pareto-core-async'

import * as g_fsres from "res-pareto-filesystem"

// export const icreateReadFileOrAbort: glo.FCreateReadFileOrAbort = ($i, $d) => {
//     return ($) => {
//         return $d.aggregate<fsAPI.TReadFile_Data, string>(
//             {
//                 connectToStream: ($, $i) => {
//                     sss
//                 }
//             }
//         )($).map(($) => {
//             return pa.asyncValue("FOOO")
//         })
//         // $d(
//         //     $.path,
//         //     {
//         //         init: () => {

//         //         },
                
//         //     }
//         // ),
//         // $a
//         // return $d(
//         //     $,
//         // ).setCondition(($) => {
//         //     switch ($[0]) {
//         //         case 'error':
//         //             return pl.ss($, ($) => {
//         //                 $i.onError($)
//         //                 return undefined
//         //             })
//         //         case 'success':
//         //             return pl.ss($, ($) => {
//         //                 return pa.asyncValue($)
//         //             })
//         //         default: return pl.au($[0])
//         //     }
//         // })

//     }
// }