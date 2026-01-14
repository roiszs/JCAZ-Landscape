import { type LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export function Icon({ icon: IconCmp, className, size = 18, strokeWidth = 2 }: Props) {
  return <IconCmp className={className} size={size} strokeWidth={strokeWidth} />;
}
