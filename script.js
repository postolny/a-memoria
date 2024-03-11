$(document).ready(function() {
  var myArray1, myArray2, myArray3, myArray4;

  // Загрузка данных JSON
  $.getJSON('json/vari.json').done(function(data) {
    myArray1 = data;
    $.getJSON('json/etichetta.json').done(function(data) {
      myArray2 = data;
      $.getJSON('json/verbi.json').done(function(data) {
        myArray3 = data;
        $.getJSON('json/musica.json').done(function(data) {
          myArray4 = data;

          var direction = "fr"; // Начальное направление перевода
          var currentArray = myArray1; // Установить инициализированный currentArray в значение myArray1
          var selectedDictuonary = "Разные";
          $("#dictionary").text("Выбран словарь: " + selectedDictuonary);

          function toggleTranslations() {
            // Функция для переключения направления перевода
            function swapFrTr(array) {
              array.forEach(function(item) {
                var temp = item.fr;
                item.fr = item.tr;
                item.tr = temp;
              });
            }

            swapFrTr(myArray1);
            swapFrTr(myArray2);
            swapFrTr(myArray3);
            swapFrTr(myArray4);

            direction = (direction === "fr") ? "tr" : "fr"; // Переключение направления перевода

            // Вывод результата на странице
            var selectedTranslation = (direction === "fr") ? "Italiano" : "Русский";
            console.log("Выбрано направление перевода: " + selectedTranslation);
            $("#direction").text("Выбрано направление перевода: " + selectedTranslation);

            // Обновление текста в #frase в соответствии с выбранным массивом
            var rand = Math.floor(Math.random() * currentArray.length);
            $("#frase").html(currentArray[rand].fr);
            $("#traduzione").html(currentArray[rand].tr);
          }

          // Вызов функции при загрузке страницы
          toggleTranslations();

          // Вызов функции при нажатии кнопки
          $("#Translations").click(function() {
            toggleTranslations();
            var rand = Math.floor(Math.random() * currentArray.length);
            $("#frase").html(currentArray[rand].fr);
            $("#traduzione").html(currentArray[rand].tr);
            // Обновление источника данных автозаполнения при изменении массива
            $("#search-tr").autocomplete("option", "source", currentArray.map(function(item) {
              return item.fr;
            }));
            $("#search-tr").val("");
            $("#search-res").html("");
            $('#traduzione').hide();
          });

          var rand = Math.floor(Math.random() * currentArray.length);
          $("#frase").html(currentArray[rand].fr);
          $("#traduzione").html(currentArray[rand].tr);
          $('#traduzione').hide();
          $('#traduzione-btn').click(function() {
            $('#traduzione').toggle(200);
          });

          $(document).keyup(function(e) {
            if (e.keyCode == 13) {
              $('#traduzione').toggle(200);
            }
          });

          $("#seguente-btn").click(function() {
            var newRand = rand;
            while (rand == newRand) {
              newRand = Math.floor(Math.random() * currentArray.length);
            }
            rand = newRand;
            $("#frase").html(currentArray[rand].fr);
            $("#traduzione").html(currentArray[rand].tr);
            $('#traduzione').hide();
            $("#search-tr").val("");
            $("#search-res").html("");
          });

          $(document).keyup(function(e) {
            if (e.keyCode == 39) {
              var newRand = rand;
              while (rand == newRand) {
                newRand = Math.floor(Math.random() * currentArray.length);
              }
              rand = newRand;
              $("#frase").html(currentArray[rand].fr);
              $("#traduzione").html(currentArray[rand].tr).hide();
              $("#search-tr").val("");
              $("#search-res").html("");
            }
          });

          $("#button1").click(function() {
            currentArray = myArray1; // Установить currentArray в myArray1 при нажатии button1
            rand = Math.floor(Math.random() * currentArray.length); // Обновить rand на основе нового currentArray
            $("#frase").html(currentArray[rand].fr);
            $("#traduzione").html(currentArray[rand].tr);

            // Обновление источника данных автозаполнения при изменении массива
            $("#search-tr").autocomplete("option", "source", currentArray.map(function(item) {
              return item.fr;
            }));
            $("#search-tr").val("");
            $("#search-res").html("");
            $('#traduzione').hide();
            selectedDictuonary = "Разные";
            $("#dictionary").text("Выбран словарь: " + selectedDictuonary);
          });

          $("#button2").click(function() {
            currentArray = myArray2; // Установить currentArray в myArray2 при нажатии button2
            rand = Math.floor(Math.random() * currentArray.length); // Обновить rand на основе нового currentArray
            $("#frase").html(currentArray[rand].fr);
            $("#traduzione").html(currentArray[rand].tr);

            // Обновление источника данных автозаполнения при изменении массива
            $("#search-tr").autocomplete("option", "source", currentArray.map(function(item) {
              return item.fr;
            }));
            $("#search-tr").val("");
            $("#search-res").html("");
            $('#traduzione').hide();
            selectedDictuonary = "Этикет";
            $("#dictionary").text("Выбран словарь: " + selectedDictuonary);
          });

          $("#button3").click(function() {
            currentArray = myArray3; // Установить currentArray в myArray3 при нажатии button3
            rand = Math.floor(Math.random() * currentArray.length); // Обновить rand на основе нового currentArray
            $("#frase").html(currentArray[rand].fr);
            $("#traduzione").html(currentArray[rand].tr);

            // Обновление источника данных автозаполнения при изменении массива
            $("#search-tr").autocomplete("option", "source", currentArray.map(function(item) {
              return item.fr;
            }));
            $("#search-tr").val("");
            $("#search-res").html("");
            $('#traduzione').hide();
            selectedDictuonary = "Глаголы";
            $("#dictionary").text("Выбран словарь: " + selectedDictuonary);
          });

          $("#button4").click(function() {
            currentArray = myArray4; // Установить currentArray в myArray3 при нажатии button3
            rand = Math.floor(Math.random() * currentArray.length); // Обновить rand на основе нового currentArray
            $("#frase").html(currentArray[rand].fr);
            $("#traduzione").html(currentArray[rand].tr);

            // Обновление источника данных автозаполнения при изменении массива
            $("#search-tr").autocomplete("option", "source", currentArray.map(function(item) {
              return item.fr;
            }));
            $("#search-tr").val("");
            $("#search-res").html("");
            $('#traduzione').hide();
            selectedDictuonary = "Музыка";
            $("#dictionary").text("Выбран словарь: " + selectedDictuonary);
          });

          $("#search-tr").on("keyup", function() {
            var val = $(this).val().toLowerCase().trim();
            var foundItem = currentArray.find(function(item) {
              return item.fr.toLowerCase() === val;
            });
            if (foundItem) {
              $("#search-res").html(foundItem.tr);
            } else {
              $("#search-res").html("");
            }
          });

          // Инициализация автозаполнения при загрузке страницы
          $("#search-tr").autocomplete({
            source: currentArray.map(function(item) {
              return item.fr;
            }),
            select: function(event, ui) {
              var selected = currentArray.find(function(item) {
                return item.fr === ui.item.label;
              });
              $("#search-res").html(selected.tr);
            },
            maxHeight: 200, // Ограничение высоты списка 200px
            scroll: true,
          });
          $('.clear-input').on('click', function() {
            if ($('#search-tr').val().trim() !== "") {
              $("#search-tr").val("");
              $("#search-res").html("");
              $('#traduzione').hide();
            }
          });
        });
      });
    });
  });

  // Dark mode
  // Проверяем, есть ли значение в localStorage для тёмного режима
  var darkMode = getLocalStorage('darkMode');
  // Если значение в куки указывает на тёмный режим, применяем его
  if (darkMode === 'true') {
    // Включаем темный режим
    enableDarkMode();
  }
  // Обработчик события для переключения тёмного режима
  $('.darkmode').on('click', function() {
    if (darkMode === 'true') {
      darkMode = 'false';
      disableDarkMode();
    } else {
      darkMode = 'true';
      enableDarkMode();
    }
    // Устанавливаем значение в localStorage
    setLocalStorage('darkMode', darkMode);
  });

  function enableDarkMode() {
    // Применяем стили для тёмного режима
    $('body').addClass('dark-mode');
    // Меняем иконку
    $('.light').hide();
    $('.dark').show();
  }

  function disableDarkMode() {
    // Проверяем, есть ли класс dark-mode
    if ($('body').hasClass('dark-mode')) {
      // Удаляем стили для тёмного режима
      $('body').removeClass('dark-mode');
    }
    // Меняем иконку
    $('.dark').hide();
    $('.light').show();
  }

  // Функция для получения значения из localStorage
  function getLocalStorage(key) {
    return localStorage.getItem(key);
  }

  // Функция для установки значения в localStorage
  function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  var help = $('#help-icon-container');
  var panel = $('#top-panel');
  var openPanel = $(this).find('.open-panel');
  var closePanel = $(this).find('.close-panel');
  var noScroll = $('html');
  var helpIcon = $('.help-icon');
  var timeout;

  help.click(function() {
    panel.toggleClass('active');
    openPanel.toggle();
    closePanel.toggle();
    noScroll.toggleClass('no-scroll');
    if ($('#top-panel').hasClass('active')) {
      // Создать копию SVG-элемента
      var originalSvg = $(".svg-icon");
      var clonedSvg = originalSvg.clone();

      // Вставить копию вместо оригинала
      originalSvg.replaceWith(clonedSvg);

      // Запустить анимацию
      clonedSvg.find('animate').each(function() {
        $(this).attr('begin', '0s');
      });
    }
  });

  // Попытка сохранить анимацию на тачскрине
  help.on('touchstart', function() {
    helpIcon.addClass('running').removeClass('paused');

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      helpIcon.addClass('paused').removeClass('running');
    }, 500);
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      // Проверяем имеет ли #top-panel класс active
      if ($(panel).hasClass('active')) {
        panel.removeClass('active');
        openPanel.css('display', 'block')
        closePanel.css('display', 'none')
        noScroll.removeClass('no-scroll');
      }
    }
  });

  var currentYear = new Date().getFullYear();
  $('#currentYear').html("&copy; " + currentYear + " ");
});