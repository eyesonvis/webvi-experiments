WinWait LabVIEW NXG Licensing Wizard
WinActivate LabVIEW NXG Licensing Wizard
WinWaitActive LabVIEW NXG Licensing Wizard
Sleep 10000
ControlClick, Evaluate
Sleep 2000
WinWait, ahk_exe labviewnxgcli.exe, Extend Evaluation?
ControlClick, No
