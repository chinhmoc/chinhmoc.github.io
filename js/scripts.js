const main = document.querySelector("main");
const section = document.querySelector("section");
const menuItems = document.querySelectorAll(".menu-tab .menu-item");
const menuItemsMobile = document.querySelectorAll(".menu-mobile .menu-item");

// count section and set width of main
const sectionCount = document.querySelectorAll("section").length;

main.style.width = `${sectionCount * 100}%`;

let curIndex = 0;
let sectionWidth = section.offsetWidth;

let isOpenModal = false;

// on resize
window.addEventListener("resize", () => {
  sectionWidth = section.offsetWidth;
  moveTo(curIndex);
});

const moveTo = (index) => {
  main.style.transform = `translateX(-${sectionWidth * index}px)`;

  //   remove active class from all items
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });

  menuItemsMobile.forEach((item) => {
    item.classList.remove("active");
  });

  // add active class to clicked item
  menuItems[index].classList.add("active");
  menuItemsMobile[index].classList.add("active");

  curIndex = index;
};

const next = () => {
  curIndex++;
  if (curIndex > sectionCount - 1) {
    curIndex = 0;
  }
  moveTo(curIndex);
};

const prev = () => {
  curIndex--;
  if (curIndex < 0) {
    curIndex = sectionCount - 1;
  }
  moveTo(curIndex);
};

// when click on a[href^="#"]
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const id = item.getAttribute("href");

    if (id === "#") {
      return;
    }

    const section = document.querySelector(id);

    if (section === null) {
      return;
    }

    const index = [...section.parentElement.children].indexOf(section);

    moveTo(index);
  });
});

// change section on scroll wheel and wait 200ms before next scroll
// if modal is open, don't change section
let timerWheel = null;

window.addEventListener("wheel", (e) => {
  if (isOpenModal) {
    return;
  }

  if (timerWheel !== null) {
    clearTimeout(timerWheel);
  }

  timerWheel = setTimeout(() => {
    if (e.deltaY > 0) {
      next();
    } else {
      prev();
    }
  }, 200);
});

// change section on swipe and wait 200ms before next swipe
let touchStart = null;
let timerSwipe = null;

window.addEventListener("touchstart", (e) => {
  touchStart = e.touches[0].clientX;
});

window.addEventListener("touchend", (e) => {
  if (isOpenModal) {
    return;
  }

  const touchEnd = e.changedTouches[0].clientX;

  if (timerSwipe !== null) {
    clearTimeout(timerSwipe);
  }

  timerSwipe = setTimeout(() => {
    if (touchStart > touchEnd + 5) {
      next();
    } else if (touchStart < touchEnd - 5) {
      prev();
    }
  }, 200);
});

// menu mobile
const menu = document.querySelector(".menu-mobile");
const hamburger = document.querySelector(".hamburger");
const icon = document.querySelector(".hamburger i");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// when resize, remove active class from menu mobile and hamburger, change icon
window.addEventListener("resize", () => {
  menu.classList.remove("active");
  hamburger.classList.remove("active");

  icon.classList.remove("fa-times");
  icon.classList.add("fa-bars");
});

const portfolioItems = document.querySelectorAll(".portfolio-item");
const modals = document.querySelectorAll(".modal-container");

const closeModal = (id) => {
  document.querySelector(`#${id}`).classList.remove("active");
  isOpenModal = false;
};

// loop through all modals and add close event to close button
modals.forEach((modal) => {
  const closeBtn = modal.querySelector(".close-modal");

  closeBtn.addEventListener("click", () => {
    closeModal(modal.id);
  });
});

portfolioItems.forEach((item) => {
  item.addEventListener("click", () => {
    // remove active class from all modals
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });

    // add active class to clicked modal
    const id = item.id;

    document.querySelector(`#${id}-modal`).classList.add("active");

    isOpenModal = true;
  });
});

// testimonials
const testimonials = document.querySelectorAll(".testimonial-item");
const bullets = document.querySelectorAll(".bullet");

// auto change testimonial
let curTestimonial = 0;
let timerTestimonial = null;

const moveToTestimonial = (index) => {
  // remove active class from all testimonials
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });

  // add active class to clicked testimonial
  testimonials[index].classList.add("active");

  curTestimonial = index;
};

bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    // remove active class from all bullets
    bullets.forEach((item) => {
      item.classList.remove("active");
    });

    // add active class to clicked bullet
    bullet.classList.add("active");

    // move to testimonial
    const index = [...bullet.parentElement.children].indexOf(bullet);
    moveToTestimonial(index);
  });
});

const autoChangeTestimonial = () => {
  curTestimonial++;

  if (curTestimonial > testimonials.length - 1) {
    curTestimonial = 0;
  }

  moveToTestimonial(curTestimonial);

  // remove active class from all bullets
  bullets.forEach((item) => {
    item.classList.remove("active");
  });

  // add active class to clicked bullet
  bullets[curTestimonial].classList.add("active");
};

timerTestimonial = setInterval(autoChangeTestimonial, 2000);

// Contact form
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("#name");
  const email = form.querySelector("#email");
  const message = form.querySelector("#message");

  const errors = [];

  const addError = (input, message) => {
    input.classList.add("error");

    const small = input.parentElement.querySelector("small");
    small.innerText = message;
  };

  const removeError = (input) => {
    input.classList.remove("error");

    const small = input.parentElement.querySelector("small");
    small.innerText = "";
  };

  // validate name
  if (name.value.trim() === "") {
    addError(name, "Name cannot be blank");
    errors.push(name);
  } else {
    removeError(name);
  }

  // validate email
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  if (!validateEmail(email.value.trim())) {
    addError(email, "Email is not valid");
    errors.push(email);
  } else {
    removeError(email);
  }

  // validate message
  if (message.value.trim() === "") {
    addError(message, "Message cannot be blank");
    errors.push(message);
  } else {
    removeError(message);
  }

  if (errors.length > 0) {
    // focus on first error
    errors[0].focus();
    return;
  }

  alert("Your message has been sent");
  form.reset();
});
