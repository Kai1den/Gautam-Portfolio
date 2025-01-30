import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const categories = ["All", "Projects", "Experience"];
const projects = [
  { id: 1, category: "Projects", image: "/images/project1.jpg" },
  { id: 2, category: "Experience", image: "/images/project2.jpg" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="portfolio-section">
      <nav className="filter-nav">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </nav>

      <section className="projects-grid">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="project-card"
          >
            <img src={project.image} alt="Project" />
          </motion.div>
        ))}
      </section>
    </div>
  );
}
