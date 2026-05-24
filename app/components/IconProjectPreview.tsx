import type { CSSProperties } from "react";
import attachIcon from "../case-studies/icons-images/banner-svgs/attach.svg";
import bellIcon from "../case-studies/icons-images/banner-svgs/bell.svg";
import bookmarkIcon from "../case-studies/icons-images/banner-svgs/bookmark-empty.svg";
import boomGateIcon from "../case-studies/icons-images/banner-svgs/boom-gate.svg";
import buildingIcon from "../case-studies/icons-images/banner-svgs/building.svg";
import cameraIcon from "../case-studies/icons-images/banner-svgs/camera.svg";
import copyIcon from "../case-studies/icons-images/banner-svgs/copy.svg";
import deleteIcon from "../case-studies/icons-images/banner-svgs/delete.svg";
import editIcon from "../case-studies/icons-images/banner-svgs/edit.svg";
import filterIcon from "../case-studies/icons-images/banner-svgs/filter.svg";
import fullScreenIcon from "../case-studies/icons-images/banner-svgs/full-screen.svg";
import lockIcon from "../case-studies/icons-images/banner-svgs/lock-1.svg";
import mapIcon from "../case-studies/icons-images/banner-svgs/map.svg";
import notesIcon from "../case-studies/icons-images/banner-svgs/notes.svg";
import packingConsolidationIcon from "../case-studies/icons-images/banner-svgs/packing-consolidation.svg";
import refreshIcon from "../case-studies/icons-images/banner-svgs/refresh.svg";
import routeIcon from "../case-studies/icons-images/banner-svgs/route-1.svg";
import saveIcon from "../case-studies/icons-images/banner-svgs/save.svg";
import searchIcon from "../case-studies/icons-images/banner-svgs/search.svg";
import shareIcon from "../case-studies/icons-images/banner-svgs/share.svg";
import showIcon from "../case-studies/icons-images/banner-svgs/show.svg";
import sortingIcon from "../case-studies/icons-images/banner-svgs/sorting.svg";
import uploadFileIcon from "../case-studies/icons-images/banner-svgs/upload-file.svg";
import warehouseStorageIcon from "../case-studies/icons-images/banner-svgs/warehouse-storage.svg";

type IconLayer = {
  src: string;
  label: string;
  top: number;
  left: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  delay: number;
};

const iconLayers: IconLayer[] = [
  { src: uploadFileIcon, label: "Upload", top: 22, left: 22, x: -43, y: -31, rotation: -15, scale: 1.24, delay: 0 },
  { src: showIcon, label: "Preview", top: 22, left: 36, x: -13, y: -42, rotation: 7, scale: 1.06, delay: 24 },
  { src: bellIcon, label: "Notification", top: 22, left: 50, x: 3, y: -30, rotation: -6, scale: 1.12, delay: 10 },
  { src: packingConsolidationIcon, label: "Warehouse", top: 22, left: 64, x: 27, y: -39, rotation: 13, scale: 1.04, delay: 34 },
  { src: bookmarkIcon, label: "Bookmark", top: 22, left: 78, x: 46, y: -24, rotation: 17, scale: 1.26, delay: 16 },
  { src: lockIcon, label: "Lock", top: 36, left: 22, x: -48, y: -2, rotation: 9, scale: 1.12, delay: 30 },
  { src: filterIcon, label: "Favorite", top: 36, left: 36, x: -24, y: -22, rotation: -18, scale: 1.22, delay: 6 },
  { src: mapIcon, label: "Map", top: 36, left: 50, x: 5, y: -8, rotation: 5, scale: 1.03, delay: 38 },
  { src: buildingIcon, label: "Building", top: 36, left: 64, x: 30, y: -10, rotation: -11, scale: 1.15, delay: 20 },
  { src: deleteIcon, label: "Settings", top: 36, left: 78, x: 50, y: 1, rotation: 13, scale: 1.13, delay: 28 },
  { src: routeIcon, label: "Route", top: 50, left: 22, x: -39, y: 13, rotation: -12, scale: 1.2, delay: 14 },
  { src: notesIcon, label: "Notes", top: 50, left: 36, x: -12, y: -3, rotation: 6, scale: 1.04, delay: 32 },
  { src: editIcon, label: "Edit", top: 50, left: 50, x: 8, y: -2, rotation: -5, scale: 1.01, delay: 4 },
  { src: uploadFileIcon, label: "Upload action", top: 50, left: 64, x: 21, y: 12, rotation: 8, scale: 1.13, delay: 26 },
  { src: boomGateIcon, label: "Gate", top: 50, left: 78, x: 45, y: 12, rotation: -15, scale: 1.17, delay: 8 },
  { src: copyIcon, label: "Copy", top: 64, left: 22, x: -44, y: 24, rotation: 17, scale: 1.12, delay: 36 },
  { src: refreshIcon, label: "Refresh", top: 64, left: 36, x: -7, y: 24, rotation: -8, scale: 1.16, delay: 12 },
  { src: saveIcon, label: "Save", top: 64, left: 50, x: 3, y: 13, rotation: 5, scale: 1.05, delay: 22 },
  { src: shareIcon, label: "Share", top: 64, left: 64, x: 32, y: 27, rotation: 13, scale: 1.22, delay: 2 },
  { src: attachIcon, label: "Attach", top: 64, left: 78, x: 42, y: 20, rotation: -18, scale: 1.11, delay: 18 },
  { src: warehouseStorageIcon, label: "Storage", top: 78, left: 22, x: -38, y: 40, rotation: -13, scale: 1.25, delay: 26 },
  { src: searchIcon, label: "Search", top: 78, left: 36, x: -21, y: 47, rotation: 10, scale: 1.09, delay: 6 },
  { src: sortingIcon, label: "Sort", top: 78, left: 50, x: 8, y: 34, rotation: -8, scale: 1.15, delay: 40 },
  { src: fullScreenIcon, label: "Travel", top: 78, left: 64, x: 19, y: 49, rotation: 15, scale: 1.05, delay: 14 },
  { src: cameraIcon, label: "Camera", top: 78, left: 78, x: 43, y: 36, rotation: -10, scale: 1.27, delay: 34 },
];

type IconProjectPreviewProps = {
  compact?: boolean;
};

export function IconProjectPreview({ compact = false }: IconProjectPreviewProps) {
  const burstDistance = compact ? 0.68 : 1;
  const burstScale = compact ? 0.55 : 1;

  return (
    <div
      className={`icon-project-preview${compact ? " icon-project-preview--compact" : ""}`}
      aria-hidden="true"
    >
      {iconLayers.map((icon, index) => (
        <span
          key={`${icon.label}-${index}`}
          className="icon-project-layer"
          style={
            {
              "--icon-top": `${icon.top}%`,
              "--icon-left": `${icon.left}%`,
              "--icon-mask": `url(${icon.src})`,
              "--burst-x": `${Math.round(icon.x * burstDistance)}px`,
              "--burst-y": `${Math.round(icon.y * burstDistance)}px`,
              "--mobile-burst-x": `${Math.round(icon.x * 0.56)}px`,
              "--mobile-burst-y": `${Math.round(icon.y * 0.56)}px`,
              "--burst-rotation": `${icon.rotation}deg`,
              "--burst-scale": `${1 + (icon.scale - 1) * burstScale}`,
              "--mobile-burst-scale": `${1 + (icon.scale - 1) * 0.42}`,
              "--burst-delay": `${icon.delay}ms`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
