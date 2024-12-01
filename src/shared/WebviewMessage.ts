import { ApiConfiguration, ApiProvider } from "./api"
import { PathSetting } from "./ExtensionMessage"

export type AudioType = "notification" | "celebration" | "progress_loop"

export interface WebviewMessage {
	type:
		| "apiConfiguration"
		| "customInstructions"
		| "alwaysAllowReadOnly"
		| "webviewDidLaunch"
		| "newTask"
		| "askResponse"
		| "clearTask"
		| "didShowAnnouncement"
		| "selectImages"
		| "exportCurrentTask"
		| "showTaskWithId"
		| "deleteTaskWithId"
		| "exportTaskWithId"
		| "resetState"
		| "requestOllamaModels"
		| "requestLmStudioModels"
		| "openImage"
		| "openFile"
		| "openMention"
		| "cancelTask"
		| "refreshOpenRouterModels"
		| "playSound"
		| "soundEnabled"
		| "commandEnterToSend"
		| "pathSettings"
	text?: string
	askResponse?: ClineAskResponse
	apiConfiguration?: ApiConfiguration
	images?: string[]
	bool?: boolean
	audioType?: AudioType
	pathSettings?: PathSetting[]
}

export type ClineAskResponse = "yesButtonClicked" | "noButtonClicked" | "messageResponse"
