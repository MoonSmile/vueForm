export const basicWidgetDef = [
  {
    type: "input",
    name: "单行文本",
    options: {
      defaultValue: '',
      placeholder: '请输入'
    },
  },
  {
    type: "textarea",
    name: "多行文本",
    options: {
      defaultValue: '',
      placeholder: '请输入'
    }
  },
  {
    type: "grid",
    name: "布局",
    options: {
      columns: [
        {
          span: 12,
          list: []
        },
        {
          span: 12,
          list: []
        },
      ]
    }
  }
]