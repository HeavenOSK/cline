import { useState } from 'react'
import { VSCodeButton, VSCodeTextField } from '@vscode/webview-ui-toolkit/react'

interface PathSettingItem {
  path: string
  description: string
}

interface PathSettingsFormProps {
  initialSettings?: PathSettingItem[]
  onChange?: (settings: PathSettingItem[]) => void
}

export const PathSettingsForm: React.FC<PathSettingsFormProps> = ({
  initialSettings = [],
  onChange
}) => {
  const [settings, setSettings] = useState<PathSettingItem[]>(initialSettings)

  const addSetting = () => {
    const newSettings = [...settings, { path: '', description: '' }]
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
    <div>
      <span style={{ fontWeight: "500" }}>Custom Paths</span>
      <div style={{ marginTop: "5px" }}>
        {settings.map((setting, index) => (
          <div key={index} style={{ marginBottom: "5px", display: "flex", gap: "5px" }}>
            <div style={{ flex: 1, display: "flex", gap: "5px" }}>
              <VSCodeTextField
                placeholder="Path"
                value={setting.path}
                style={{ flex: 1 }}
                onChange={(e) => updateSetting(index, 'path', (e.target as HTMLInputElement).value)}
              />
              <VSCodeTextField
                placeholder="Description"
                value={setting.description}
                style={{ flex: 1 }}
                onChange={(e) => updateSetting(index, 'description', (e.target as HTMLInputElement).value)}
              />
            </div>
            <VSCodeButton
              appearance="secondary"
              onClick={() => removeSetting(index)}
              style={{ padding: "4px 8px", minWidth: "auto" }}
            >
              Remove
            </VSCodeButton>
          </div>
        ))}
        <VSCodeButton
          onClick={addSetting}
          style={{ marginTop: settings.length > 0 ? "5px" : 0 }}
        >
          Add Path
        </VSCodeButton>
      </div>
    </div>
  )
}
