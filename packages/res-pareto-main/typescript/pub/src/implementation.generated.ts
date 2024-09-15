import { API } from "./api.generated"
import { $$ as icreateErrorLogger } from "./implementations/createErrorLogger.native"
import { $$ as icreateLogger } from "./implementations/createLogger.native"
import { $$ as icreateStdErrWriter } from "./implementations/createStdErrWriter.native"
import { $$ as icreateStdOutWriter } from "./implementations/createStdOutWriter.native"
import { $$ as isetExitCodeToFailed } from "./implementations/setExitCodeToFailed.native"

export const $api: API = {
    'createErrorLogger': icreateErrorLogger,
    'createLogger': icreateLogger,
    'createStdErrWriter': icreateStdErrWriter,
    'createStdOutWriter': icreateStdOutWriter,
    'setExitCodeToFailed': isetExitCodeToFailed,
}