"use strict";

// Header navbar Animation
var headerBtn = document.querySelector('.header__btn');
var headerNavMenu = document.querySelector('.header__navmenu');

var headerBtnClick = function headerBtnClick(e) {
  headerBtn.classList.toggle('active');
  headerNavMenu.classList.toggle('active');
  return;
};

headerBtn.onclick = headerBtnClick; //  Intro block image animation

var introShow = document.getElementById('introShow');
var introClose = document.getElementById('introClose');
var introView = document.querySelector('.intro__view');

introShow.onclick = function () {
  return introView.classList.add('active');
};

introClose.onclick = function () {
  return introView.classList.remove('active');
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImhlYWRlckJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlck5hdk1lbnUiLCJoZWFkZXJCdG5DbGljayIsImUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJvbmNsaWNrIiwiaW50cm9TaG93IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnRyb0Nsb3NlIiwiaW50cm9WaWV3IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBTUEsU0FBUyxHQUFzQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQXJDO0FBQ0EsSUFBTUMsYUFBYSxHQUFtQkYsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUF0Qzs7QUFHQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBYztBQUNqQ0wsRUFBQUEsU0FBUyxDQUFDTSxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixRQUEzQjtBQUNBSixFQUFBQSxhQUFhLENBQUNHLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLFFBQS9CO0FBQ0E7QUFDSCxDQUpEOztBQUtBUCxTQUFTLENBQUNRLE9BQVYsR0FBb0JKLGNBQXBCLEMsQ0FFQTs7QUFFQSxJQUFNSyxTQUFTLEdBQWVSLFFBQVEsQ0FBQ1MsY0FBVCxDQUF3QixXQUF4QixDQUE5QjtBQUNBLElBQU1DLFVBQVUsR0FBZVYsUUFBUSxDQUFDUyxjQUFULENBQXdCLFlBQXhCLENBQS9CO0FBQ0EsSUFBTUUsU0FBUyxHQUFlWCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBOUI7O0FBRUFPLFNBQVMsQ0FBQ0QsT0FBVixHQUFvQixZQUFBO0FBQUksU0FBQUksU0FBUyxDQUFDTixTQUFWLENBQW9CTyxHQUFwQixDQUF3QixRQUF4QixDQUFBO0FBQWlDLENBQXpEOztBQUNBRixVQUFVLENBQUNILE9BQVgsR0FBcUIsWUFBQTtBQUFLLFNBQUFJLFNBQVMsQ0FBQ04sU0FBVixDQUFvQlEsTUFBcEIsQ0FBMkIsUUFBM0IsQ0FBQTtBQUFvQyxDQUE5RCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlYWRlciBuYXZiYXIgQW5pbWF0aW9uXHJcbmNvbnN0IGhlYWRlckJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idG4nKTtcclxuY29uc3QgaGVhZGVyTmF2TWVudTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZtZW51Jyk7XHJcblxyXG5cclxuY29uc3QgaGVhZGVyQnRuQ2xpY2sgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgaGVhZGVyQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICBoZWFkZXJOYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICByZXR1cm5cclxufVxyXG5oZWFkZXJCdG4ub25jbGljayA9IGhlYWRlckJ0bkNsaWNrXHJcblxyXG4vLyAgSW50cm8gYmxvY2sgaW1hZ2UgYW5pbWF0aW9uXHJcblxyXG5jb25zdCBpbnRyb1Nob3c6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW50cm9TaG93Jyk7XHJcbmNvbnN0IGludHJvQ2xvc2U6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW50cm9DbG9zZScpO1xyXG5jb25zdCBpbnRyb1ZpZXc6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50cm9fX3ZpZXcnKTtcclxuXHJcbmludHJvU2hvdy5vbmNsaWNrID0gKCk9PmludHJvVmlldy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5pbnRyb0Nsb3NlLm9uY2xpY2sgPSAoKT0+IGludHJvVmlldy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSJdfQ==
