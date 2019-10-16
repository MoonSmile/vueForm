export const basicComponents = [{
    type: "textarea",
    name: "多行文本",
    icon: "icon-diy-com-textarea",
    options: {
      defaultValueType: "固定值",
      defaultValue: "",
      placeholder: "",
      desc: "",
      required: false,
      pattern: "",
      minLengthRequired: false,
      minLength: "",
      maxLengthRequired: false,
      maxLength: ""
    },
    key: "1561533863000_25606",
    rules: []
  },
  {
    type: "input",
    name: "单行文本",
    icon: "icon-input",
    options: {
      defaultValueType: "固定值",
      defaultValue: "",
      placeholder: "",
      desc: "",
      required: false,
      dataType: "string",
      pattern: "",
      minLengthRequired: false,
      minLength: "",
      maxLengthRequired: false,
      maxLength: ""
    },
    key: "1561533872000_84865",
    rules: [{
      type: "string",
      message: "单行文本格式不正确"
    }]
  }
]

export const numberComponent = {
  type: 'number',
  name: '数字',
  icon: 'icon-number',
  options: {
    defaultValueType: '固定值',
    defaultValue: '',
    required: false,
    integerRequired: false,
    decimalRequired: false,
    decimal: 0,
    min: '',
    max: '',
    step: 1,
  }
}

export const radioComponent =     {
  type: 'radio',
  name: '单选框组',
  icon: 'icon-radio-active',
  options: {
      inline: true,
      defaultValueType:'固定值',
      defaultValue: '',
      showLabel: true,
      options: [{
              value: '1',
              label: '选项1'
          },
          {
              value: '2',
              label: '选项2'
          }
      ],
      required: false,
      datasource:'custom',
      width: ''
  }
}