import { useState } from "react"
import { VSCodeButton, VSCodeTextField } from "@vscode/webview-ui-toolkit/react"

interface PathSettingItem {
	path: string
	description: string
}

interface PathSettingsFormProps {
	initialSettings?: PathSettingItem[]
	onChange?: (settings: PathSettingItem[]) => void
}

export const PathSettingsForm: React.FC<PathSettingsFormProps> = ({ initialSettings = [], onChange }) => {
	const [settings, setSettings] = useState<PathSettingItem[]>(initialSettings)

	const addSetting = () => {
		const newSettings = [...settings, { path: "", description: "" }]
		setSettings(newSettings)
		onChange?.(newSettings)
	}

	const updateSetting = (index: number, field: keyof PathSettingItem, value: string) => {
		const newSettings = [...settings]
		newSettings[index][field] = value
		setSettings(newSettings)
		onChange?.(newSettings)
	}

	const removeSetting = (index: number) => {
		const newSettings = settings.filter((_, i) => i !== index)
		setSettings(newSettings)
		onChange?.(newSettings)
	}

	return (
		<div style={{ width: "100%" }}>
			<span style={{ fontWeight: "500" }}>Custom Paths</span>
			<div style={{ marginTop: "5px", width: "100%" }}>
				<table style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse" }}>
					<colgroup>
						<col style={{ width: "40%" }} />
						<col style={{ width: "40%" }} />
						<col style={{ width: "20%" }} />
					</colgroup>
					<thead>
						<tr>
							<th
								style={{
									textAlign: "left",
									padding: "4px 8px",
									color: "var(--vscode-foreground)",
									borderBottom: "1px solid var(--vscode-textSeparator-foreground)",
									fontWeight: "normal",
								}}>
								Path
							</th>
							<th
								style={{
									textAlign: "left",
									padding: "4px 8px",
									color: "var(--vscode-foreground)",
									borderBottom: "1px solid var(--vscode-textSeparator-foreground)",
									fontWeight: "normal",
								}}>
								Description
							</th>
							<th
								style={{
									padding: "4px 8px",
									borderBottom: "1px solid var(--vscode-textSeparator-foreground)",
								}}></th>
						</tr>
					</thead>
					<tbody>
						{settings.map((setting, index) => (
							<tr key={index}>
								<td
									style={{
										padding: "6px 8px 4px",
										wordBreak: "break-word",
										whiteSpace: "normal",
									}}>
									<VSCodeTextField
										placeholder="Path"
										value={setting.path}
										style={{ width: "100%" }}
										onChange={(e) =>
											updateSetting(index, "path", (e.target as HTMLInputElement).value)
										}
									/>
								</td>
								<td
									style={{
										padding: "6px 8px 4px",
										wordBreak: "break-word",
										whiteSpace: "normal",
									}}>
									<VSCodeTextField
										placeholder="Description"
										value={setting.description}
										style={{ width: "100%" }}
										onChange={(e) =>
											updateSetting(index, "description", (e.target as HTMLInputElement).value)
										}
									/>
								</td>
								<td
									style={{
										padding: "4px 8px",
										textAlign: "right",
									}}>
									<VSCodeButton
										appearance="secondary"
										onClick={() => removeSetting(index)}
										style={{
											padding: "2px 6px",
											lineHeight: "20px",
											fontSize: "12px",
											width: "100%",
										}}>
										×
									</VSCodeButton>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<VSCodeButton onClick={addSetting} style={{ marginTop: "8px" }}>
					Add Path
				</VSCodeButton>
			</div>
		</div>
	)
}
