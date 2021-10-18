/// <reference types="@types/google.maps" />
/**
 * Instructions to every other class on how they can be an argument
 * addMarker
 */
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementName: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementName), {
      zoom: 1
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
