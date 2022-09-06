const header = document.getElementById('header')
 const headerClassList = header.classList

 const menu = document.getElementById('menu-bar')
 const menuClassList = menu.classList

 const seta = document.getElementById('seta')
 const setaClassList = seta.classList

 window.addEventListener('scroll', () => {
   if (window.scrollY >= 50) {
     if (!headerClassList.contains('scrollHide')) {
       headerClassList.add('scrollHide')
     }
   } else {
     if (headerClassList.contains('scrollHide')) {
       headerClassList.remove('scrollHide')
     }
   }
 })

 
 window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      if (!menuClassList.contains('scrollHide')) {
        menuClassList.add('scrollHide')
      }
    } else {
      if (menuClassList.contains('scrollHide')) {
        menuClassList.remove('scrollHide')
      }
    }
  })

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      if (!setaClassList.contains('scrollHide')) {
        setaClassList.add('scrollHide')
      }
    } else {
      if (setaClassList.contains('scrollHide')) {
        setaClassList.remove('scrollHide')
      }
    }
  })

