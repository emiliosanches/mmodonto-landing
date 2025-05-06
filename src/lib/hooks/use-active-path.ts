import { usePathname } from "next/navigation";

export function useActivePath(): (path: string) => boolean {
  const pathname = usePathname();

  const isPathActive = (path: string) => {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }

    if (path.endsWith("/*")) return matchForSingleSegmentWildcard(path);

    if (path.endsWith("/**")) return matchForMultiSegmentWildcard(path);

    return path == pathname;
  };

  const matchForSingleSegmentWildcard = (path: string) => {
    const segment = path.slice(0, -2); // Remove '/*' from the end

    if (!pathname.startsWith(segment)) return false;

    const remainingPathSegment = pathname.slice(segment.length).slice(1); // Remove mentioned path and trim leading '/'

    return remainingPathSegment !== "" && !remainingPathSegment.includes("/");
  };

  const matchForMultiSegmentWildcard = (path: string) => {
    const segment = path.slice(0, -3); // Remove '/**' from the end
    console.log(segment);
    return pathname.startsWith(segment);
  };

  return isPathActive;
}
