  FlowRouter.route('/', {
    name: 'showdata',
    action(params) {
      BlazeLayout.render('showdata', {params: params})
    }
  })

