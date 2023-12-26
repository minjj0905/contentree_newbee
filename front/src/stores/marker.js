import { defineStore } from 'pinia';
import { useMapStore } from './map';
import { useRouter } from 'vue-router';
import usePopupList from '../queries/usePopupList';

export const useMarkerStore = defineStore('marker', () => {
  const router = useRouter();
  const { getMap, morph } = useMapStore();

  const { data: popupList } = usePopupList();

  const initMarkers = () => {
    popupList.value.forEach((store) => {
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(store?.lat, store?.lng),
        map: getMap(),
        icon: {
          content:
            '<div class="navermarker markercontainer flex flex-col justify-center items-center">' +
            '  <div class="navermarker markerhover w-full border-2  border-purple-600 font-semibold text-purple-600 bg-white p-1 px-4 rounded-lg z-2">' +
            store?.name +
            '  </div>' +
            '  <div class="w-3 -mt-1.5 overflow-hidden rotate-45">' +
            '    <div class="markerpointer markerhover h-3 border-r-2 border-b-2 border-purple-600 font-semibold text-purple-600 z-0 bg-white "/>' +
            '  </div>' +
            '</div>',
          size: new window.naver.maps.Size(70, 60),
          anchor: new window.naver.maps.Point(30, 30),
        },
      });

      window.naver.maps.Event.addListener(marker, 'click', () => {
        router.push(`/popup/${store?.name}`);
        morph(new window.naver.maps.LatLng(store.lat, store.lng));
      });
    });
  };

  return { initMarkers };
});
