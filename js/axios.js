  //
  // taskForm.addEventListener('submit', function (e) {
  //   e.preventDefault()
  //   axios.post('/api/tasks', { name: taskInput.value })
  //     .then(function (responce) {
  //       let li = document.createElement('LI')
  //       li.innerText = responce.data.name
  //       list.appendChild(li)
  //       taskInput.value = ''
  //     })
  // })
// <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js" integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

  axios.get('/all')
    .then(function (responce) {
      responce.data.forEach(function(item) {
        let li = document.createElement('LI')
        li.innerText = item.name
        list.appendChild(li)
      })
    })
    console.log(seatsArr, 'rrr');
  axios.post('/seats')
    .then(function (responce) {
      responce.data.forEach(function(item) {
        let li = document.createElement('LI')
        li.innerText = item.name
        list.appendChild(li)
      })
    })
