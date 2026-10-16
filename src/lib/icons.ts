import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { createElement } from 'react';

const fallbackIcon = Icons.Layers;

export function renderLucideIcon(name: string | undefined, props?: LucideProps) {
  const iconMap = Icons as unknown as Record<string, typeof fallbackIcon | undefined>;
  const Icon = name ? iconMap[name] ?? fallbackIcon : fallbackIcon;
  return createElement(Icon, props);
}
