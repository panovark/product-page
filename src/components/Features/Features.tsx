import styles from "./Features.module.scss";

const features = [
  {
    title: "AI Processing",
    description:
      "52 TOPS of AI inferencing power with DSP (48 TOPS INT8) and GPU (4 TOPS FP16) for real-time neural network execution.",
  },
  {
    title: "Stereo Depth",
    description:
      "75mm baseline stereo cameras with ideal depth range of 70cm to 12m. RGB-depth alignment and advanced filtering.",
  },
  {
    title: "48MP Camera",
    description:
      "High-resolution IMX586 sensor for detailed image capture. Available in Auto Focus, Fixed Focus, and Wide variants.",
  },
  {
    title: "Industrial Grade",
    description:
      "IP67 water resistant housing with Gorilla Glass front. Designed for -20°C to 50°C operating temperature.",
  },
  {
    title: "Connectivity",
    description:
      "USB-C (10 Gbps) and PoE (2.5 Gbps) options for flexible deployment. M12 and M8 industrial connectors.",
  },
  {
    title: "Standalone Device",
    description:
      "Runs Luxonis OS (Linux 5.15) with 6-core ARM CPU, 8GB RAM, and 128GB storage. No host computer required.",
  },
];

export function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <h2 className={styles.title}>Key Features</h2>
        <p className={styles.subtitle}>
          Everything you need for advanced computer vision and edge AI
        </p>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
