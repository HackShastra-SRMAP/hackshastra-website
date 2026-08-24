import websiteDataJson from './websiteData.json';

// Type definitions for site data configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface TeamMemberData {
  name: string;
  role: string;
  specialty: string;
  year?: string;
  image: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  instagram?: string;
}

export interface EventData {
  title: string;
  subtitle: string;
  image: string;
  completed?: boolean;
  registerUrl?: string;
  announcement?: string;
}

export interface GalleryImageData {
  id: string;
  img: string;
  height?: number;
}

export interface DepartmentData {
  name: string;
  icon: string;
}

export interface PartnershipData {
  title: string;
  description: string;
}

/**
 * Global dynamic asset resolver for images and media referenced in websiteData.json.
 * Pre-indexes asset paths into a Map for instant O(1) lookups.
 */
const rawAssetModules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,svg,webp,gif,mp4}', { eager: true, import: 'default' }) as Record<string, string>;

// Pre-build O(1) lookup Map for full paths and filename basenames
const assetMap = new Map<string, string>();
const filenameMap = new Map<string, string>();

Object.entries(rawAssetModules).forEach(([key, val]) => {
  assetMap.set(key, val);
  const basename = key.split('/').pop();
  if (basename && !filenameMap.has(basename)) {
    filenameMap.set(basename, val);
  }
});

/**
 * Fast O(1) asset resolver function
 */
export function getImageUrl(path: string | undefined): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  // Normalize clean path
  let cleanPath = path.replace(/^@\/assets\//, '/src/assets/');
  if (!cleanPath.startsWith('/src/assets/')) {
    cleanPath = `/src/assets/${cleanPath.replace(/^\//, '')}`;
  }

  // 1. Direct O(1) match
  const directMatch = assetMap.get(cleanPath);
  if (directMatch) return directMatch;

  // 2. O(1) Basename match
  const filename = path.split('/').pop();
  if (filename) {
    const filenameMatch = filenameMap.get(filename);
    if (filenameMatch) return filenameMatch;
  }

  return path;
}

// Export the centralized siteData object
export const siteData = websiteDataJson;
export default siteData;
