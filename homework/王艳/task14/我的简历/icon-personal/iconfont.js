;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M726.440977 62.784952 295.383474 62.784952c-59.518558 0-107.764376 48.245817-107.764376 107.764376l0 682.506349c0 59.518558 48.245817 107.764376 107.764376 107.764376l431.05648 0c59.518558 0 107.764376-48.245817 107.764376-107.764376L834.204329 170.548304C834.204329 111.030769 785.958512 62.784952 726.440977 62.784952zM762.362094 853.054653c0 19.839861-16.08228 35.921117-35.921117 35.921117L295.383474 888.97577c-19.839861 0-35.921117-16.08228-35.921117-35.921117l0-107.764376 502.899738 0L762.362094 853.054653zM762.362094 673.448042 259.462357 673.448042 259.462357 314.233797l502.899738 0L762.362094 673.448042zM762.362094 242.391563 259.462357 242.391563l0-71.842235c0-19.839861 16.08228-35.921117 35.921117-35.921117l431.05648 0c19.839861 0 35.921117 16.08228 35.921117 35.921117L762.361071 242.391563zM510.912226 853.054653c19.839861 0 35.921117-16.08228 35.921117-35.921117s-16.08228-35.921117-35.921117-35.921117-35.921117 16.08228-35.921117 35.921117S491.072365 853.054653 510.912226 853.054653z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dizhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999488 949.020308c-117.532857 0-228.322126-18.036795-311.960011-50.78771-89.400123-35.006282-138.635477-83.833337-138.635477-137.485281 0-27.15036 13.024641-67.624167 75.074859-106.260116 43.931558-27.352975 105.499799-49.376571 178.050162-63.686485 10.534937-2.079358 20.759813 4.776793 22.838148 15.312754 2.077312 10.534937-4.777817 20.759813-15.312754 22.837124-132.644019 26.163893-221.763756 79.129198-221.763756 131.796722 0 36.011168 41.525766 72.925916 113.927749 101.276614 79.229482 31.024597 184.984085 48.110741 297.782104 48.110741 112.798019 0 218.551598-17.08512 297.78108-48.110741 72.40403-28.350698 113.928772-65.264423 113.928772-101.276614 0-53.358255-90.715071-106.633622-225.734184-132.569318-10.546194-2.025123-17.452487-12.216229-15.426341-22.7614 2.025123-10.547217 12.220323-17.452487 22.7614-15.426341 73.634044 14.144138 136.194892 36.170804 180.917466 63.696718 63.11855 38.848797 76.367295 79.662341 76.367295 107.060341 0 53.651944-49.234331 102.478999-138.635477 137.485281C740.321614 930.984536 629.531322 949.020308 511.999488 949.020308z"  ></path>' +
    '' +
    '<path d="M512.012791 768.30955c-5.720282 0-11.384281-2.511193-15.223726-7.334036-92.082208-115.657136-145.973606-214.814484-174.967964-277.630135-30.347169-65.7464-40.566928-106.270349-41.764196-111.246687-5.770424-20.85191-8.696056-42.488697-8.696056-64.314795 0-64.276932 25.031093-124.706233 70.481238-170.157401 45.451168-45.451168 105.880469-70.481238 170.157401-70.481238 10.737552 0 19.442818 8.704243 19.442818 19.442818 0 10.737552-8.705266 19.442818-19.442818 19.442818-111.246687 0-201.753003 90.506317-201.753003 201.753003 0 18.428721 2.480494 36.682457 7.372921 54.251601l0.211824 0.830925c0.085958 0.367367 9.552563 40.024575 39.969317 105.638969 28.078499 60.57154 80.263022 156.279323 169.410388 268.251533 6.688329 8.400321 5.300726 20.6319-3.100618 27.320229C520.531815 766.925017 516.256442 768.30955 512.012791 768.30955z"  ></path>' +
    '' +
    '<path d="M515.917728 768.30955c-4.243651 0-8.518001-1.384533-12.096503-4.233418-8.400321-6.688329-9.788947-18.919908-3.100618-27.320229 171.202197-215.035518 209.017454-372.32689 209.378681-373.890502l0.211824-0.829901c4.892427-17.571191 7.372921-35.823903 7.372921-54.251601 0-111.246687-90.505293-201.753003-201.753003-201.753003-10.737552 0-19.442818-8.705266-19.442818-19.442818 0-10.738575 8.705266-19.442818 19.442818-19.442818 64.276932 0 124.706233 25.031093 170.157401 70.481238 45.450145 45.451168 70.481238 105.880469 70.481238 170.157401 0 21.824051-2.925632 43.459814-8.696056 64.313771-1.195222 4.972245-11.414981 45.497217-41.764196 111.24771-28.994358 62.815651-82.885755 161.972998-174.967964 277.630135C527.303033 765.797333 521.636986 768.30955 515.917728 768.30955z"  ></path>' +
    '' +
    '<path d="M511.999488 433.513438c-63.685461 0-115.496477-51.811016-115.496477-115.496477s51.811016-115.496477 115.496477-115.496477c63.684438 0 115.496477 51.811016 115.496477 115.496477S575.683926 433.513438 511.999488 433.513438zM511.999488 241.405095c-42.243103 0-76.610842 34.367739-76.610842 76.610842s34.367739 76.610842 76.610842 76.610842 76.610842-34.367739 76.610842-76.610842S554.242592 241.405095 511.999488 241.405095z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-youxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.55488 260.02432l0.34304-0.3328-0.49152-0.50688c-12.61056-79.62112-81.76128-140.47232-165.1456-140.47232L178.7392 118.71232c-92.3648 0-167.2192 74.56768-167.2192 166.66624l0 433.34144c0 92.0832 74.89536 166.66624 167.2192 166.66624L845.2608 885.38624c92.3648 0 167.2192-74.56768 167.2192-166.66624L1012.48 285.38368C1012.48 276.7616 1011.82464 268.29312 1010.55488 260.02432zM204.5696 209.98656l614.85568 0c23.6544 0 45.1584 8.87808 61.53216 23.3728-2.40128 2.17088-4.80768 4.34688-7.41888 6.68672-39.10144 35.07712-77.80352 67.67616-115.04128 96.88064-29.53728 23.168-57.68192 43.78112-83.64544 61.27104-67.00032 45.14304-122.86976 71.1936-153.7024 71.46496-14.70976 0-60.07808-7.38304-163.38432-75.8016-25.1392-16.65024-52.31104-35.99872-80.76288-57.51296-38.66624-29.24032-79.00672-61.89568-119.90528-97.05472-3.69152-3.1744-7.168-6.17984-10.46528-9.0368C162.50368 217.6 182.62016 209.98656 204.5696 209.98656zM819.4304 794.11712 204.5696 794.11712c-51.2256 0-92.6976-41.30304-92.6976-92.19072l0-359.2192c33.96608 28.52864 67.47648 55.33696 99.91168 79.86688 30.19776 22.8352 59.22816 43.50464 86.28224 61.42464 96.60928 63.97952 167.50592 93.77792 223.11424 93.77792l1.36192-0.00512c54.81472-0.49664 122.40896-29.06624 212.72064-89.91232 28.0832-18.92352 58.34752-41.07776 89.95328-65.86368 28.33408-22.22592 57.4464-46.30528 86.90176-71.83872l0 351.7696C912.12288 752.83968 870.69184 794.11712 819.4304 794.11712z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-boke" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M260.812609 594.761935c20.509103-17.712407 30.763654-40.86164 30.763654-69.450768 0-22.992667-6.758937-41.677215-20.275789-56.04955-13.516852-14.369266-31.54239-22.874987-54.06843-25.51921l0-0.932232c18.021445-5.903453 32.161491-15.847943 42.416042-29.830399 10.254551-13.983479 15.382339-30.450523 15.382339-49.408293 0-22.682605-8.469905-41.09393-25.403576-55.233975-16.936741-14.135952-39.85266-21.208021-68.750827-21.208021L85.788363 287.129486l0 334.200548 97.416703 0C214.434326 621.330034 240.303506 612.474342 260.812609 594.761935zM124.941082 322.553277l44.980447 0c42.72508 0 64.089667 16.237823 64.089667 48.708352 0 18.801205-6.139837 33.366945-18.411325 43.698245-12.275581 10.334369-29.131481 15.498996-50.572816 15.498996l-40.085974 0L124.941082 322.553277zM124.941082 465.649346l44.980447 0c53.755298 0 80.636528 19.733437 80.636528 59.196217 0 18.956747-6.332219 33.873482-18.99461 44.747133-12.664438 10.876722-30.493501 16.313547-53.486168 16.313547l-53.136198 0L124.941082 465.649346zM354.268094 286.438755l38.220487 0 0 334.89128-38.220487 0 0-334.89128ZM656.189472 587.43097c21.518083-22.915919 32.278147-53.405327 32.278147-91.474364 0-38.839587-9.984399-69.217455-29.947056-91.124394-19.966751-21.906939-47.740304-32.860409-83.317591-32.860409-37.288255 0-66.886363 11.266601-88.793302 33.792641-21.906939 22.530133-32.860409 53.835116-32.860409 93.92109 0 36.82265 10.523681 66.384943 31.578206 88.677669 21.051455 22.296819 49.211818 33.443693 84.483136 33.443693C605.810061 621.806895 634.669342 610.349959 656.189472 587.43097zM492.70198 498.287697c0-29.364795 7.143701-52.397371 21.440311-69.100798 14.293541-16.700357 33.712823-25.053606 58.263985-25.053606 24.704658 0 43.698245 8.080026 56.982806 24.238031 13.283538 16.161075 19.926842 39.152718 19.926842 68.984141 0 29.521361-6.642281 52.283784-19.926842 68.285223-13.283538 16.004509-32.278147 24.004717-56.982806 24.004717-24.238031 0-43.580564-8.157797-58.030671-24.471344C499.926522 548.861536 492.70198 526.566764 492.70198 498.287697zM953.218422 597.10326 953.218422 377.565195l-38.22151 0 0 33.093722-0.931209 0c-15.538905-25.789363-39.386032-38.687114-71.548546-38.687114-33.873482 0-60.558238 11.965519-80.053244 35.890418-19.501146 23.927969-29.249161 56.166207-29.249161 96.717785 0 35.737946 9.05012 64.206324 27.151383 85.415368 18.098193 21.208021 41.98523 31.81152 71.66418 31.81152 36.509519 0 63.856353-15.22475 82.035388-45.679365l0.931209 0 0 26.102495c0 24.480554-4.532223 44.140313-13.553691 59.026348l-19.323091 20.441565c-0.276293 0.187265-0.546446 0.379647-0.825808 0.562818-6.04467 3.734044-48.823985 27.699875-110.058628-0.473791-66.173119-30.446429-160.317289-32.940227-183.51257 46.759977l27.288506 21.030989c0 0 0-37.520545 42.296315-52.529377 31.41857-11.148921 65.62258 2.943029 92.685959 14.557554l0 0.160659c7.767917 3.939729 16.008602 7.169283 24.701588 9.721409 0.143263 0.046049 0.288572 0.094144 0.430812 0.13917 1.215688 0.381693 2.52552 0.73678 3.90903 1.066285 14.81645 3.891633 30.921243 5.854335 48.331775 5.854335C911.269008 728.545918 953.218422 684.73204 953.218422 597.10326zM894.83778 566.806233c-13.440104 15.228843-30.879288 22.839171-52.320623 22.839171-21.131273 0-38.10383-7.960299-50.922786-23.889083-12.81691-15.924691-19.2269-37.171598-19.2269-63.74072 0-30.916127 6.678096-54.960753 20.042475-72.129784 13.361309-17.165961 31.848359-25.752524 55.467289-25.752524 19.111267 0 35.074843 6.757914 47.892777 20.275789 12.817933 13.516852 19.2269 29.754674 19.2269 48.708352l0 35.1915C914.996912 532.080338 908.275837 551.581484 894.83778 566.806233z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)