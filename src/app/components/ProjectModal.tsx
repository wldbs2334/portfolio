import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, X } from "lucide-react";
import { projects } from "./PortfolioDetail";

type Project = (typeof projects)[number];

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>

    </AnimatePresence>
  );
}
