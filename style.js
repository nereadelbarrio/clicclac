(function (blink) {
	'use strict';

	var clicclacdemoStyle = function () {
		blink.theme.styles.poptropica.apply(this, arguments);
	},
	page = blink.currentPage;

	clicclacdemoStyle.prototype = {
		parent: blink.theme.styles.poptropica.prototype,
		bodyClassName: 'content_type_clase_clicclacdemo',
		ckEditorStyles: {
			name: 'clicclacdemo',
			styles: [

				{ name: 'Título 3', element: 'h4', attributes: { 'class': 'bck-title bck-title3'} },
				{ name: 'Título 4', element: 'h4', attributes: { 'class': 'bck-title bck-title4'} },
				{ name: 'Título 5', element: 'h4', attributes: { 'class': 'bck-title bck-title5'} },
				{ name: 'Título 6', element: 'h4', attributes: { 'class': 'bck-title bck-title6'} },
				{ name: 'Título 7', element: 'h4', attributes: { 'class': 'bck-title bck-title7'} },
				{ name: 'Título 8', element: 'h4', attributes: { 'class': 'bck-title bck-title8'} },
				{ name: 'Título 9', element: 'h4', attributes: { 'class': 'bck-title bck-title9'} },
				{ name: 'Título 10', element: 'h4', attributes: { 'class': 'bck-title bck-title10'} },
				{ name: 'Título 11', element: 'h4', attributes: { 'class': 'bck-title bck-title11'} },
				{ name: 'Título 12', element: 'h4', attributes: { 'class': 'bck-title bck-title12'} },

				{ name: 'Énfasis Workbook Subrayado Amarillo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-1'} },
				{ name: 'Énfasis Amarillo con fondo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-2'} },
				{ name: 'Énfasis Fondo Amarillo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-3'} },
				{ name: 'Énfasis Amarillo con fondo Verde', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-4'} },
				{ name: 'Énfasis Rodear Amarillo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-5'} },
				{ name: 'Énfasis Rojo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-6'} },
				{ name: 'Énfasis Morado', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-7'} },
				{ name: 'Énfasis Verde', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-8'} },
				{ name: 'Énfasis Aguamarina', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-9'} },
				{ name: 'Énfasis Azul', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-10'} },
				{ name: 'Énfasis Rojo con fondo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-11'} },
				{ name: 'Énfasis Azul con fondo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-12'} },
				{ name: 'Énfasis Aguamarina con fondo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-13'} },
				{ name: 'Énfasis Subrayado Amarillo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-14'} },
				{ name: 'Énfasis Cuaderno Actividades', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-15'} },
				{ name: 'Énfasis Ejemplo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-16'} },
				{ name: 'Énfasis Número Audio', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-17'} },

				{ name: 'Lista ordenada 5', element: 'ol', attributes: { 'class': 'bck-ol bck-ol5' } },
				{ name: 'Lista ordenada 6', element: 'ol', attributes: { 'class': 'bck-ol bck-ol6' } },
				{ name: 'Lista ordenada 7', element: 'ol', attributes: { 'class': 'bck-ol bck-ol7' } },
				{ name: 'Lista ordenada 8', element: 'ol', attributes: { 'class': 'bck-ol bck-ol8' } },
				{ name: 'Lista ordenada 9', element: 'ol', attributes: { 'class': 'bck-ol bck-ol9' } },
				{ name: 'Lista ordenada 10', element: 'ol', attributes: { 'class': 'bck-ol bck-ol10' } },

				{ name: 'Lista desordenada 1', element: 'ul', attributes: { 'class': 'bck-ul bck-ul1' } },
				{ name: 'Lista desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul bck-ul2' } },
				{ name: 'Lista desordenada 3', element: 'ul', attributes: { 'class': 'bck-ul bck-ul3' } },
				{ name: 'Lista desordenada 4', element: 'ul', attributes: { 'class': 'bck-ul bck-ul4' } },
				{ name: 'Lista desordenada 5', element: 'ul', attributes: { 'class': 'bck-ul bck-ul5' } },
				{ name: 'Lista desordenada 6', element: 'ul', attributes: { 'class': 'bck-ul bck-ul6' } },
				{ name: 'Lista desordenada 7', element: 'ul', attributes: { 'class': 'bck-ul bck-ul7' } },
				{ name: 'Lista desordenada 8', element: 'ul', attributes: { 'class': 'bck-ul bck-ul8' } },
				{ name: 'Lista desordenada 9', element: 'ul', attributes: { 'class': 'bck-ul bck-ul9' } },
				{ name: 'Lista desordenada 10', element: 'ul', attributes: { 'class': 'bck-ul bck-ul10' } },

				{ name: 'Tabla 1', element: 'table', attributes: { 'class': 'table-1' } },
				{ name: 'Tabla 2', element: 'table', attributes: { 'class': 'table-2' } },
				{ name: 'Tabla 3', element: 'table', attributes: { 'class': 'table-3' } },
				{ name: 'Tabla 4', element: 'table', attributes: { 'class': 'table-4' } },

				{ name: 'Celda 1', element: 'td', attributes: { 'class': 'bck-td-1' } },
				{ name: 'Celda 2', element: 'td', attributes: { 'class': 'bck-td-2' } },
				{ name: 'Celda 3', element: 'td', attributes: { 'class': 'bck-td-3' } },
				{ name: 'Celda 4', element: 'td', attributes: { 'class': 'bck-td-4' } },
				{ name: 'Celda 5', element: 'td', attributes: { 'class': 'bck-td-5' } },
				{ name: 'Celda 6', element: 'td', attributes: { 'class': 'bck-td-6' } },
				{ name: 'Celda 7', element: 'td', attributes: { 'class': 'bck-td-7' } },
				{ name: 'Celda 8', element: 'td', attributes: { 'class': 'bck-td-8' } },

				{ name: 'Icono Escucha', element: 'span', attributes: { 'class': 'icon icon-escucha' } },
				{ name: 'Icono Habla', element: 'span', attributes: { 'class': 'icon icon-habla' } },
				{ name: 'Icono Repite', element: 'span', attributes: { 'class': 'icon icon-repite' } },
				{ name: 'Icono Escribe', element: 'span', attributes: { 'class': 'icon icon-escribe' } },
				{ name: 'Icono Dibuja', element: 'span', attributes: { 'class': 'icon icon-dibuja' } },
				{ name: 'Icono Recorta', element: 'span', attributes: { 'class': 'icon icon-recorta' } },
				{ name: 'Icono Mira', element: 'span', attributes: { 'class': 'icon icon-mira' } },
				{ name: 'Icono Relaciona', element: 'span', attributes: { 'class': 'icon icon-relaciona' } },
				{ name: 'Icono Juega', element: 'span', attributes: { 'class': 'icon icon-juega' } },
				{ name: 'Icono Representa', element: 'span', attributes: { 'class': 'icon icon-representa' } },
				{ name: 'Icono Canta', element: 'span', attributes: { 'class': 'icon icon-canta' } },
				{ name: 'Icono Señala', element: 'span', attributes: { 'class': 'icon icon-senala' } },
				{ name: 'Icono Lee', element: 'span', attributes: { 'class': 'icon icon-lee' } },
				{ name: 'Icono Habla con tus compañeros', element: 'span', attributes: { 'class': 'icon icon-hablacompaneros' } },

				{ name: 'Caja 4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box4' } },
				{ name: 'Caja 5', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box5' } },
				{ name: 'Caja 6', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box6' } },
				{ name: 'Caja 7', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box7' } },
				{ name: 'Caja 8', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box8' } },
				{ name: 'Caja 9', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box9' } },
				{ name: 'Caja 10', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box10' } },
				{ name: 'Caja 11', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box11' } },
				{ name: 'Caja 12', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box12' } },
				{ name: 'Caja 13', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box13' } },
				{ name: 'Caja 14', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box14' } },
				{ name: 'Caja 15', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box15' } },
				{ name: 'Caja 16', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box16' } },
				{ name: 'Caja 17', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box17' } },
				{ name: 'Caja 18', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box18' } },
				{ name: 'Caja 19', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box19' } },
				{ name: 'Caja 20', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box20' } },
				{ name: 'Caja 21', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box21' } },
				{ name: 'Caja 22', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box22' } },
				{ name: 'Caja 23', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box23' } },
				{ name: 'Caja 24', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box24' } },
				{ name: 'Caja 25', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box25' } },
				{ name: 'Caja 26', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box26' } }
			],
			stylesToRemove: ['Icono Draw', 'Icono Write', 'Icono Speaking', 'Icono Reading', 'Icono Star']
		},

		init: function (scope) {
			var that = scope || this;
			that.parent.init.call(this.parent, this);
			that.getActualUnitActivities();
            blink.events.on("course_loaded", function(){
				that.formatCarouselindicators();
				that.recordingCSS();
				that.disableDownload();
			});
			that.addSlideNavigators();
		},

		removeFinalSlide: function (scope) {
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			var that = scope || this;
			this.parent.removeFinalSlide.call(that, true);
		},

        /**
		 * @summary Gets the activity type subunits of the actual unit.
		 * @return {Object} Object of the actual unit filtering the not activity type subunits
		 */
		getActualUnitActivities: function () {
			var curso = blink.getCourse(idcurso),
				that = this,
				units,
				unitSubunits,
				actualActivity,
				unitActivities = [];

			curso.done(function () {
				units = curso.responseJSON.units;

				$.each(units, function () {
					if (this.id && this.id == blink.courseInfo.IDUnit) {
						unitSubunits = this.subunits.concat(this.resources);
					}
				});

				actualActivity = _.find(unitSubunits, function(subunit) {
					return subunit.id == idclase;
				});

				if (typeof actualActivity !== "undefined" && actualActivity.level == '6') {
					unitActivities.push(actualActivity);
				} else {
					unitActivities = _.filter(unitSubunits, function(subunit) {
						return subunit.type == 'actividad' && subunit.level !== '6';
					});
				}

                that.subunits = unitActivities;

			}).done(function(){
				blink.events.trigger('course_loaded');
			});
		},

		/**
		 * @summary Getting active slide position in relation with the total of the
		 *          unit slides.
		 * @param {Array} $subunits Array of activity type objects
		 * @return {int} Slide position
		 */
		getActualSlideNumber: function (subunits) {
			var actualSlideIndex = $('.swipeview-active').attr('data-page-index'),
				actualSlide = 1;

			for (var i in subunits) {
				if (subunits[i].id && parseInt(subunits[i].id) != idclase) {
					actualSlide += blink.activity.getActivityPages(subunits[i]);
				} else {
					actualSlide += parseInt(actualSlideIndex);
					break;
				}
			}

			return actualSlide;
		},

        formatCarouselindicators: function (scope, classNavbar) {
			var that = scope || this,
				navbar = ((typeof classNavbar !== "undefined" && !classNavbar)?classNavbar:'clicclacdemo-navbar'),
				$navbarBottom = $('.navbar-bottom'),
				firstSlide = eval('t0_slide');
			if(blink.courseInfo && blink.courseInfo.courseDateCreated) var courseYearCreated = new Date(blink.courseInfo.courseDateCreated).getFullYear();
			var yearCopy = courseYearCreated !== undefined ? courseYearCreated : 2019;
			$navbarBottom
				.attr('class', navbar)
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before('<span class="copyright">&copy;' +  yearCopy + '</span>')
					.wrap('<div id="top-navigator"/>')
					.remove()
					.end();

			$('#volverAlIndice').click(function() {
				return showCursoCommit();
			});

			var no_concatenadas = blink.activity.getActivityLength();

			var subunits = that.subunits,
				totalSlides = 0,
				subunit_index,
				subunit_pags;

			// Different behaviour depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (subunits.length !== 0) {
				for (var i in subunits) {
					if (subunits[i].pags) {
						var subunitSlides = blink.activity.getActivityPages(subunits[i]);
						totalSlides += subunitSlides;
					}
					if (subunits[i].id && subunits[i].id == idclase) {
						subunit_index = i;
						subunit_pags = blink.activity.getActivityPages(subunits[i]);
					}
				}

				that.totalSlides = totalSlides;
				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter" data-subunit-index="' + subunit_index +
						'" data-subunit-pags="' + subunit_pags + '">' +
						that.getActualSlideNumber(subunits) + ' / ' + totalSlides +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html(that.getActualSlideNumber(subunits) +
						' / ' + totalSlides);
				});
			} else {
			$('#top-navigator').append('<span class="left slider-navigator">' +
					'<span class="fa fa-chevron-left"></span>' +
				'</span>' +
				'<span class="slide-counter">' + (window.activeSlide + 1) +
					' / ' + window.secuencia.length +
				'</span>' +
				'<span class="right slider-navigator">' +
					'<span class="fa fa-chevron-right"></span>' +
				'</span>');

			blink.events.on('section:shown', function() {
				$('.slide-counter').html((window.activeSlide + 1) +
					' / ' + window.secuencia.length);
					$('.bck-dropdown-2').hideBlink();
				});
			}

			blink.events.on('section:shown', function() {
				var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) +
					'_slide').title;
				$navbarBottom.find('.sectionTitle').text(sectionTitle);
			});

			if (firstSlide.seccion) {
				$navbarBottom.addClass('first-is-section');
			}

			blink.events.trigger(true, 'style:endFormatCarousel');
        },

		addSlideNavigators: function () {
			var that = this;

			blink.events.on("course_loaded", function(){
				var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index')),
					level_six = that.subunits.length == 1 && that.subunits[0].level == 6;

				$('.slider-control').off('click');
				// Navigation change depending on whether the slides are accessed from
				// a book or from a homework link or similar
				if (that.subunits.length !== 0 && !level_six) {
					// Slider controls must allow navigation among all the activity subunits
					// in the current unit.
					var idgrupo = window.idgrupo,
						idalumno = window.idalumno,
						slideNavParams = '';

					if (idgrupo) slideNavParams += '&idgrupo=' + idgrupo;
					if (idalumno) slideNavParams += '&idalumno=' + idalumno;

					$('.left.slider-control, .left.slider-navigator').click(function () {

						if (!$(this).hasClass('disabled')) {
							if(activeSlide == 0) {
								// BK-19486 audio stop when slider changes.
								if (blink.isApp) {
									blink.rest.closeAudio();
								}
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index - 1].id + '&modo='+ modoVisualizacion + '&numSec=' +
									that.subunits[subunit_index - 1].numSlides + slideNavParams, false, undefined);
							} else {
								blink.activity.showPrevSection();
							}
						}
					});

					$('.right.slider-control, .right.slider-navigator').click(function () {
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == parseInt(that.subunits[subunit_index].pags) - 1) {
								// BK-19486 audio stop when slider changes.
								if (blink.isApp) {
									blink.rest.closeAudio();
								}
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index + 1].id + '&modo='+ modoVisualizacion +
									((typeof window.esPopup !== "undefined" && window.esPopup)?"&popup=1":"")  + slideNavParams,
									false, undefined);
							} else {
								blink.activity.showNextSection();
							}
						}
					});

					document.addEventListener('swipe:first:previousActivity', function(e) {
						blink.activity.previousSlide(that.subunits, subunit_index);
					}, false);
					document.addEventListener('swipe:last:nextActivity', function(e) {
						blink.activity.nextSlide(that.subunits, subunit_index);
					}, false);
				} else {
					$('.left.slider-control, .left.slider-navigator').click(function () {
						blink.activity.showPrevSection();
					});
					$('.right.slider-control, .right.slider-navigator').click(function () {
						blink.activity.showNextSection();
					});
				}

				that.enableSliders();

				$(document).ready(function() {
					blink.events.on('showSlide:after', function() {
						that.enableSliders();
					});
				});
			});
		},

		/**
		 * @summary Enables all slider controls and disables when appropiate
		 */
		enableSliders: function () {
			// Removes disabled class to all navigation buttons and applies
			// just if its first or last slide of all activities
			$('.slider-control, .slider-navigator').removeClass('disabled');
			var that = blink.activity.currentStyle,
				subunit_index = parseInt($('.slide-counter').attr('data-subunit-index')),
				level_six = this.subunits.length == 1 && this.subunits[0].level == 6;
			// Navigation change depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (this.subunits.length !== 0 && modoVisualizacionLabel != "standalone") {
				if (this.getActualSlideNumber(this.subunits) == 1) {
					$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
				if (this.getActualSlideNumber(this.subunits) == this.totalSlides && !level_six) {
					$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			} else {
				if (window.activeSlide == 0) {
					$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
				if(that.subunits[subunit_index] && window.activeSlide == parseInt(that.subunits[subunit_index].pags) - 1 && !level_six){
					$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			}
		},

		disableDownload: function(){
			deshabilitarMenuContextual("video, img, audio, .audio");
		},

		deshabilitarMenuContextualGaleria: function(){
			return true;
		},

		recordingCSS: function(){
			if($(".audiorecorder").length > 0){
				$("#remote-modal .modal-dialog").addClass("audio-recording");
			}
		},

	};

	clicclacdemoStyle.prototype = _.extend({}, new blink.theme.styles.poptropica(), clicclacdemoStyle.prototype);
	blink.theme.styles.clicclacdemo = clicclacdemoStyle;

})( blink );
