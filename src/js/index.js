import jquery from "jquery";
global.$ = global.jQuery = require("jquery");
import "bootstrap";
function initMap() {
  var map;
  var centroOeste = { lat: -15.6098645, lng: -56.064659000000006 };
  var myLatlng = new google.maps.LatLng(-10.3333333, -53.2);
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5"
          }
        ]
      },
      {
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd"
          }
        ]
      },
      {
        featureType: "administrative.neighborhood",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      },
      {
        featureType: "road",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      }
    ],
    { name: "simple" }
  );

  var locations = [
    {
      label: "CO",
      info:
        '<div id="content">' +
        '  <div id="siteNotice"></div>' +
        '  <h1 id="firstHeading" class="firstHeading">' +
        "    Seminário Regional UniRede Centro Oeste" +
        "  </h1>" +
        '  <div id="bodyContent">' +
        "    <p>" +
        "        <div><span><strong>Data:</strong> 16 à 18/05/2019 </span></div>" +
        "        <div><span><strong>Horário:</strong> 9h às 18h 00 min nos dias 16/05/2019 a 18/05/2019.</span></div>" +
        "        <div><span><strong>Local:</strong> Auditório da Secretaria de Tecnologia Educacional –</span></div>" +
        "        <div><span> SETEC/UFMT</span></div>" +
        "    </p>" +
        "    <p>" +
        "      Acesse a página do evento:" +
        "      <a target='parent'" +
        '        href="https://www.aunirede.org.br/portal/seminarios-regionais-unirede-2019/centro-oeste/"' +
        "        >https://www.aunirede.org.br/portal/seminarios-regionais-unirede-2019/centro-oeste/</a" +
        "      >" +
        "    </p>" +
        "  </div>" +
        "</div>",
      coord: {
        lat: -15.6098645,
        lng: -56.064659000000006
      }
    },
    {
      label: "S",
      info:
        '<div id="content">' +
        '    <div id="siteNotice"></div>' +
        '    <h1 id="firstHeading" class="firstHeading">' +
        "      Seminário Regional UniRede Sul" +
        "    </h1>" +
        '    <div id="bodyContent">' +
        "      <p>" +
        "          <div><span><strong>Data:</strong> 20 à 21/05/2019 </span></div>" +
        "          <div><span><strong>Local:</strong> UNIVERSIDADE ESTADUAL DE SANTA CATARINA - FLORIANÓPOLIS</span></div>" +
        "         " +
        "      </p>" +
        "      <p>" +
        "        Acesse a página do evento:" +
        "        <a  target='parent'" +
        '          href="https://www.aunirede.org.br/portal/seminarios-regionais-unirede-2019/sul/"' +
        "          >https://www.aunirede.org.br/portal/seminarios-regionais-unirede-2019/sul/</a" +
        "        >" +
        "      </p>" +
        "    </div>" +
        "  </div>",
      coord: {
        lat: -27.5859587,
        lng: -48.502371400000015
      }
    },
    {
      label: "N",
      info:
        '<div id="content">' +
        '    <div id="siteNotice"></div>' +
        '    <h1 id="firstHeading" class="firstHeading">' +
        "      Seminário Regional UniRede Norte" +
        "    </h1>" +
        '    <div id="bodyContent">' +
        "      <p>" +
        "          <div><span><strong>Data:</strong> 11 à 12/04/2019 </span></div>" +
        "          <div><span><strong>Local:</strong> UNIVERSIDADE FEDERAL DO PARÁ - BELÉM  - PARÁ</span></div>" +
        "         " +
        "      </p>" +
        "      <p>" +
        "        Acesse a página do evento:" +
        "        <a  target='parent'" +
        '          href="https://www.aunirede.org.br/portal/seminarios-regionais-unirede-2019/norte/"' +
        "          >https://www.aunirede.org.br/portal/seminarios-regionais-unirede-2019/norte/</a" +
        "        >" +
        "      </p>" +
        "    </div>" +
        "  </div>",
      coord: {
        lat: -1.4743965,
        lng: -48.453221799999994
      }
    },
    {
      label: "NE",
      info:
        '<div id="content">' +
        '    <div id="siteNotice"></div>' +
        '    <h1 id="firstHeading" class="firstHeading">' +
        "      Seminário Regional UniRede Nordeste" +
        "    </h1>" +
        '    <div id="bodyContent">' +
        "      <p>" +
        "          <div><span><strong>Data:</strong> 14 à 15/05/2019 </span></div>" +
        "          <div><span><strong>Local:</strong> UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE</span></div>" +
        "         " +
        "      </p>" +
        "      <p>" +
        "        Acesse a página do evento:" +
        "        <a  target='parent'" +
        '          href="https://www.aunirede.org.br/portal/seminarios-regionais-unirede-2019/nordeste/"' +
        "          >https://www.aunirede.org.br/portal/seminarios-regionais-unirede-2019/nordeste/</a" +
        "        >" +
        "      </p>" +
        "    </div>" +
        "  </div>",
      coord: {
        lat: -5.8407114,
        lng: -35.20058540000002
      }
    },
    {
      label: "SE",
      info:
        '<div id="content">' +
        '    <div id="siteNotice"></div>' +
        '    <h1 id="firstHeading" class="firstHeading">' +
        "      Seminário Regional UniRede Sudeste" +
        "    </h1>" +
        '    <div id="bodyContent">' +
        "      <p>" +
        "          <div><span><strong>Data:</strong> 09 à 10/05/2019 </span></div>" +
        "          <div><span><strong>Local:</strong> UNIVERSIDADE FEDERAL DE UBERLÂNDIA - UFU</span></div>" +
        "         " +
        "      </p>" +
        "      <p>" +
        "        Acesse a página do evento," +
        "        <a  target='parent'" +
        '          href="https://www.aunirede.org.br/portal/seminarios-regionais-unirede-2019/sudeste/"' +
        "          >https://www.aunirede.org.br/portal/seminarios-regionais-unirede-2019/sudeste/</a" +
        "        >" +
        "      </p>" +
        "    </div>" +
        "  </div>",
      coord: {
        lat: -18.9181139,
        lng: -48.25763610000001
      }
    }
  ];

  var infowindow = new google.maps.InfoWindow();

  var mapOptions = {
    zoom: 4,
    center: myLatlng
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  map.mapTypes.set("simple", styledMapType);
  map.setMapTypeId("simple");

  var json;

  $.getJSON("regioes-nome.geojson", function(data) {
    map.data.addGeoJson(data);
  });

  var coInfo = [];
  var markers = new Array();

  function createMarker(item) {
    console.log(item);
    var infowindow = new google.maps.InfoWindow({
      content: item.info
    });

    var marker = new google.maps.Marker({
      position: item.coord,
      map: map,
      label: item.label
    });

    markers.push(marker);

    marker.addListener("click", function() {
      infowindow.open(map, marker);
    });
  }

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.

  map.data.setStyle(function(feature) {
    console.log(feature.getGeometry().getType());
    if (feature.getGeometry().getType() === "Polygon") {
      var polyPath = event.feature
        .getGeometry()
        .getAt(0)
        .getArray();
      var poly = new google.maps.Polygon({
        paths: polyPath
      });
    }

    var color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    return /** @type {!google.maps.Data.StyleOptions} */ ({
      fillColor: color,
      strokeColor: "#000",
      strokeWeight: 1,
      icon: "http://maps.google.com/mapfiles/ms/micons/blue.png"
    });
  });

  locations.forEach(createMarker);
}
window.initMap = initMap;
