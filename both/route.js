  FlowRouter.route('/', {
    name: 'simplified',
    action(params) {
      BlazeLayout.render('simplified', {params: params})
    }
  })

