
$(document).ready(function () {
  $('.slider').slick({
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: true,
  });
  $(".header").click(function () {
    $(".chat-box").toggleClass("d-none");
  });


  $('.push-padding').click(function () {
    $('.push-padding').removeClass("set-text ");
    $(this).addClass("set-text ");
  });



  $(".t-block").click(function () {
    $(".push-padding").toggleClass("set-text");
  });

  $(".User").click(function () {
    $(".bag-view-account").toggleClass("d-block");
  });

  $(".Bag_header").click(function () {
    $(".list-bag-home").toggleClass("d-block");
  });

  // Show the first tab by default
  $('.tabs-stage .divNone').hide();
  $('.tabs-stage .divNone:first').show();
  $('.tabs-nav li:first').addClass('tab-active');


  // Change tab class and display content
  $('.tabs-nav a').on('click', function (event) {
    event.preventDefault();
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage .divNone').hide();
    $($(this).attr('href')).show();
  });

});

// Code Filter
$(document).ready(function () {
  var $products = $('.products-list'),
    $variants = $('.img-slide'),
    $filters = $("#filters input[type='checkbox']"),
    product_filter = new ProductFilterLevel2($products, $variants, $filters);
  product_filter.init();
});

function ProductFilterLevel2(products, variants, filters) {
  var _this = this;

  this.init = function () {
    this.products = products;
    this.variants = variants;
    this.filters = filters;
    this.bindEvents();
  };

  this.bindEvents = function () {
    this.filters.click(this.filterGridProducts);
    $('#none').click(this.removeAllFilters);
  };

  this.filterGridProducts = function () {
    //hide all
    _this.products.hide();
    var filteredProducts = _this.variants;
    //filter by colour, size, shape etc
    var filterAttributes = $('.filter-attributes');
    // for each attribute check the corresponding attribute filters selected
    filterAttributes.each(function () {
      var selectedFilters = $(this).find('input:checked');
      // if selected filter by the attribute
      if (selectedFilters.length) {
        var selectedFiltersValues = [];
        selectedFilters.each(function () {
          var currentFilter = $(this);
          selectedFiltersValues.push("[data-" + currentFilter.attr('name') + "='" + currentFilter.val() + "']");
        });
        filteredProducts = filteredProducts.filter(selectedFiltersValues.join(','));
      }
    });
    filteredProducts.parent().show();
  };

  this.removeAllFilters = function () {
    _this.filters.prop('checked', false);
    _this.products.show();
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    991: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    330: {
      slidesPerView: 2,
      spaceBetween: 10
    },
  },
});

// Code ChatBox
//Content Loaded
window.addEventListener("DOMContentLoaded", (e) => {
  var header = document.querySelector(".header");
  var chatRoom = document.querySelector(".headers");
  var typeArea = document.querySelector(".headers");
  var btnAdd = document.querySelector(".button-add");
  var others = document.querySelector(".others");
  var emojiBox = document.querySelector(".emoji-button .emoji-box");
  var emojiButton = document.querySelector(".others .emoji-button");
  var emojis = document.querySelectorAll(".emoji-box span");
  var inputText = document.querySelector("#inputText");
  var btnSend = document.querySelector(".button-send");
  var messageArea = document.querySelector(".message.message-right");
  //Header onclick event
  header.addEventListener("click", (e) => {
    if (typeArea.classList.contains("d-block")) {
    } else {
      header.style.borderRadius = "35px";
    }
    typeArea.classList.toggle("d-none");
    chatRoom.classList.toggle("d-none");
  });
  //Button Add onclick event
  btnAdd.addEventListener("click", (e) => {
    others.classList.add("others-show");
  });
  //Emoji onclick event
  emojiButton.addEventListener("click", (e) => {
    emojiBox.classList.add("emoji-show");
  });
  //Button Send onclick event
  btnSend.addEventListener("click", (e) => {
    var mess = inputText.value;
    var bubble = document.createElement('div');
    bubble.className += " bubble bubble-dark";
    bubble.textContent = mess;
    messageArea.appendChild(bubble);
    inputText.value = "";
  });
  for (var emoji of emojis) {
    emoji.addEventListener("click", (e) => {
      e.stopPropagation();
      emojiBox.classList.remove("emoji-show");
      others.classList.remove("others-show");
      inputText.value += e.target.textContent;
    });
  }
});


(function () {
  "use strict";
  var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
    return function (arg) {
      if (this.length > 1) {
        this.each(function () {
          var $this = $(this);

          if (!$this.data(ident)) {
            $this.data(ident, func($this, arg));
          }
        });

        return this;
      } else if (this.length === 1) {
        if (!this.data(ident)) {
          this.data(ident, func(this, arg));
        }

        return this.data(ident);
      }
    };
  });
})();


(function () {
  "use strict";
  function Guantity($root) {
    const element = $root;
    const quantity = $root.first("data-quantity");
    const quantity_target = $root.find("[data-quantity-target]");
    const quantity_minus = $root.find("[data-quantity-minus]");
    const quantity_plus = $root.find("[data-quantity-plus]");
    var quantity_ = quantity_target.val();
    $(quantity_minus).click(function () {
      quantity_target.val(--quantity_);
    });
    $(quantity_plus).click(function () {
      quantity_target.val(++quantity_);
    });
  }
  $.fn.Guantity = jQueryPlugin("Guantity", Guantity);
  $("[data-quantity]").Guantity();
})();

function toggleMenu() {
  let menu = document.querySelector("#navbar-mobile");
  let body = document.querySelector("body");
  menu.classList.toggle("d-none");
  body.classList.toggle("overflow-hidden");
}


function getLinkOb() {
  var link_url = document.getElementById("myLink").value;
  if (link_url == "Earring" || link_url == "Earrings" || link_url == "Earing" || link_url == "earings" || link_url == "earrings") {
    window.open("Products/Product-Earring.html");
  }
  if (link_url == "Necklace" || link_url == "Necklaces" || link_url == "necklace" || link_url == "necklaces") {
    window.open("Products/Product-Necklace.html");
  }
  if (link_url == "Bracelets" || link_url == "Bracelet" || link_url == "bracelet" || link_url == "bracelets") {
    window.open("Products/Product-Bracelet.html");
  }
  if (link_url == "All" || link_url == "All" || link_url == "all") {
    window.open("Products/Product-All.html");
  }
  if (link_url == "Arrival" || link_url == "arrivals" || link_url == "Arrival") {
    window.open("Products/Product-Arrival.html");
  }
  if (link_url == "BestSaller" || link_url == "best" || link_url == "bestsaller") {
    window.open("Products/Product-BestSaller.html");
  }
  if (link_url == "Ring" || link_url == "ring" || link_url == "Rings" || link_url == "rings") {
    window.open("Products/Product-Rings.html");
  }
  if (link_url == "Engagementrings" || link_url == "EngagementRings" || link_url == "engagementRings") {
    window.open("Products/Product-Engagement-Rings.html");
  }
}

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/







(function ($) {
  "use strict";

  $.fn.numericFlexboxSorting = function (options) {
    const settings = $.extend({
      elToSort: ".boxes .products-list "
    }, options);

    const $select = this;
    const ascOrder = (a, b) => a - b;
    const descOrder = (a, b) => b - a;

    $select.on("change", () => {
      const selectedOption = $select.find("option:selected").attr("data-sort");
      sortColumns(settings.elToSort, selectedOption);
    });

    function sortColumns(el, opt) {
      const attr = "data-" + opt.split(":")[0];
      const sortMethod = (opt.includes("asc")) ? ascOrder : descOrder;
      const sign = (opt.includes("asc")) ? "" : "-";

      const sortArray = $(el).map((i, el) => $(el).attr(attr)).sort(sortMethod);

      for (let i = 0; i < sortArray.length; i++) {
        $(el).filter(`[${attr}="${sortArray[i]}"]`).css("order", sign + sortArray[i]);
      }
    }

    return $select;
  };
})(jQuery);

// call the plugin
$(".b-select").numericFlexboxSorting();



function getLinkObCap2() {
  var link_url = document.getElementById("myLink").value;
  if (link_url == "Earring" || link_url == "Earrings" || link_url == "Earing" || link_url == "earings" || link_url == "earrings") {
    window.open("Product-Earring.html");
  }
  if (link_url == "Necklace" || link_url == "Necklaces" || link_url == "necklace" || link_url == "necklaces") {
    window.open("Product-Necklace.html");
  }
  if (link_url == "Bracelets" || link_url == "Bracelet" || link_url == "bracelet" || link_url == "bracelets") {
    window.open("Product-Bracelet.html");
  }
  if (link_url == "All" || link_url == "All" || link_url == "all") {
    window.open("Product-All.html");
  }
  if (link_url == "Arrival" || link_url == "arrivals" || link_url == "Arrival") {
    window.open("Product-Arrival.html");
  }
  if (link_url == "BestSaller" || link_url == "best" || link_url == "bestsaller") {
    window.open("Product-BestSaller.html");
  }
  if (link_url == "Ring" || link_url == "ring" || link_url == "Rings" || link_url == "rings") {
    window.open("Product-Rings.html");
  }
  if (link_url == "Engagementrings" || link_url == "EngagementRings" || link_url == "engagementRings") {
    window.open("Product-Engagement-Rings.html");
  }
}
function getLinkObCap3() {
  var link_url = document.getElementById("myLink").value;
  if (link_url == "Earring" || link_url == "Earrings" || link_url == "Earing" || link_url == "earings" || link_url == "earrings") {
    window.open("../Products/Product-Earring.html");
  }
  if (link_url == "Necklace" || link_url == "Necklaces" || link_url == "necklace" || link_url == "necklaces") {
    window.open("../Products/Product-Necklace.html");
  }
  if (link_url == "Bracelets" || link_url == "Bracelet" || link_url == "bracelet" || link_url == "bracelets") {
    window.open("../Products/Product-Bracelet.html");
  }
  if (link_url == "All" || link_url == "All" || link_url == "all") {
    window.open("../Products/Product-All.html");
  }
  if (link_url == "Arrival" || link_url == "arrivals" || link_url == "Arrival") {
    window.open("../Products/Product-Arrival.html");
  }
  if (link_url == "BestSaller" || link_url == "best" || link_url == "bestsaller") {
    window.open("../Products/Product-BestSaller.html");
  }
  if (link_url == "Ring" || link_url == "ring" || link_url == "Rings" || link_url == "rings") {
    window.open("../Products/Product-Rings.html");
  }
  if (link_url == "Engagementrings" || link_url == "EngagementRings" || link_url == "engagementRings") {
    window.open("../Products/Product-Engagement-Rings.html");
  }
}