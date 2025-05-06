const matchForSingleSegmentWildcard = (
  currentPath: string,
  targetPath: string
): boolean => {
  const segment = targetPath.slice(0, -2); // Remove '/*' from the end
  if (!currentPath.startsWith(segment)) return false;

  const remainingPathSegment = currentPath.slice(segment.length).slice(1); // Remove segment and leading '/'
  return remainingPathSegment !== "" && !remainingPathSegment.includes("/");
};

const matchForMultiSegmentWildcard = (
  currentPath: string,
  targetPath: string
): boolean => {
  const segment = targetPath.slice(0, -3); // Remove '/**' from the end
  return currentPath.startsWith(segment);
};

export function matchPaths(currentPath: string, targetPath: string) {
  if (!targetPath.startsWith("/")) {
    targetPath = "/" + targetPath;
  }

  if (targetPath.endsWith("/*"))
    return matchForSingleSegmentWildcard(currentPath, targetPath);
  if (targetPath.endsWith("/**"))
    return matchForMultiSegmentWildcard(currentPath, targetPath);

  return targetPath === currentPath;
}
