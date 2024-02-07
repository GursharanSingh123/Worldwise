import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [locParams] = useSearchParams();
  const lat = locParams.get("lat");
  const lng = locParams.get("lng");
  return [lat, lng];
}
