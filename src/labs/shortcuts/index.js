const formatShortcut = (element, info) => {
  let text = info.text
  text = text
    .split('+')
    .map((key) => `<span class="key">${key}</span>`)
    .join('')
  text = text.replace(',', ' ')
  element.append(text)
}

$(function () {
  fetch('./shortcuts.yaml')
    .then((res) => res.text())
    .then((yamlString) => {
      nativeObject = YAML.parse(yamlString)
      const { shortcuts } = nativeObject
      $('#grid').dxDataGrid({
        dataSource: shortcuts,
        grouping: {
          contextMenuEnabled: true,
        },
        groupPanel: {
          visible: true,
        },
        filterRow: { visible: true },
        searchPanel: { visible: true },
        columns: [
          {
            dataField: 'name',
            allowFiltering: true,
          },
          {
            dataField: 'description',
            allowFiltering: true,
          },
          {
            dataField: 'category',
            groupIndex: 1,
            allowFiltering: true,
          },
          {
            dataField: 'my',
            caption: 'My choice',
            cellTemplate: formatShortcut,
            allowFiltering: true,
          },
          {
            dataField: 'vim',
            caption: 'Vim',
            cellTemplate: formatShortcut,
            allowFiltering: true,
          },
          {
            dataField: 'idea',
            caption: 'IDEA',
            cellTemplate: formatShortcut,
            allowFiltering: true,
          },
          {
            dataField: 'eclipse',
            caption: 'Eclipse',
            cellTemplate: formatShortcut,
            allowFiltering: true,
          },
          {
            dataField: 'vscode',
            caption: 'VSCode',
            cellTemplate: formatShortcut,
            allowFiltering: true,
          },
          {
            dataField: 'vstudio',
            caption: 'Visual Studio',
            cellTemplate: formatShortcut,
            allowFiltering: true,
          },
        ],
      })
    })
})
