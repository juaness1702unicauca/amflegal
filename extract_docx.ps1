Add-Type -AssemblyName System.IO.Compression.FileSystem
if (Test-Path "brief_temp") { Remove-Item -Recurse -Force "brief_temp" }
[System.IO.Compression.ZipFile]::ExtractToDirectory("Brief_Pagina_AMF.docx", "brief_temp")
[xml]$xml = Get-Content "brief_temp\word\document.xml"
$nsmgr = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$nsmgr.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
$paragraphs = $xml.SelectNodes("//w:p", $nsmgr)
$lines = @()
foreach ($p in $paragraphs) {
    $tNodes = $p.SelectNodes(".//w:t", $nsmgr)
    $pText = ""
    foreach ($t in $tNodes) {
        $pText += $t.InnerText
    }
    if ($pText.Trim().Length -gt 0) {
        $lines += $pText
    }
}
$lines | Out-File -FilePath "brief_extracted.txt" -Encoding utf8
Remove-Item -Recurse -Force "brief_temp"
Write-Host "Extracted successfully"
