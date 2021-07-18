import { UrlSegment } from '@angular/router';

/**
 * Parses atmost last two sengments of the given router url and combines them with '-' and returns it.
 * @param url router url segments as UrlSegment[]
 * @returns tool id.
 */
export function getToolIdFromUrl(url: UrlSegment[]) {
  // extract last two paths
  if (url?.length > 2) url = url.slice(-2);
  let toolId = url.reduce(
    (acc, curVal) => `${acc.trim()}${acc.trim() ? '-' : ''}${curVal}`,
    ''
  );
  return toolId;
}
