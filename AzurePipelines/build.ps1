Import-Module -Name "$PSScriptRoot\NXGBuildTools" -Verbose -Force

Write-Host "Build Arcade projects: Avalanche"
Invoke-NXGBuildApplication -ProjectDirectory ".\Arcade\Avalanche\nxg" -ProjectFileName "Avalanche.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build Arcade projects: DrEmoji"
Invoke-NXGBuildApplication -ProjectDirectory ".\Arcade\DrEmoji\nxg" -ProjectFileName "DrEmoji.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build Arcade projects: Fire"
Invoke-NXGBuildApplication -ProjectDirectory ".\Arcade\Fire" -ProjectFileName "LabVIEW PSX Doom Fire.lvproject" -TargetName "Web Server" -ComponentFileName "Application.gcomp"

Write-Host "Build Arcade projects: Reflex"
Invoke-NXGBuildApplication -ProjectDirectory ".\Arcade\Reflex" -ProjectFileName "Reflex.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build Arcade projects: Snake"
Invoke-NXGBuildApplication -ProjectDirectory ".\Arcade\Snake\nxg" -ProjectFileName "Snake.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build BusyState project"
Invoke-NXGBuildApplication -ProjectDirectory ".\BusyState" -ProjectFileName "BusyState.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build ECharts project"
Invoke-NXGBuildApplication -ProjectDirectory ".\ECharts" -ProjectFileName "ECharts.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build ImmersiveWeb projects: AugmentedReality"
Invoke-NXGBuildApplication -ProjectDirectory ".\ImmersiveWeb" -ProjectFileName "ImmersiveWeb.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build ImmersiveWeb projects: SecretBox"
Invoke-NXGBuildApplication -ProjectDirectory ".\ImmersiveWeb" -ProjectFileName "ImmersiveWeb.lvproject" -TargetName "Web Server" -ComponentFileName "SecretBox.gcomp"

Write-Host "Build JSONParser project"
Invoke-NXGBuildApplication -ProjectDirectory ".\JSONParser" -ProjectFileName "JSONParser.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build Leaflet project"
Invoke-NXGBuildApplication -ProjectDirectory ".\Leaflet" -ProjectFileName "Leaflet.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build MachineLearning project"
Invoke-NXGBuildApplication -ProjectDirectory ".\MachineLearning" -ProjectFileName "MachineLearning.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build RichText project"
Invoke-NXGBuildApplication -ProjectDirectory ".\RichText" -ProjectFileName "RichText.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build SweetAlert project"
Invoke-NXGBuildApplication -ProjectDirectory ".\SweetAlert" -ProjectFileName "SweetAlert.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build WebBluetooth project"
Invoke-NXGBuildApplication -ProjectDirectory ".\WebBluetooth" -ProjectFileName "WebBluetooth.lvproject" -TargetName "Web Server" -ComponentFileName "WebApp.gcomp"

Write-Host "Build WebVINode project"
Invoke-NXGBuildApplication -ProjectDirectory ".\WebVINode" -ProjectFileName "WebVINode.lvproject" -TargetName "express" -ComponentFileName "TestExpressClient.gcomp"
Invoke-NXGBuildApplication -ProjectDirectory ".\WebVINode" -ProjectFileName "WebVINode.lvproject" -TargetName "express" -ComponentFileName "TestExpressServer.gcomp"
