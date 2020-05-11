
# ? What to create in the new workspace angular-nest
# ? Application name                    registrace
# ? Default stylesheet format           CSS
npx create-nx-workspace@latest priklad-bezecke-zavody

ng g lib --name ui --directory "shared" --style css --tags "scope:shared,type:ui"

ng g c --project shared-ui components/DataGrid

nx dep-graph

nx lint

nx format:check

ng update

ng e2e