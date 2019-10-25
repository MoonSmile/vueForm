export default {
    functional: true,
    props: {
      text: String,
      renderText: Function
    },
    render: (h, ctx) => {
      return ctx.props.renderText(h, ctx.props.text)
    }
  }
