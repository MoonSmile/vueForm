export default {
    functional: true,
    props: {
      number: Number,
      renderFunc: Function
    },
    render: (h, ctx) => {
      return ctx.props.renderFunc(h, ctx.props.number)
    }
  }
//   原文链接：https://blog.csdn.net/qq_14993375/article/details/85193734