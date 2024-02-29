import { nominatimBaseAPI } from "@/services/nominatimBaseAPI";

type Place = {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  category: string;
  type: string;
  place_rank: 10;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: string;
};

type Places = Place[];

export const placesAutoCompleteSuggestions = (search: string) =>
  nominatimBaseAPI.get<Places>("/search.php", {
    params: {
      city: search,
      format: "jsonv2",
    },
  });
