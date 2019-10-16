export default
  {
    props: ['value'],
    render(h) {

      return h("input", {
          props: {
            value: "123"
          },
          attrs: {
            value: this.value,
            maxlength: 20,
            placeholder: "这是一个输入框",
          },
          on: {
            "change": function (val) {
              console.log("change", val)
              this.value = val
            },
            focus: () => {
              console.log('focus')
            },
            input: function (event) {
              console.log("input", event)
            }
          }
        })
      ;
    }
  }

// export default
//   {
//     render(h) {
//       console.log(h)
//       return (
//         <div
//           // normal attributes or component props.
//           id="foo"
//           // DOM properties are prefixed with `domProps`
//           domPropsInnerHTML="bar"
//           // event listeners are prefixed with `on` or `nativeOn`
//           onClick={this.clickHandler}
//           nativeOnClick={this.nativeClickHandler}
//           // other special top-level properties
//           class={{ foo: true, bar: false }}
//           style={{ color: 'red', fontSize: '14px' }}
//           key="key"
//           ref="ref"
//           // assign the `ref` is used on elements/components with v-for
//           refInFor
//           slot="slot">
//         </div>
//       )
//     }
//   }