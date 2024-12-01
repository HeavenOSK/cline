import {
	ASK_FOLLOWUP_QUESTION,
	ATTEMPT_COMPLETION,
	BROWSER_ACTION,
	CAPABILITIES,
	EXECUTE_COMMAND,
	LIST_CODE_DEFINITION_NAMES,
	LIST_FILES,
	OBJECTIVE,
	READ_FILE,
	ROLE_PROMPT,
	RULES,
	SEARCH_FILES,
	SYSTEM_INFORMATION,
	TOOL_USE,
	TOOL_USE_EXAMPLES,
	TOOL_USE_GUIDELINES,
	WRITE_TO_FILE,
} from "./sub_prompts"

export const SYSTEM_PROMPT = async (cwd: string, supportsComputerUse: boolean) => `${ROLE_PROMPT}

====

${TOOL_USE}

# Tools

${EXECUTE_COMMAND(cwd)}

${READ_FILE(cwd)}

${WRITE_TO_FILE(cwd)}

${SEARCH_FILES(cwd)}

${LIST_FILES(cwd)}

${LIST_CODE_DEFINITION_NAMES(cwd)}${supportsComputerUse ? `\n${BROWSER_ACTION}` : ""}

${ASK_FOLLOWUP_QUESTION}

${ATTEMPT_COMPLETION}

${TOOL_USE_EXAMPLES}

${TOOL_USE_GUIDELINES}

====
 
${CAPABILITIES(cwd, supportsComputerUse)}

====

${RULES(cwd, supportsComputerUse)}

====

${SYSTEM_INFORMATION(cwd)}

====

${OBJECTIVE}`

export function addCustomInstructions(customInstructions: string): string {
	return `
====

USER'S CUSTOM INSTRUCTIONS

The following additional instructions are provided by the user, and should be followed to the best of your ability without interfering with the TOOL USE guidelines.

${customInstructions.trim()}`
}
