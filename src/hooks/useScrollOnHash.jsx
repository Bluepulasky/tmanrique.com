import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToRef = (ref) => window.scrollTo(0, ref.current?.offsetTop || 0);

export default function useScrollOnHash(ref, id) {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (location.hash == "#" + id.replace(/\s+/g, "-").toLowerCase()) {
        scrollToRef(ref);
      }
    }, 0);
  }, [id, ref, location]);
}
