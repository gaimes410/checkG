$path = $args[0]

Get-Acl -Path $path | % {$_.Access} | Select-Object -Property @{N="User";E={$_.IdentityReference.ToString()}}, @{N="Permissions";E={$_.FileSystemRights.ToString()}} | ConvertTo-Json



