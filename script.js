'use strict';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const message = function (message) {
  document.getElementById('message-email').textContent = message;
};
*/
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const viewMore = document.querySelectorAll('.job-box');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('btn-email').addEventListener('click', function () {
  const inputEmail = document.querySelector('.input-email').value;
  if (!inputEmail) {
    swal('Email không được bỏ trống', 'Vui lòng điền email vào ', 'warning');
  } else if (!regex.test(inputEmail)) {
    swal(
      'Địa chỉ Email không hợp lệ ',
      'Hãy nhập đúng định dạng email ',
      'error'
    );
  } else {
    swal('Xác nhận email thành công', ' ', 'success');
    document.querySelector('.about-1').classList.add('hidden');
    document.querySelector('.about-2').classList.remove('hidden');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('.close-info').addEventListener('click', function () {
  document.querySelector('.about-1').classList.toggle('hidden');
  document.querySelector('.about-2').classList.toggle('hidden');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (let x = 0; x < viewMore.length; x++) {
  // ẩn nút
  const checkout = function () {
    viewMore[x].querySelector('.btn-view').classList.add('hidden');
  };
  viewMore[x].addEventListener('mouseout', checkout);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < viewMore.length; i++) {
  // hiện nút
  const checkover = function () {
    viewMore[i].querySelector('.btn-view').classList.remove('hidden');
  };
  viewMore[i].addEventListener('mouseover', checkover);
  // click nút đang hiện
  viewMore[i].querySelector('.btn-view').addEventListener('click', function () {
    // hiện nút cố định khi hiện bảng thông tin
    viewMore[i].addEventListener('mouseout', function () {
      viewMore[i].querySelector('.btn-view').classList.toggle('hidden');
    });
    //hiện thông tin
    viewMore[i].querySelector('.show-view').classList.toggle('hidden');
    // đổi view more thành view less
    if (viewMore[i].querySelector('.btn-view').textContent != '▼ View more') {
      viewMore[i].querySelector('.btn-view').textContent = '▼ View more';
    } else {
      viewMore[i].querySelector('.btn-view').textContent = '▲ View less';
    }
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const project = document.querySelectorAll('.project-box');
// chuyển hướng sang trang mới

function digital() {
  window.location = 'digital-cv.html';
}

/*
// chuyển hướng tab mới
function digital() {
  window.open('digital-cv.html');
}
*/

// click vô 1 chỗ bất kỳ trong phần project
for (let a = 0; a < project.length; a++) {
  project[a].addEventListener('click', digital);
}
