
import * as pl from 'pareto-core-lib'

// export const $$: api.CcreateReadOptionalFile = ($i, $d) => {
//     return ($) => {
//         const allow = $.allow
//         return $d(
//             $.fs,
//         ).setCondition(($) => {
//             switch ($[0]) {
//                 case 'error':
//                     return pl.ss($, ($) => {
//                         const err = $
//                         switch ($.error[0]) {
//                             case 'is directory':
//                                 return pl.ss($.error, ($) => {
//                                     if (allow.isDirectory) {
//                                         return pa.asyncValue(null)
//                                     } else {
//                                         $i.onError(err)
//                                         return undefined
//                                     }
//                                 })
//                             case 'no entity':
//                                 return pl.ss($.error, ($) => {
//                                     if (allow.noEntity) {
//                                         return pa.asyncValue(null)
//                                     } else {
//                                         $i.onError(err)
//                                         return undefined
//                                     }
//                                 })
//                             case 'unknown':
//                                 return pl.ss($.error, ($) => {
//                                     $i.onError(err)
//                                     return undefined
//                                 })
//                             default: return pl.au($.error[0])
//                         }
//                     })
//                 case 'success':
//                     return pl.ss($, ($) => {
//                         return pa.asyncValue($)
//                     })
//                 default: return pl.au($[0])
//             }
//         })

//     }
// }