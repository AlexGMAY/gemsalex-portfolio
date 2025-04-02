import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  FaceSmileIcon,
  AcademicCapIcon,
  ArrowPathIcon,
  PaperAirplaneIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  ServerIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { LeafIcon } from "lucide-react";

const iconComponents = {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  FaceSmileIcon,
  AcademicCapIcon,
  ArrowPathIcon,
  PaperAirplaneIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  ServerIcon,
  CpuChipIcon,
  LeafIcon,
};

interface ProductIconProps {
  iconName: string;
  className?: string;
}

export default function ProductIcon({ iconName, className }: ProductIconProps) {
  const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
  if (!IconComponent) return null;

  return <IconComponent className={`w-6 h-6 ${className}`} />;
}
