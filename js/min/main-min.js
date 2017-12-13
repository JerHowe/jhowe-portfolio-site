$('.portfolio-modal').on('show.bs.modal', function (event) {
  window.history.pushState('forward', null, '#modal')
})

$('.portfolio-modal').on('hide.bs.modal', function (event) {
  if(location.hash=='#modal')window.history.back()
})

$(window).on('popstate', function (event) {
  if(event.state!==null)$('.modal').modal('hide')
})


