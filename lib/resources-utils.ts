import { Resource } from "./resources";

export function getFeaturedResources(resources: Resource[]) {
  return resources.filter((resource) => resource.featured);
}

export function getResourcesByType(resources: Resource[], type: string) {
  return resources.filter((resource) => resource.type === type);
}

export function getLatestResources(resources: Resource[], limit?: number) {
  const sorted = resources.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
}
