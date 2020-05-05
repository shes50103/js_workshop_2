// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'jquery'
import 'popper.js'

// select2
import 'select2'
import 'select2/dist/css/select2.css'

// sweetalert
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import $ from 'jquery'

window.jQuery = $
window.$ = $

$(document).on("turbolinks:load", function() {
  $('.js-currency-select').select2();
  $(".js-tag-select").select2({
    tags: true,
    placeholder: 'Select an option',
    tokenSeparators: [',', ' ']
  });
  $(".alert").on('click', function(e) {
    e.preventDefault();
    Swal.fire(
      {
        icon: 'warning',
        title:'Are you sure?',
        text: 'You will create a product!?',
        showCancelButton: true,
        cancelButtonColor: '#3085d6'
      }
    )
  });
});
